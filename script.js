const incomeKey = "financeTracker.monthlyIncome";
const budgetPercentKey = "financeTracker.defaultBudgetPercent";
const expensesKey = "financeTracker.expenses";
const themeKey = "financeTracker.colorTheme";
const repeatBudgetWarningKey = "financeTracker.repeatBudgetWarning";
const budgetWarningShownKey = "financeTracker.budgetWarningShown";

const themeOptions = document.querySelectorAll('input[name="color-theme"]');
const themeStatus = document.querySelector("#theme-status");
const budgetForm = document.querySelector("#budget-form");
const incomeInput = document.querySelector("#monthly-income");
const suggestionText = document.querySelector("#suggestion-text");
const acceptButton = document.querySelector("#accept-suggestion");
const defaultSection = document.querySelector("#default-budget-section");
const defaultBudgetText = document.querySelector("#default-budget-text");
const defaultBudgetForm = document.querySelector("#default-budget-form");
const defaultPercentInput = document.querySelector("#default-budget-percent");
const statusMessage = document.querySelector("#status-message");
const expenseForm = document.querySelector("#expense-form");
const expenseNameInput = document.querySelector("#expense-name");
const expenseAmountInput = document.querySelector("#expense-amount");
const pendingExpensesList = document.querySelector("#pending-expenses");
const monthlyExpensesList = document.querySelector("#monthly-expenses");
const pendingExpensesEmpty = document.querySelector("#pending-expenses-empty");
const monthlyExpensesEmpty = document.querySelector("#monthly-expenses-empty");
const budgetWarning = document.querySelector("#budget-warning");
const dismissBudgetWarning = document.querySelector("#dismiss-budget-warning");
const repeatBudgetWarningToggle = document.querySelector("#repeat-budget-warning-toggle");

let suggestedPercent = null;
let defaultPercent = null;
let expenses = [];
let budgetWarningShown = false;

function applyTheme(theme) {
  document.body.dataset.theme = theme;
  for (const option of themeOptions) {
    option.checked = option.value === theme;
  }
}

function loadTheme() {
  try {
    const savedTheme = localStorage.getItem(themeKey);
    if ([...themeOptions].some((option) => option.value === savedTheme)) {
      applyTheme(savedTheme);
    } else {
      applyTheme("white");
    }
  } catch {
    applyTheme("white");
    themeStatus.textContent = "Your browser could not load your saved colour. White is selected.";
  }
}

for (const option of themeOptions) {
  option.addEventListener("change", () => {
    if (!option.checked) {
      return;
    }

    applyTheme(option.value);
    try {
      localStorage.setItem(themeKey, option.value);
      themeStatus.textContent = "Your colour choice was saved on this device.";
    } catch {
      themeStatus.textContent = "Your colour changed, but your browser could not save the choice.";
    }
  });
}

function showStatus(message) {
  statusMessage.textContent = message;
}

function readStoredNumber(key) {
  try {
    const storedValue = localStorage.getItem(key);
    if (storedValue === null || storedValue.trim() === "") {
      return null;
    }

    const value = Number(storedValue);
    return Number.isFinite(value) ? value : null;
  } catch {
    showStatus("Your browser could not load saved information.");
    return null;
  }
}

function saveNumber(key, value) {
  try {
    localStorage.setItem(key, String(value));
    return true;
  } catch {
    showStatus("Your browser could not save this. Check its storage settings and try again.");
    return false;
  }
}

function removeStoredValue(key) {
  try {
    localStorage.removeItem(key);
  } catch {
    showStatus("Your browser could not update saved information. Check its storage settings and try again.");
  }
}

function saveExpenses() {
  try {
    localStorage.setItem(expensesKey, JSON.stringify(expenses));
    return true;
  } catch {
    showStatus("Your browser could not save expenses. Check its storage settings and try again.");
    return false;
  }
}

