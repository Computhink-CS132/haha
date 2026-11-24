const incomeKey = "financeTracker.monthlyIncome";
const budgetPercentKey = "financeTracker.defaultBudgetPercent";
const expensesKey = "financeTracker.expenses";

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

let suggestedPercent = null;
let defaultPercent = null;
let expenses = [];

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

const savedIncome = readStoredNumber(incomeKey);
if (savedIncome !== null && savedIncome >= 0) {
  incomeInput.value = String(savedIncome);
}

const savedPercent = readStoredNumber(budgetPercentKey);
if (savedPercent !== null && savedPercent >= 0 && savedPercent <= 100) {
  defaultPercent = savedPercent;
}

expenses = readExpenses();
updateSuggestion();
renderExpenses();