function formatAmount(amount) {
  return amount.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

function createExpenseRow(expense) {
  const row = document.createElement("li");
  const details = document.createElement("label");
  const checkbox = document.createElement("input");
  const name = document.createElement("span");
  const amount = document.createElement("span");
  const deleteButton = document.createElement("button");

  details.className = "expense-details";
  checkbox.type = "checkbox";
  checkbox.checked = expense.completed;
  checkbox.setAttribute(
    "aria-label",
    `Move ${expense.name} ${expense.completed ? "out of" : "into"} this month's expenses`
  );
  name.className = "expense-name";
  name.textContent = expense.name;
  amount.className = "expense-amount";
  amount.textContent = formatAmount(expense.amount);
  deleteButton.type = "button";
  deleteButton.className = "delete-button";
  deleteButton.textContent = "Delete";
  deleteButton.setAttribute("aria-label", `Delete ${expense.name}`);

  checkbox.addEventListener("change", () => {
    expense.completed = checkbox.checked;
    saveExpenses();
    renderExpenses();
  });

  deleteButton.addEventListener("click", () => {
    expenses = expenses.filter((item) => item.id !== expense.id);
    const saved = saveExpenses();
    renderExpenses();
    if (saved) {
      showStatus(`${expense.name} was deleted.`);
    }
  });

  details.append(checkbox, name, amount);
  row.append(details, deleteButton);
  return row;
}

function renderExpenses() {
  pendingExpensesList.replaceChildren();
  monthlyExpensesList.replaceChildren();

  const pending = expenses.filter((expense) => !expense.completed);
  const monthly = expenses.filter((expense) => expense.completed);

  pendingExpensesEmpty.hidden = pending.length > 0;
  monthlyExpensesEmpty.hidden = monthly.length > 0;

  for (const expense of pending) {
    pendingExpensesList.append(createExpenseRow(expense));
  }

  for (const expense of monthly) {
    monthlyExpensesList.append(createExpenseRow(expense));
  }

  checkBudgetWarning();
}

function checkBudgetWarning() {
  const income = Number(incomeInput.value);
  if (
    incomeInput.value.trim() === "" ||
    !Number.isFinite(income) ||
    income < 0 ||
    defaultPercent === null
  ) {
    if (budgetWarning.open) {
      budgetWarning.close();
    }
    return;
  }

  const monthlyExpenses = expenses
    .filter((expense) => expense.completed)
    .reduce((total, expense) => total + expense.amount, 0);
  const budget = income * defaultPercent / 100;
  if (monthlyExpenses <= budget) {
    if (budgetWarning.open) {
      budgetWarning.close();
    }
    return;
  }

  if (budgetWarning.open || (budgetWarningShown && !repeatBudgetWarningToggle.checked)) {
    return;
  }

  budgetWarning.showModal();
  budgetWarningShown = true;
  try {
    localStorage.setItem(budgetWarningShownKey, "true");
  } catch {
    settingsStatus.textContent = "Your browser could not save that the budget warning was shown.";
  }
}

function readExpenses() {
  try {
    const storedValue = localStorage.getItem(expensesKey);
    if (storedValue === null) {
      return [];
    }

    const savedExpenses = JSON.parse(storedValue);
    if (!Array.isArray(savedExpenses)) {
      throw new Error("Saved expenses are not a list.");
    }

    return savedExpenses.filter((expense) =>
      expense !== null &&
      typeof expense === "object" &&
      typeof expense.id === "string" &&
      typeof expense.name === "string" &&
      expense.name.trim() !== "" &&
      Number.isFinite(expense.amount) &&
      expense.amount >= 0 &&
      typeof expense.completed === "boolean"
    );
  } catch {
    showStatus("Saved expenses could not be read. Add them again to save a new list.");
    return [];
  }
}

function updateDefaultDisplay() {
  if (defaultPercent === null) {
    defaultSection.hidden = true;
    return;
  }

  defaultSection.hidden = false;
  defaultPercentInput.value = String(defaultPercent);

  const income = Number(incomeInput.value);
  if (incomeInput.value !== "" && Number.isFinite(income) && income >= 0) {
    const amount = income * defaultPercent / 100;
    defaultBudgetText.textContent =
      `${defaultPercent}% of your income (${formatAmount(amount)}).`;
  } else {
    defaultBudgetText.textContent = `${defaultPercent}% of your monthly income.`;
  }
}

function updateSuggestion() {
  const rawIncome = incomeInput.value.trim();
  const income = Number(rawIncome);

  if (rawIncome === "" || !Number.isFinite(income) || income < 0) {
    suggestedPercent = null;
    acceptButton.disabled = true;
    suggestionText.textContent = "Enter an income of 0 or more to see a suggestion.";
    updateDefaultDisplay();
    return;
  }

  suggestedPercent = income <= 5000 ? 20 : 30;
  const amount = income * suggestedPercent / 100;
  suggestionText.textContent =
    `${suggestedPercent}% of your income is ${formatAmount(amount)}.`;
  acceptButton.disabled = false;
  updateDefaultDisplay();
}

incomeInput.addEventListener("input", () => {
  updateSuggestion();
  checkBudgetWarning();
  const rawIncome = incomeInput.value.trim();
  const income = Number(rawIncome);
  if (rawIncome === "" || !Number.isFinite(income) || income < 0) {
    removeStoredValue(incomeKey);
  } else {
    saveNumber(incomeKey, income);
  }
});

budgetForm.addEventListener("submit", (event) => {
  event.preventDefault();
  updateSuggestion();
});

acceptButton.addEventListener("click", () => {
  if (suggestedPercent === null) {
    return;
  }

  if (saveNumber(budgetPercentKey, suggestedPercent)) {
    defaultPercent = suggestedPercent;
    updateDefaultDisplay();
    checkBudgetWarning();
    showStatus("Suggestion saved as your default budget.");
  }
});

defaultBudgetForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = Number(defaultPercentInput.value);

  if (
    defaultPercentInput.value.trim() === "" ||
    !Number.isFinite(value) ||
    value < 0 ||
    value > 100
  ) {
    showStatus("Enter a percentage from 0 to 100.");
    return;
  }

  if (saveNumber(budgetPercentKey, value)) {
    defaultPercent = value;
    updateDefaultDisplay();
    checkBudgetWarning();
    showStatus("Your default budget was updated.");
  }
});

expenseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = expenseNameInput.value.trim();
  const amount = Number(expenseAmountInput.value);

  if (
    name === "" ||
    expenseAmountInput.value.trim() === "" ||
    !Number.isFinite(amount) ||
    amount < 0
  ) {
    showStatus("Enter an expense name and a price of 0 or more.");
    return;
  }

  expenses.push({
    id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    name,
    amount,
    completed: false
  });
  const saved = saveExpenses();
  renderExpenses();
  expenseForm.reset();
  if (saved) {
    showStatus(`${name} was added to expenses to track.`);
  }
});

const gameModeKey = "financeTracker.gameMode";
const settingsToggle = document.querySelector("#settings-toggle");
const settingsPanel = document.querySelector("#settings-panel");
const gameModeToggle = document.querySelector("#game-mode-toggle");
const settingsStatus = document.querySelector("#settings-status");
const financeView = document.querySelector("#finance-view");
const gameView = document.querySelector("#game-view");
const gameMenu = document.querySelector("#game-menu");
const gameScreens = {
  snake: document.querySelector("#snake-game"),
  minesweeper: document.querySelector("#minesweeper-game"),
  dino: document.querySelector("#dino-game"),
  shooter: document.querySelector("#shooter-game")
};
let activeGameCleanup = null;

function stopActiveGame() {
  if (activeGameCleanup !== null) {
    activeGameCleanup();
    activeGameCleanup = null;
  }

  for (const screen of Object.values(gameScreens)) {
    screen.hidden = true;
  }
  gameMenu.hidden = false;
}

function setGameMode(enabled, saveChoice = true) {
  gameModeToggle.checked = enabled;
  financeView.hidden = enabled;
  gameView.hidden = !enabled;

  if (!enabled) {
    stopActiveGame();
  }

  if (saveChoice) {
    try {
      localStorage.setItem(gameModeKey, String(enabled));
      settingsStatus.textContent = enabled
        ? "Game Mode is on. Choose a game below."
        : "Game Mode is off. Your finance tracker is back.";
    } catch {
      settingsStatus.textContent = "Game Mode changed, but your browser could not save the choice.";
    }
  }
}

settingsToggle.addEventListener("click", () => {
  settingsPanel.hidden = !settingsPanel.hidden;
  settingsToggle.setAttribute("aria-expanded", String(!settingsPanel.hidden));
});

dismissBudgetWarning.addEventListener("click", () => {
  budgetWarning.close();
});

repeatBudgetWarningToggle.addEventListener("change", () => {
  try {
    localStorage.setItem(repeatBudgetWarningKey, String(repeatBudgetWarningToggle.checked));
    settingsStatus.textContent = repeatBudgetWarningToggle.checked
      ? "Budget warnings will repeat every 5 minutes while you are over budget."
      : "Budget warnings will not repeat after the first warning.";
  } catch {
    settingsStatus.textContent = "Your choice changed, but your browser could not save it.";
  }
  checkBudgetWarning();
});

gameModeToggle.addEventListener("change", () => {
  setGameMode(gameModeToggle.checked);
});

function startSnakeGame() {
  const canvas = document.querySelector("#snake-canvas");
  const context = canvas.getContext("2d");
  const status = document.querySelector("#snake-status");
  const cellSize = 20;
  const cells = canvas.width / cellSize;
  const controller = new AbortController();
  let snake;
  let direction;
  let nextDirection;
  let food;
  let score;
  let timer;
  let finished;

  function placeFood() {
    do {
      food = {
        x: Math.floor(Math.random() * cells),
        y: Math.floor(Math.random() * cells)
      };
    } while (snake.some((segment) => segment.x === food.x && segment.y === food.y));
  }

  function draw() {
    context.fillStyle = "#e8f4ff";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "#e5484d";
    context.fillRect(food.x * cellSize + 2, food.y * cellSize + 2, cellSize - 4, cellSize - 4);
    context.fillStyle = "#176b52";
    for (const segment of snake) {
      context.fillRect(segment.x * cellSize + 1, segment.y * cellSize + 1, cellSize - 2, cellSize - 2);
    }
  }

  function reset() {
    snake = [{ x: 9, y: 10 }, { x: 8, y: 10 }, { x: 7, y: 10 }];
    direction = { x: 1, y: 0 };
    nextDirection = direction;
    score = 0;
    finished = false;
    placeFood();
    status.textContent = "Score: 0. Use the arrow keys or buttons to move.";
    clearInterval(timer);
    timer = setInterval(step, 130);
    draw();
  }

  function step() {
    if (finished) {
      return;
    }

    direction = nextDirection;
    const head = {
      x: snake[0].x + direction.x,
      y: snake[0].y + direction.y
    };
    const hitsWall = head.x < 0 || head.x >= cells || head.y < 0 || head.y >= cells;
    const hitsSnake = snake.slice(0, -1).some(
      (segment) => segment.x === head.x && segment.y === head.y
    );

    if (hitsWall || hitsSnake) {
      finished = true;
      clearInterval(timer);
      status.textContent = `Game over. Your score was ${score}. Press Restart Snake to play again.`;
      return;
    }

    snake.unshift(head);
    if (head.x === food.x && head.y === food.y) {
      score += 1;
      placeFood();
      status.textContent = `Score: ${score}. Keep going!`;
    } else {
      snake.pop();
    }
    draw();
  }

  function turn(x, y) {
    if (direction.x + x !== 0 || direction.y + y !== 0) {
      nextDirection = { x, y };
    }
  }

  function handleKey(event) {
    const moves = {
      ArrowUp: [0, -1],
      w: [0, -1],
      ArrowDown: [0, 1],
      s: [0, 1],
      ArrowLeft: [-1, 0],
      a: [-1, 0],
      ArrowRight: [1, 0],
      d: [1, 0]
    };
    const move = moves[event.key] || moves[event.key.toLowerCase()];
    if (move) {
      event.preventDefault();
      turn(move[0], move[1]);
    }
  }

  document.addEventListener("keydown", handleKey, { signal: controller.signal });
  document.querySelectorAll("[data-snake-direction]").forEach((button) => {
    button.addEventListener("click", () => {
      const moves = {
        up: [0, -1],
        down: [0, 1],
        left: [-1, 0],
        right: [1, 0]
      };
      const move = moves[button.dataset.snakeDirection];
      turn(move[0], move[1]);
    }, { signal: controller.signal });
  });
  document.querySelector("#snake-restart").addEventListener("click", reset, {
    signal: controller.signal
  });
  reset();

  return () => {
    clearInterval(timer);
    controller.abort();
  };
}

function startMinesweeperGame() {
  const size = 9;
  const mineCount = 10;
  const board = document.querySelector("#minesweeper-board");
  const status = document.querySelector("#minesweeper-status");
  const flagButton = document.querySelector("#minesweeper-flag-mode");
  const controller = new AbortController();
  let cells;
  let flagMode = false;
  let finished = false;

  function neighbors(index) {
    const x = index % size;
    const y = Math.floor(index / size);
    const nearby = [];
    for (let dy = -1; dy <= 1; dy += 1) {
      for (let dx = -1; dx <= 1; dx += 1) {
        if (dx === 0 && dy === 0) {
          continue;
        }
        const nextX = x + dx;
        const nextY = y + dy;
        if (nextX >= 0 && nextX < size && nextY >= 0 && nextY < size) {
          nearby.push(nextY * size + nextX);
        }
      }
    }
    return nearby;
  }

  function setStatus(message = "") {
    const flags = cells.filter((cell) => cell.flagged).length;
    status.textContent = `${message}${message ? " " : ""}Flags: ${flags}/${mineCount}.`;
  }

  function render() {
    board.replaceChildren();
    cells.forEach((cell, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "minesweeper-cell";
      button.dataset.cell = String(index);
      button.setAttribute("aria-label", `Square ${index + 1}`);
      if (cell.revealed) {
        button.classList.add("revealed");
        button.disabled = true;
        if (cell.mine) {
          button.classList.add("mine");
          button.textContent = "X";
          button.setAttribute("aria-label", `Square ${index + 1}, mine`);
        } else if (cell.nearby > 0) {
          button.textContent = String(cell.nearby);
          button.dataset.count = String(cell.nearby);
          button.setAttribute("aria-label", `Square ${index + 1}, ${cell.nearby} nearby mines`);
        } else {
          button.setAttribute("aria-label", `Square ${index + 1}, clear`);
        }
      } else if (cell.flagged) {
        button.textContent = "F";
        button.setAttribute("aria-label", `Square ${index + 1}, flagged`);
      }
      button.disabled ||= finished;
      board.append(button);
    });
  }

  function reveal(startIndex) {
    const pending = [startIndex];
    while (pending.length > 0) {
      const index = pending.pop();
      const cell = cells[index];
      if (cell.revealed || cell.flagged) {
        continue;
      }
      cell.revealed = true;
      if (!cell.mine && cell.nearby === 0) {
        for (const neighbor of neighbors(index)) {
          if (!cells[neighbor].revealed && !cells[neighbor].mine) {
            pending.push(neighbor);
          }
        }
      }
    }
  }

  function clickCell(index) {
    const cell = cells[index];
    if (finished || cell.revealed) {
      return;
    }

    if (flagMode) {
      cell.flagged = !cell.flagged;
      setStatus();
      render();
      return;
    }
    if (cell.flagged) {
      return;
    }

    if (cell.mine) {
      cell.revealed = true;
      finished = true;
      cells.filter((item) => item.mine).forEach((item) => {
        item.revealed = true;
      });
      setStatus("Boom! You found a mine. Start a new game to try again.");
      render();
      return;
    }

    reveal(index);
    const safeSquares = cells.filter((item) => !item.mine && item.revealed).length;
    if (safeSquares === size * size - mineCount) {
      finished = true;
      setStatus("You win! You found every safe square.");
    } else {
      setStatus();
    }
    render();
  }

  function reset() {
    cells = Array.from({ length: size * size }, () => ({
      mine: false,
      revealed: false,
      flagged: false,
      nearby: 0
    }));
    const positions = Array.from({ length: cells.length }, (_, index) => index);
    for (let i = positions.length - 1; i > 0; i -= 1) {
      const swapIndex = Math.floor(Math.random() * (i + 1));
      [positions[i], positions[swapIndex]] = [positions[swapIndex], positions[i]];
    }
    positions.slice(0, mineCount).forEach((index) => {
      cells[index].mine = true;
    });
    cells.forEach((cell, index) => {
      cell.nearby = neighbors(index).filter((neighbor) => cells[neighbor].mine).length;
    });
    finished = false;
    flagMode = false;
    flagButton.textContent = "Flag mode: off";
    flagButton.setAttribute("aria-pressed", "false");
    setStatus("Avoid the 10 hidden mines.");
    render();
  }

  board.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-cell]");
    if (button && board.contains(button)) {
      clickCell(Number(button.dataset.cell));
    }
  }, { signal: controller.signal });
  board.addEventListener("contextmenu", (event) => {
    const button = event.target.closest("button[data-cell]");
    if (button && board.contains(button)) {
      event.preventDefault();
      flagMode = true;
      flagButton.textContent = "Flag mode: on";
      flagButton.setAttribute("aria-pressed", "true");
      clickCell(Number(button.dataset.cell));
    }
  }, { signal: controller.signal });
  flagButton.addEventListener("click", () => {
    flagMode = !flagMode;
    flagButton.textContent = `Flag mode: ${flagMode ? "on" : "off"}`;
    flagButton.setAttribute("aria-pressed", String(flagMode));
  }, { signal: controller.signal });
  document.querySelector("#minesweeper-restart").addEventListener("click", reset, {
    signal: controller.signal
  });
  reset();

  return () => controller.abort();
}

function startDinoGame() {
  const canvas = document.querySelector("#dino-canvas");
  const context = canvas.getContext("2d");
  const status = document.querySelector("#dino-status");
  const controller = new AbortController();
  const ground = 178;
  let playerY;
  let velocity;
  let obstacles;
  let elapsed;
  let score;
  let spawnTime;
  let lastFrame;
  let lastAnnouncedScore;
  let animationId;
  let running;
  let finished;

  function reset() {
    playerY = ground - 42;
    velocity = 0;
    obstacles = [];
    elapsed = 0;
    score = 0;
    lastAnnouncedScore = -1;
    spawnTime = 0.8;
    lastFrame = 0;
    running = false;
    finished = false;
    status.textContent = "Press Space or Jump to start.";
    draw();
  }

  function jump() {
    if (finished) {
      reset();
    }
    running = true;
    if (playerY >= ground - 42) {
      velocity = -470;
    }
  }

  function draw() {
    context.fillStyle = "#fbfbfb";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.strokeStyle = "#78838f";
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(0, ground);
    context.lineTo(canvas.width, ground);
    context.stroke();

    context.fillStyle = "#39424e";
    context.fillRect(58, playerY + 10, 28, 32);
    context.fillRect(76, playerY, 20, 22);
    context.fillRect(88, playerY + 5, 12, 4);
    context.fillRect(62, playerY + 38, 8, 8);
    context.fillRect(78, playerY + 38, 8, 8);
    context.fillStyle = "#fff";
    context.fillRect(88, playerY + 4, 3, 3);

    context.fillStyle = "#176b52";
    for (const obstacle of obstacles) {
      context.fillRect(obstacle.x, ground - obstacle.height, obstacle.width, obstacle.height);
      context.fillRect(obstacle.x - 6, ground - obstacle.height + 10, 8, 8);
      context.fillRect(obstacle.x + obstacle.width - 2, ground - obstacle.height + 18, 8, 8);
    }
    context.fillStyle = "#52606d";
    context.font = "18px system-ui, sans-serif";
    context.fillText(`Score: ${score}`, canvas.width - 112, 28);
  }

  function loop(timestamp) {
    const delta = lastFrame === 0 ? 0 : Math.min((timestamp - lastFrame) / 1000, 0.05);
    lastFrame = timestamp;

    if (running && !finished) {
      elapsed += delta;
      score = Math.floor(elapsed * 10);
      velocity += 1350 * delta;
      playerY += velocity * delta;
      if (playerY > ground - 42) {
        playerY = ground - 42;
        velocity = 0;
      }
      spawnTime -= delta;
      if (spawnTime <= 0) {
        obstacles.push({
          x: canvas.width + 10,
          width: 18 + Math.random() * 12,
          height: 28 + Math.random() * 25
        });
        spawnTime = 0.85 + Math.random() * 0.8;
      }
      const speed = 260 + Math.min(score * 2, 220);
      obstacles.forEach((obstacle) => {
        obstacle.x -= speed * delta;
      });
      obstacles = obstacles.filter((obstacle) => obstacle.x + obstacle.width > 0);

      const playerBox = { left: 62, right: 88, top: playerY + 7, bottom: playerY + 40 };
      if (obstacles.some((obstacle) =>
        playerBox.right > obstacle.x &&
        playerBox.left < obstacle.x + obstacle.width &&
        playerBox.bottom > ground - obstacle.height
      )) {
        finished = true;
        running = false;
        status.textContent = `Game over. Your score was ${score}. Press Jump or Restart Dino to play again.`;
      } else if (score % 10 === 0 && score !== lastAnnouncedScore) {
        lastAnnouncedScore = score;
        status.textContent = `Score: ${score}. Keep running!`;
      }
    }

    draw();
    animationId = requestAnimationFrame(loop);
  }

  function handleKey(event) {
    if (event.code === "Space" || event.key === "ArrowUp") {
      event.preventDefault();
      if (!event.repeat) {
        jump();
      }
    }
  }

  document.addEventListener("keydown", handleKey, { signal: controller.signal });
  document.querySelector("#dino-jump").addEventListener("click", jump, {
    signal: controller.signal
  });
  document.querySelector("#dino-restart").addEventListener("click", reset, {
    signal: controller.signal
  });
  reset();
  animationId = requestAnimationFrame(loop);

  return () => {
    cancelAnimationFrame(animationId);
    controller.abort();
  };
}

function startShooterGame() {
  const canvas = document.querySelector("#shooter-canvas");
  const context = canvas.getContext("2d");
  const status = document.querySelector("#shooter-status");
  const controller = new AbortController();
  const map = [
    "############",
    "#..........#",
    "#..##......#",
    "#..........#",
    "#.....#....#",
    "#..........#",
    "#....##....#",
    "#..........#",
    "#..........#",
    "#..#.......#",
    "#..........#",
    "############"
  ];
  const fov = Math.PI / 3;
  const rayCount = 180;
  const keys = new Set();
  let player;
  let targets;
  let hits;
  let lastFrame;
  let animationId;
  let bulletShotAt = 0;

  function reset() {
    player = { x: 1.5, y: 1.5, angle: 0 };
    targets = [
      { x: 5.5, y: 1.5 },
      { x: 9.5, y: 3.5 },
      { x: 4.5, y: 5.5 },
      { x: 8.5, y: 8.5 }
    ];
    hits = 0;
    lastFrame = 0;
    bulletShotAt = 0;
    status.textContent = `${targets.length} robot targets remaining. Use W/S to move, A/D to turn, and Space to shoot.`;
    draw();
  }

  function isWall(x, y) {
    const row = map[Math.floor(y)];
    return !row || row[Math.floor(x)] !== ".";
  }

  function angleDifference(angle) {
    let difference = angle - player.angle;
    while (difference > Math.PI) {
      difference -= Math.PI * 2;
    }
    while (difference < -Math.PI) {
      difference += Math.PI * 2;
    }
    return difference;
  }

  function shoot() {
    bulletShotAt = performance.now();
    const centerRay = Math.floor(rayCount / 2);
    const rayDistance = renderDepth[centerRay];
    const target = targets
      .map((item) => ({
        item,
        distance: Math.hypot(item.x - player.x, item.y - player.y),
        angle: angleDifference(Math.atan2(item.y - player.y, item.x - player.x))
      }))
      .filter((entry) =>
        Math.abs(entry.angle) < Math.atan(0.28 / entry.distance) + 0.025 &&
        rayDistance > entry.distance - 0.35
      )
      .sort((first, second) => first.distance - second.distance)[0];

    if (target) {
      targets = targets.filter((item) => item !== target.item);
      hits += 1;
      status.textContent = targets.length === 0
        ? `Great job! You hit all ${hits} robot targets.`
        : `Hit! ${targets.length} robot targets left.`;
    } else {
      status.textContent = `Missed. ${targets.length} robot targets remain.`;
    }
  }

  let renderDepth = [];

  function draw() {
    const horizon = canvas.height / 2;
    context.fillStyle = "#9bd0e5";
    context.fillRect(0, 0, canvas.width, horizon);
    context.fillStyle = "#526b54";
    context.fillRect(0, horizon, canvas.width, horizon);
    renderDepth = new Array(rayCount);
    const stripWidth = canvas.width / rayCount;

    for (let ray = 0; ray < rayCount; ray += 1) {
      const rayAngle = player.angle - fov / 2 + (ray / (rayCount - 1)) * fov;
      const directionX = Math.cos(rayAngle);
      const directionY = Math.sin(rayAngle);
      let distance = 0.02;
      while (
        distance < 18 &&
        !isWall(player.x + directionX * distance, player.y + directionY * distance)
      ) {
        distance += 0.025;
      }
      const correctedDistance = Math.max(0.1, distance * Math.cos(rayAngle - player.angle));
      renderDepth[ray] = correctedDistance;
      const wallHeight = Math.min(canvas.height, canvas.height * 0.82 / correctedDistance);
      const shade = Math.max(0.25, 1 - correctedDistance / 15);
      const tone = Math.floor(115 * shade);
      context.fillStyle = `rgb(${tone}, ${Math.floor(tone * 1.1)}, ${Math.floor(tone * 1.2)})`;
      context.fillRect(
        ray * stripWidth,
        horizon - wallHeight / 2,
        stripWidth + 1,
        wallHeight
      );
    }

    const visibleTargets = targets
      .map((target) => ({
        ...target,
        distance: Math.hypot(target.x - player.x, target.y - player.y),
        angle: angleDifference(Math.atan2(target.y - player.y, target.x - player.x))
      }))
      .filter((target) => Math.abs(target.angle) < fov / 2 && target.distance < 18)
      .sort((first, second) => second.distance - first.distance);

    visibleTargets.forEach((target) => {
      const screenX = (0.5 + target.angle / fov) * canvas.width;
      const column = Math.max(0, Math.min(rayCount - 1, Math.floor(screenX / stripWidth)));
      if (renderDepth[column] < target.distance - 0.3) {
        return;
      }
      const size = Math.min(canvas.height * 1.2, canvas.height * 0.55 / target.distance);
      const bodyWidth = size * 0.42;
      const bodyTop = horizon - size * 0.2;
      context.fillStyle = "#e85d75";
      context.fillRect(screenX - bodyWidth / 2, bodyTop, bodyWidth, size * 0.62);
      context.fillStyle = "#ffd166";
      context.beginPath();
      context.arc(screenX, bodyTop - size * 0.12, size * 0.22, 0, Math.PI * 2);
      context.fill();
      context.fillStyle = "#263238";
      context.fillRect(screenX - size * 0.12, bodyTop - size * 0.16, size * 0.05, size * 0.05);
      context.fillRect(screenX + size * 0.06, bodyTop - size * 0.16, size * 0.05, size * 0.05);
    });

    context.fillStyle = "#111";
    context.fillRect(canvas.width * 0.72, canvas.height * 0.82, canvas.width * 0.2, canvas.height * 0.1);
    context.fillRect(canvas.width * 0.78, canvas.height * 0.73, canvas.width * 0.12, canvas.height * 0.12);
    context.fillRect(canvas.width * 0.79, canvas.height * 0.68, canvas.width * 0.1, canvas.height * 0.08);

    const bulletProgress = (performance.now() - bulletShotAt) / 180;
    if (bulletProgress >= 0 && bulletProgress < 1) {
      const progress = bulletProgress;
      const bulletX = canvas.width * (0.8 - progress * 0.3);
      const bulletY = canvas.height * (0.72 - progress * 0.2);
      const bulletWidth = canvas.width * (0.025 - progress * 0.018);
      const bulletHeight = canvas.height * (0.03 - progress * 0.02);
      context.fillStyle = "#f97316";
      context.fillRect(bulletX, bulletY, bulletWidth, bulletHeight);
    }

    context.strokeStyle = "#fff";
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(canvas.width / 2 - 8, horizon);
    context.lineTo(canvas.width / 2 + 8, horizon);
    context.moveTo(canvas.width / 2, horizon - 8);
    context.lineTo(canvas.width / 2, horizon + 8);
    context.stroke();
  }

  function movePlayer(delta) {
    const turnLeft = keys.has("a") || keys.has("ArrowLeft") || keys.has("turn-left");
    const turnRight = keys.has("d") || keys.has("ArrowRight") || keys.has("turn-right");
    if (turnLeft) {
      player.angle -= 1.8 * delta;
    }
    if (turnRight) {
      player.angle += 1.8 * delta;
    }

    const forward = keys.has("w") || keys.has("ArrowUp") || keys.has("forward");
    const backward = keys.has("s") || keys.has("ArrowDown") || keys.has("backward");
    const moveX =
      (Number(forward) - Number(backward)) * Math.cos(player.angle);
    const moveY =
      (Number(forward) - Number(backward)) * Math.sin(player.angle);
    const length = Math.hypot(moveX, moveY);
    if (length > 0) {
      const step = 2.5 * delta / Math.max(1, length);
      const nextX = player.x + moveX * step;
      const nextY = player.y + moveY * step;
      if (!isWall(nextX, player.y)) {
        player.x = nextX;
      }
      if (!isWall(player.x, nextY)) {
        player.y = nextY;
      }
    }
  }

  function loop(timestamp) {
    const delta = lastFrame === 0 ? 0 : Math.min((timestamp - lastFrame) / 1000, 0.05);
    lastFrame = timestamp;
    movePlayer(delta);
    draw();
    animationId = requestAnimationFrame(loop);
  }

  function handleKeyDown(event) {
    const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
    if (["w", "a", "s", "d", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(key)) {
      event.preventDefault();
    }
    keys.add(key);
    if (event.code === "Space" && !event.repeat) {
      shoot();
    }
  }

  function handleKeyUp(event) {
    const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
    keys.delete(key);
  }

  document.addEventListener("keydown", handleKeyDown, { signal: controller.signal });
  document.addEventListener("keyup", handleKeyUp, { signal: controller.signal });
  window.addEventListener("blur", () => {
    keys.clear();
  }, { signal: controller.signal });
  canvas.addEventListener("pointerdown", shoot, { signal: controller.signal });
  document.querySelectorAll("[data-shooter-action]").forEach((button) => {
    button.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      const action = button.dataset.shooterAction;
      if (action === "shoot") {
        shoot();
      } else {
        keys.add(action);
        button.setPointerCapture(event.pointerId);
      }
    }, { signal: controller.signal });
    const release = () => {
      keys.delete(button.dataset.shooterAction);
    };
    button.addEventListener("pointerup", release, { signal: controller.signal });
    button.addEventListener("pointercancel", release, { signal: controller.signal });
    button.addEventListener("lostpointercapture", release, { signal: controller.signal });
  });
  document.querySelector("#shooter-restart").addEventListener("click", reset, {
    signal: controller.signal
  });
  reset();
  animationId = requestAnimationFrame(loop);

  return () => {
    cancelAnimationFrame(animationId);
    controller.abort();
    keys.clear();
  };
}

function launchGame(name) {
  stopActiveGame();
  gameMenu.hidden = true;
  gameScreens[name].hidden = false;
  const startGame = {
    snake: startSnakeGame,
    minesweeper: startMinesweeperGame,
    dino: startDinoGame,
    shooter: startShooterGame
  }[name];
  activeGameCleanup = startGame();
}

document.querySelectorAll("[data-launch-game]").forEach((button) => {
  button.addEventListener("click", () => {
    launchGame(button.dataset.launchGame);
  });
});

document.querySelectorAll(".back-to-games").forEach((button) => {
  button.addEventListener("click", () => {
    stopActiveGame();
  });
});

const savedIncome = readStoredNumber(incomeKey);
if (savedIncome !== null && savedIncome >= 0) {
  incomeInput.value = String(savedIncome);
}

const savedPercent = readStoredNumber(budgetPercentKey);
if (savedPercent !== null && savedPercent >= 0 && savedPercent <= 100) {
  defaultPercent = savedPercent;
}

loadTheme();
expenses = readExpenses();
try {
  repeatBudgetWarningToggle.checked =
    localStorage.getItem(repeatBudgetWarningKey) !== "false";
  budgetWarningShown = localStorage.getItem(budgetWarningShownKey) === "true";
} catch {
  settingsStatus.textContent = "Your browser could not load the saved budget warning settings.";
}

updateSuggestion();
renderExpenses();
setInterval(checkBudgetWarning, 5 * 60 * 1000);

try {
  setGameMode(localStorage.getItem(gameModeKey) === "true", false);
} catch {
  setGameMode(false, false);
  settingsStatus.textContent = "Your browser could not load the saved Game Mode choice.";
}
