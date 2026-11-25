const incomeKey = "financeTracker.monthlyIncome";
const budgetPercentKey = "financeTracker.defaultBudgetPercent";
const expensesKey = "financeTracker.expenses";
const themeKey = "financeTracker.colorTheme";
const repeatBudgetWarningKey = "financeTracker.repeatBudgetWarning";
const budgetWarningShownKey = "financeTracker.budgetWarningShown";
const languageKey = "financeTracker.language";
const easyReadingKey = "financeTracker.easyReading";
const pauseAnimationsKey = "financeTracker.pauseAnimations";
const textSizeKey = "financeTracker.textSize";
const savingsGoalKey = "financeTracker.savingsGoal";
const expenseCategories = ["food", "housing", "transport", "utilities", "health", "other"];
const expenseCategoryTranslationKeys = {
  food: "categoryFood",
  housing: "categoryHousing",
  transport: "categoryTransport",
  utilities: "categoryUtilities",
  health: "categoryHealth",
  other: "categoryOther"
};

const languages = [
  ["en", "English"], ["zh", "Chinese"], ["af", "Afrikaans"], ["sq", "Albanian"],
  ["am", "Amharic"], ["ar", "Arabic"], ["hy", "Armenian"], ["az", "Azerbaijani"],
  ["eu", "Basque"], ["be", "Belarusian"], ["bn", "Bengali"], ["bs", "Bosnian"],
  ["bg", "Bulgarian"], ["my", "Burmese"], ["ca", "Catalan"], ["ceb", "Cebuano"],
  ["ny", "Chichewa"], ["co", "Corsican"], ["hr", "Croatian"], ["cs", "Czech"],
  ["da", "Danish"], ["nl", "Dutch"], ["eo", "Esperanto"], ["et", "Estonian"],
  ["tl", "Filipino"], ["fi", "Finnish"], ["fr", "French"], ["fy", "Frisian"],
  ["gl", "Galician"], ["ka", "Georgian"], ["de", "German"], ["el", "Greek"],
  ["gu", "Gujarati"], ["ht", "Haitian Creole"], ["ha", "Hausa"], ["haw", "Hawaiian"],
  ["he", "Hebrew"], ["hi", "Hindi"], ["hmn", "Hmong"], ["hu", "Hungarian"],
  ["is", "Icelandic"], ["ig", "Igbo"], ["id", "Indonesian"], ["ga", "Irish"],
  ["it", "Italian"], ["ja", "Japanese"], ["kn", "Kannada"],
  ["kk", "Kazakh"], ["km", "Khmer"], ["rw", "Kinyarwanda"], ["ko", "Korean"],
  ["ku", "Kurdish"], ["ky", "Kyrgyz"], ["lo", "Lao"], ["la", "Latin"],
  ["lv", "Latvian"], ["lt", "Lithuanian"], ["mk", "Macedonian"],
  ["mg", "Malagasy"], ["ms", "Malay"], ["ml", "Malayalam"], ["mt", "Maltese"],
  ["mi", "Maori"], ["mr", "Marathi"], ["mn", "Mongolian"], ["ne", "Nepali"],
  ["no", "Norwegian"], ["or", "Odia"], ["ps", "Pashto"], ["fa", "Persian"],
  ["pl", "Polish"], ["pt", "Portuguese"], ["pa", "Punjabi"], ["ro", "Romanian"],
  ["ru", "Russian"], ["sm", "Samoan"], ["gd", "Scots Gaelic"], ["sr", "Serbian"],
  ["st", "Sesotho"], ["sn", "Shona"], ["sd", "Sindhi"], ["si", "Sinhala"],
  ["sk", "Slovak"], ["sl", "Slovenian"], ["so", "Somali"], ["es", "Spanish"],
  ["su", "Sundanese"], ["sw", "Swahili"], ["sv", "Swedish"], ["tg", "Tajik"],
  ["ta", "Tamil"], ["tt", "Tatar"], ["te", "Telugu"], ["th", "Thai"],
  ["tr", "Turkish"], ["uk", "Ukrainian"], ["ur", "Urdu"],
  ["ug", "Uyghur"], ["uz", "Uzbek"], ["vi", "Vietnamese"]
];

const translations = {
  en: {
    easyReading: "Easy Reading",
    highContrast: "High contrast",
    pauseAnimations: "Pause interface animations",
    readSummaryAloud: "Read summary aloud",
    summaryReadStarted: "Reading the summary aloud.",
    summaryReadStopped: "Reading stopped.",
    summaryReadFinished: "Finished reading the summary.",
    summaryReadUnavailable: "This browser cannot read the summary aloud.",
    summaryReadFailed: "The summary could not be read aloud. Try again.",
    textSize: "Text size",
    normalText: "Normal",
    largeText: "Large",
    extraLargeText: "Extra large",
    textSizeSaved: "Text size updated.",
    confirmDeleteExpense: "Delete {name}?",
    undoDelete: "Undo last delete",
    expenseRestored: "{name} was restored.",
    expenseDeleted: "{name} was deleted. You can undo this until you delete another expense or refresh.",
    printSummary: "Print monthly summary",
    savingTipTitle: "Money-saving tip",
    nextSavingTip: "Next tip",
    weeklyGuide: "Weekly spending guide",
    weeklyPrompt: "Enter income and save a budget to see your weekly guide.",
    weeklyAvailable: "{amount} available per week for the {weeks} weeks left this month.",
    weeklyOverBudget: "Your budget is used up, so there is no weekly spending amount left.",
    monthlySummary: "Monthly summary",
    monthlyTotal: "Spent this month: {amount}.",
    biggestExpense: "Largest expense: {name} ({amount}).",
    noBiggestExpense: "No tracked expenses this month yet.",
    savingsGoal: "Savings goal",
    goalName: "Goal name",
    goalTarget: "Target amount",
    goalSaved: "Amount saved so far",
    saveGoal: "Save savings goal",
    goalProgress: "Goal progress",
    goalPrompt: "Set a savings goal to see your progress.",
    goalProgressText: "{name}: {saved} saved of {target} ({percent}% complete). {remaining} to go.",
    goalSavedStatus: "Savings goal saved on this device.",
    goalInvalid: "Enter a goal name, a target above 0, and an amount saved of 0 or more.",
    goalLoadFailed: "Your saved savings goal could not be read.",
    goalSaveFailed: "Your savings goal could not be saved. Check your browser storage and try again.",
    expenseCategory: "Category",
    categoryFood: "Food",
    categoryHousing: "Housing",
    categoryTransport: "Transport",
    categoryUtilities: "Utilities",
    categoryHealth: "Health",
    categoryOther: "Other",
    expenseCategoryInvalid: "Choose an expense category."
  },
  zh: {
    language: "语言",
    settings: "设置",
    gameMode: "游戏模式",
    repeatWarning: "每 5 分钟重复预算警告",
    easyReading: "轻松阅读",
    highContrast: "高对比度",
    pauseAnimations: "暂停界面动画",
    readSummaryAloud: "朗读摘要",
    summaryReadStarted: "正在朗读摘要。",
    summaryReadStopped: "朗读已停止。",
    summaryReadFinished: "摘要朗读完毕。",
    summaryReadUnavailable: "此浏览器无法朗读摘要。",
    summaryReadFailed: "无法朗读摘要，请重试。",
    textSize: "文字大小",
    normalText: "标准",
    largeText: "大",
    extraLargeText: "特大",
    textSizeSaved: "文字大小已更新。",
    confirmDeleteExpense: "要删除{name}吗？",
    undoDelete: "撤销上次删除",
    expenseRestored: "已恢复{name}。",
    printSummary: "打印每月摘要",
    title: "财务追踪",
    tagline: "制定适合你的每月预算。",
    chooseColour: "选择颜色",
    pageColour: "页面颜色",
    white: "白色",
    black: "黑色",
    blue: "蓝色",
    green: "绿色",
    monthlyIncome: "每月收入",
    incomeLabel: "你的每月收入",
    getSuggestion: "获取建议",
    suggestedBudget: "建议的每月预算",
    suggestionHint: "收入不超过 5,000 时建议为 20%，超过 5,000 时为 30%。",
    acceptSuggestion: "接受建议",
    expenses: "支出",
    expenseName: "支出名称",
    expenseCategory: "类别",
    categoryFood: "食品",
    categoryHousing: "住房",
    categoryTransport: "交通",
    categoryUtilities: "水电等费用",
    categoryHealth: "医疗",
    categoryOther: "其他",
    price: "价格",
    addExpense: "添加支出",
    trackExpenses: "待追踪支出",
    monthlyExpenses: "本月支出",
    noTrack: "还没有待追踪的支出。",
    noMonthly: "还没有本月支出。",
    budgetOverview: "预算概览",
    budgetUsed: "已使用的每月预算",
    changeBudget: "更改你的预算百分比",
    saveDefault: "保存默认值",
    delete: "删除",
    budgetExceeded: "超出预算",
    budgetExceededMessage: "你的每月支出已超过预算。",
    dismiss: "关闭",
    games: "游戏",
    noIncome: "输入收入以查看建议。",
    enterValidIncome: "输入 0 或更多的收入以查看建议。",
    invalidPercent: "请输入 0 到 100 之间的百分比。",
    enterExpense: "请输入支出名称和大于或等于 0 的价格。",
    suggestionSaved: "建议已保存为你的默认预算。",
    defaultUpdated: "你的默认预算已更新。",
    deleteExpense: "{name} 已被删除。",
    colourSaved: "你的颜色选择已保存在此设备上。",
    repeatWarningSettings: "重复预算警告设置",
    notTranslatedYet: "（暂未提供翻译）",
    incomeInvalid: "输入 0 或更多的收入以查看建议。",
    incomeSuggestion: "收入的 {percent}% 是 {amount}。",
    defaultWithAmount: "收入的 {percent}%（{amount}）。",
    defaultPercent: "每月收入的 {percent}%。",
    chartNeedIncome: "输入每月收入并接受预算建议以查看图表。",
    chartNeedBudget: "接受预算建议以开始追踪使用情况。",
    spentOver: "已支出 {spent}；超出预算 {over}。",
    spentWithin: "已支出 {spent}（预算 {budget}）；剩余 {left}。",
    expenseInvalid: "请输入支出名称和大于或等于 0 的价格。",
    expenseCategoryInvalid: "请选择支出类别。",
    expenseAdded: "{name} 已添加到待追踪支出。",
    expenseDeleted: "已删除{name}。刷新页面或删除其他支出前可以撤销。",
    savingTipTitle: "省钱小贴士",
    nextSavingTip: "下一条建议",
    weeklyGuide: "每周支出指南",
    weeklyPrompt: "输入收入并保存预算，以查看每周支出建议。",
    weeklyAvailable: "本月还剩 {weeks} 周，每周可支出 {amount}。",
    weeklyOverBudget: "预算已用完，本月没有剩余的每周支出额度。",
    monthlySummary: "每月总结",
    monthlyTotal: "本月已支出：{amount}。",
    biggestExpense: "最大一笔支出：{name}（{amount}）。",
    noBiggestExpense: "本月还没有已追踪的支出。",
    savingsGoal: "储蓄目标",
    goalName: "目标名称",
    goalTarget: "目标金额",
    goalSaved: "目前已存金额",
    saveGoal: "保存储蓄目标",
    goalProgress: "目标进度",
    goalPrompt: "设置储蓄目标以查看进度。",
    goalProgressText: "{name}：已存 {saved}，目标 {target}（完成 {percent}%），还差 {remaining}。",
    goalSavedStatus: "储蓄目标已保存在此设备上。",
    goalInvalid: "请输入目标名称、大于 0 的目标金额，以及大于或等于 0 的已存金额。",
    goalLoadFailed: "无法读取已保存的储蓄目标。",
    goalSaveFailed: "无法保存储蓄目标。请检查浏览器存储设置后重试。"
  },
  es: {
    language: "Idioma", settings: "Ajustes", gameMode: "Modo de juego",
    repeatWarning: "Repetir aviso de presupuesto cada 5 minutos",
    easyReading: "Lectura fácil",
    highContrast: "Alto contraste",
    pauseAnimations: "Pausar animaciones de la interfaz",
    readSummaryAloud: "Leer el resumen en voz alta",
    summaryReadStarted: "Leyendo el resumen en voz alta.",
    summaryReadStopped: "Lectura detenida.",
    summaryReadFinished: "Se terminó de leer el resumen.",
    summaryReadUnavailable: "Este navegador no puede leer el resumen en voz alta.",
    summaryReadFailed: "No se pudo leer el resumen en voz alta. Inténtalo de nuevo.",
    textSize: "Tamaño del texto",
    normalText: "Normal",
    largeText: "Grande",
    extraLargeText: "Muy grande",
    textSizeSaved: "Se actualizó el tamaño del texto.",
    confirmDeleteExpense: "¿Eliminar {name}?",
    undoDelete: "Deshacer la última eliminación",
    expenseRestored: "Se restauró {name}.",
    printSummary: "Imprimir resumen mensual",
    title: "Control de finanzas", tagline: "Planifica un presupuesto mensual que funcione para ti.",
    chooseColour: "Elige un color", pageColour: "Color de la página",
    white: "Blanco", black: "Negro", blue: "Azul", green: "Verde",
    monthlyIncome: "Ingresos mensuales", incomeLabel: "Tus ingresos mensuales",
    getSuggestion: "Ver sugerencia", suggestedBudget: "Presupuesto mensual sugerido",
    suggestionHint: "La sugerencia es del 20 % para ingresos de hasta 5.000 y del 30 % si son mayores.",
    acceptSuggestion: "Aceptar sugerencia", expenses: "Gastos",
    expenseName: "Nombre del gasto", price: "Precio", addExpense: "Añadir gasto",
    expenseCategory: "Categoría", categoryFood: "Comida", categoryHousing: "Vivienda",
    categoryTransport: "Transporte", categoryUtilities: "Servicios", categoryHealth: "Salud",
    categoryOther: "Otros",
    trackExpenses: "Gastos pendientes", monthlyExpenses: "Gastos de este mes",
    noTrack: "Aún no hay gastos pendientes.", noMonthly: "Aún no hay gastos de este mes.",
    budgetOverview: "Resumen del presupuesto", budgetUsed: "Presupuesto mensual utilizado",
    changeBudget: "Cambia el porcentaje de tu presupuesto", saveDefault: "Guardar como predeterminado",
    delete: "Eliminar", budgetExceeded: "Presupuesto excedido",
    budgetExceededMessage: "Tus gastos mensuales superan tu presupuesto.", dismiss: "Cerrar",
    notTranslatedYet: "(traducción aún no disponible)",
    incomeInvalid: "Introduce unos ingresos de 0 o más para ver una sugerencia.",
    incomeSuggestion: "El {percent} % de tus ingresos es {amount}.",
    defaultWithAmount: "{percent} % de tus ingresos ({amount}).",
    defaultPercent: "{percent} % de tus ingresos mensuales.",
    chartNeedIncome: "Introduce tus ingresos mensuales y acepta una sugerencia para ver el gráfico.",
    chartNeedBudget: "Acepta una sugerencia de presupuesto para empezar a hacer seguimiento.",
    spentOver: "Gastado {spent}; excedido por {over}.",
    spentWithin: "Gastado {spent} de {budget}; quedan {left}.",
    suggestionSaved: "La sugerencia se guardó como tu presupuesto predeterminado.",
    invalidPercent: "Introduce un porcentaje entre 0 y 100.",
    defaultUpdated: "Tu presupuesto predeterminado se actualizó.",
    expenseInvalid: "Introduce el nombre del gasto y un precio de 0 o más.",
    expenseCategoryInvalid: "Elige una categoría para el gasto.",
    expenseAdded: "{name} se añadió a los gastos pendientes.",
    expenseDeleted: "Se eliminó {name}. Puedes deshacerlo hasta eliminar otro gasto o actualizar la página.",
    savingTipTitle: "Consejo para ahorrar",
    nextSavingTip: "Siguiente consejo",
    weeklyGuide: "Guía de gastos semanales",
    weeklyPrompt: "Introduce tus ingresos y guarda un presupuesto para ver la guía semanal.",
    weeklyAvailable: "{amount} disponibles por semana durante las {weeks} semanas que quedan del mes.",
    weeklyOverBudget: "Ya has usado tu presupuesto; no queda dinero semanal disponible.",
    monthlySummary: "Resumen mensual",
    monthlyTotal: "Gastado este mes: {amount}.",
    biggestExpense: "Gasto más grande: {name} ({amount}).",
    noBiggestExpense: "Aún no hay gastos registrados este mes.",
    savingsGoal: "Meta de ahorro",
    goalName: "Nombre de la meta",
    goalTarget: "Cantidad objetivo",
    goalSaved: "Cantidad ahorrada hasta ahora",
    saveGoal: "Guardar meta de ahorro",
    goalProgress: "Progreso de la meta",
    goalPrompt: "Define una meta de ahorro para ver tu progreso.",
    goalProgressText: "{name}: {saved} ahorrados de {target} ({percent} % completado). Faltan {remaining}.",
    goalSavedStatus: "La meta de ahorro se guardó en este dispositivo.",
    goalInvalid: "Introduce un nombre, una meta mayor que 0 y una cantidad ahorrada de 0 o más.",
    goalLoadFailed: "No se pudo leer la meta de ahorro guardada.",
    goalSaveFailed: "No se pudo guardar la meta. Revisa el almacenamiento del navegador e inténtalo otra vez."
  },
  fr: {
    language: "Langue", settings: "Paramètres", gameMode: "Mode jeu",
    repeatWarning: "Répéter l’avertissement de budget toutes les 5 minutes",
    easyReading: "Lecture facile",
    highContrast: "Contraste élevé",
    pauseAnimations: "Mettre en pause les animations de l’interface",
    readSummaryAloud: "Lire le résumé à voix haute",
    summaryReadStarted: "Lecture du résumé à voix haute.",
    summaryReadStopped: "Lecture arrêtée.",
    summaryReadFinished: "Lecture du résumé terminée.",
    summaryReadUnavailable: "Ce navigateur ne peut pas lire le résumé à voix haute.",
    summaryReadFailed: "Impossible de lire le résumé à voix haute. Réessayez.",
    textSize: "Taille du texte",
    normalText: "Normale",
    largeText: "Grande",
    extraLargeText: "Très grande",
    textSizeSaved: "La taille du texte a été modifiée.",
    confirmDeleteExpense: "Supprimer {name} ?",
    undoDelete: "Annuler la dernière suppression",
    expenseRestored: "{name} a été restauré.",
    printSummary: "Imprimer le résumé mensuel",
    title: "Suivi des finances", tagline: "Planifiez un budget mensuel adapté à vos besoins.",
    chooseColour: "Choisir une couleur", pageColour: "Couleur de la page",
    white: "Blanc", black: "Noir", blue: "Bleu", green: "Vert",
    monthlyIncome: "Revenu mensuel", incomeLabel: "Votre revenu mensuel",
    getSuggestion: "Obtenir une suggestion", suggestedBudget: "Budget mensuel suggéré",
    suggestionHint: "La suggestion est de 20 % jusqu’à 5 000 et de 30 % au-delà.",
    acceptSuggestion: "Accepter la suggestion", expenses: "Dépenses",
    expenseName: "Nom de la dépense", price: "Prix", addExpense: "Ajouter une dépense",
    expenseCategory: "Catégorie", categoryFood: "Alimentation", categoryHousing: "Logement",
    categoryTransport: "Transport", categoryUtilities: "Services", categoryHealth: "Santé",
    categoryOther: "Autre",
    trackExpenses: "Dépenses à suivre", monthlyExpenses: "Dépenses du mois",
    noTrack: "Aucune dépense à suivre pour le moment.",
    noMonthly: "Aucune dépense ce mois-ci pour le moment.",
    budgetOverview: "Aperçu du budget", budgetUsed: "Budget mensuel utilisé",
    changeBudget: "Modifier le pourcentage du budget", saveDefault: "Enregistrer par défaut",
    delete: "Supprimer", budgetExceeded: "Budget dépassé",
    budgetExceededMessage: "Vos dépenses mensuelles dépassent votre budget.", dismiss: "Fermer",
    notTranslatedYet: "(traduction pas encore disponible)",
    incomeInvalid: "Saisissez un revenu supérieur ou égal à 0 pour voir une suggestion.",
    incomeSuggestion: "{percent} % de votre revenu correspond à {amount}.",
    defaultWithAmount: "{percent} % de votre revenu ({amount}).",
    defaultPercent: "{percent} % de votre revenu mensuel.",
    chartNeedIncome: "Saisissez votre revenu mensuel et acceptez une suggestion pour voir le graphique.",
    chartNeedBudget: "Acceptez une suggestion de budget pour commencer le suivi.",
    spentOver: "Dépensé : {spent} ; dépassement : {over}.",
    spentWithin: "{spent} dépensés sur {budget} ; il reste {left}.",
    suggestionSaved: "La suggestion a été enregistrée comme budget par défaut.",
    invalidPercent: "Saisissez un pourcentage entre 0 et 100.",
    defaultUpdated: "Votre budget par défaut a été mis à jour.",
    expenseInvalid: "Saisissez un nom de dépense et un prix supérieur ou égal à 0.",
    expenseCategoryInvalid: "Choisissez une catégorie de dépense.",
    expenseAdded: "{name} a été ajouté aux dépenses à suivre.",
    expenseDeleted: "{name} a été supprimé. Vous pouvez annuler avant une autre suppression ou actualisation.",
    savingTipTitle: "Astuce pour économiser",
    nextSavingTip: "Conseil suivant",
    weeklyGuide: "Guide des dépenses hebdomadaires",
    weeklyPrompt: "Saisissez vos revenus et enregistrez un budget pour voir le guide hebdomadaire.",
    weeklyAvailable: "{amount} disponibles par semaine pendant les {weeks} semaines restantes du mois.",
    weeklyOverBudget: "Votre budget est épuisé ; aucun montant hebdomadaire ne reste disponible.",
    monthlySummary: "Résumé mensuel",
    monthlyTotal: "Dépenses de ce mois : {amount}.",
    biggestExpense: "Dépense la plus élevée : {name} ({amount}).",
    noBiggestExpense: "Aucune dépense suivie ce mois-ci pour le moment.",
    savingsGoal: "Objectif d’épargne",
    goalName: "Nom de l’objectif",
    goalTarget: "Montant à atteindre",
    goalSaved: "Montant déjà épargné",
    saveGoal: "Enregistrer l’objectif",
    goalProgress: "Progression de l’objectif",
    goalPrompt: "Définissez un objectif d’épargne pour voir votre progression.",
    goalProgressText: "{name} : {saved} épargnés sur {target} ({percent} %). Il reste {remaining}.",
    goalSavedStatus: "L’objectif d’épargne a été enregistré sur cet appareil.",
    goalInvalid: "Saisissez un nom, un objectif supérieur à 0 et un montant épargné supérieur ou égal à 0.",
    goalLoadFailed: "Impossible de lire l’objectif d’épargne enregistré.",
    goalSaveFailed: "Impossible d’enregistrer l’objectif. Vérifiez le stockage du navigateur et réessayez."
  },
  hi: {
    language: "भाषा", settings: "सेटिंग्स", gameMode: "गेम मोड",
    repeatWarning: "हर 5 मिनट में बजट चेतावनी दोहराएँ",
    easyReading: "आसान पढ़ाई",
    highContrast: "उच्च कंट्रास्ट",
    pauseAnimations: "इंटरफ़ेस के एनिमेशन रोकें",
    readSummaryAloud: "सारांश ज़ोर से सुनें",
    summaryReadStarted: "सारांश पढ़कर सुनाया जा रहा है।",
    summaryReadStopped: "पढ़ना रोक दिया गया।",
    summaryReadFinished: "सारांश पढ़ना पूरा हुआ।",
    summaryReadUnavailable: "यह ब्राउज़र सारांश पढ़कर नहीं सुना सकता।",
    summaryReadFailed: "सारांश पढ़कर नहीं सुनाया जा सका। फिर से कोशिश करें।",
    textSize: "अक्षर का आकार",
    normalText: "सामान्य",
    largeText: "बड़ा",
    extraLargeText: "बहुत बड़ा",
    textSizeSaved: "अक्षर का आकार बदल गया।",
    confirmDeleteExpense: "क्या {name} हटाएँ?",
    undoDelete: "पिछला हटाना वापस लें",
    expenseRestored: "{name} वापस आ गया।",
    printSummary: "मासिक सारांश प्रिंट करें",
    title: "वित्त ट्रैकर", tagline: "अपने लिए सही मासिक बजट बनाएँ।",
    chooseColour: "रंग चुनें", pageColour: "पेज का रंग",
    white: "सफेद", black: "काला", blue: "नीला", green: "हरा",
    monthlyIncome: "मासिक आय", incomeLabel: "आपकी मासिक आय",
    getSuggestion: "सुझाव देखें", suggestedBudget: "सुझाया गया मासिक बजट",
    suggestionHint: "5,000 तक की आय के लिए 20% और इससे अधिक आय के लिए 30% का सुझाव है।",
    acceptSuggestion: "सुझाव स्वीकार करें", expenses: "खर्च",
    expenseName: "खर्च का नाम", price: "कीमत", addExpense: "खर्च जोड़ें",
    expenseCategory: "श्रेणी", categoryFood: "खाना", categoryHousing: "घर",
    categoryTransport: "यातायात", categoryUtilities: "बिजली-पानी आदि", categoryHealth: "स्वास्थ्य",
    categoryOther: "अन्य",
    trackExpenses: "ट्रैक करने के खर्च", monthlyExpenses: "इस महीने के खर्च",
    noTrack: "अभी ट्रैक करने के लिए कोई खर्च नहीं है।",
    noMonthly: "इस महीने अभी कोई खर्च नहीं है।",
    budgetOverview: "बजट का विवरण", budgetUsed: "इस्तेमाल किया गया मासिक बजट",
    changeBudget: "बजट का प्रतिशत बदलें", saveDefault: "डिफ़ॉल्ट के रूप में सहेजें",
    delete: "हटाएँ", budgetExceeded: "बजट से अधिक",
    budgetExceededMessage: "आपके मासिक खर्च बजट से अधिक हैं।", dismiss: "बंद करें",
    notTranslatedYet: "(अनुवाद अभी उपलब्ध नहीं है)",
    incomeInvalid: "सुझाव देखने के लिए 0 या उससे अधिक आय दर्ज करें।",
    incomeSuggestion: "आपकी आय का {percent}% {amount} है।",
    defaultWithAmount: "आपकी आय का {percent}% ({amount})।",
    defaultPercent: "आपकी मासिक आय का {percent} प्रतिशत।",
    chartNeedIncome: "चार्ट देखने के लिए मासिक आय दर्ज करें और बजट सुझाव स्वीकार करें।",
    chartNeedBudget: "खर्च ट्रैक करने के लिए बजट सुझाव स्वीकार करें।",
    spentOver: "{spent} खर्च हुए; बजट से {over} अधिक।",
    spentWithin: "{budget} में से {spent} खर्च हुए; {left} बाकी।",
    suggestionSaved: "सुझाव डिफ़ॉल्ट बजट के रूप में सहेजा गया।",
    invalidPercent: "0 से 100 के बीच प्रतिशत दर्ज करें।",
    defaultUpdated: "आपका डिफ़ॉल्ट बजट अपडेट हो गया।",
    expenseInvalid: "खर्च का नाम और 0 या उससे अधिक कीमत दर्ज करें।",
    expenseCategoryInvalid: "खर्च की श्रेणी चुनें।",
    expenseAdded: "{name} ट्रैक करने के खर्च में जोड़ा गया।",
    expenseDeleted: "{name} हटा दिया गया। दूसरी चीज़ हटाने या पेज रीफ़्रेश करने से पहले इसे वापस ले सकते हैं।",
    savingTipTitle: "पैसे बचाने की सलाह",
    nextSavingTip: "अगली सलाह",
    weeklyGuide: "साप्ताहिक खर्च की सलाह",
    weeklyPrompt: "साप्ताहिक सलाह देखने के लिए आय दर्ज करें और बजट सहेजें।",
    weeklyAvailable: "इस महीने के बाकी {weeks} सप्ताहों में हर सप्ताह {amount} खर्च कर सकते हैं।",
    weeklyOverBudget: "आपका बजट पूरा खर्च हो चुका है; अब साप्ताहिक खर्च के लिए राशि नहीं बची।",
    monthlySummary: "मासिक सारांश",
    monthlyTotal: "इस महीने का खर्च: {amount}।",
    biggestExpense: "सबसे बड़ा खर्च: {name} ({amount})।",
    noBiggestExpense: "इस महीने अभी कोई खर्च ट्रैक नहीं किया गया है।",
    savingsGoal: "बचत का लक्ष्य",
    goalName: "लक्ष्य का नाम",
    goalTarget: "लक्ष्य राशि",
    goalSaved: "अब तक बचाई गई राशि",
    saveGoal: "बचत लक्ष्य सहेजें",
    goalProgress: "लक्ष्य की प्रगति",
    goalPrompt: "प्रगति देखने के लिए बचत का लक्ष्य तय करें।",
    goalProgressText: "{name}: {target} में से {saved} बचाए ({percent}% पूरा)। {remaining} बाकी।",
    goalSavedStatus: "बचत लक्ष्य इस डिवाइस पर सहेजा गया।",
    goalInvalid: "लक्ष्य का नाम, 0 से बड़ी लक्ष्य राशि और 0 या उससे अधिक बचत राशि दर्ज करें।",
    goalLoadFailed: "सहेजा गया बचत लक्ष्य पढ़ा नहीं जा सका।",
    goalSaveFailed: "बचत लक्ष्य सहेजा नहीं जा सका। ब्राउज़र स्टोरेज जाँचकर फिर कोशिश करें।"
  }
};

const savingTips = {
  en: [
    "Plan meals and check what you already have before grocery shopping.",
    "Compare unit prices to find the better value.",
    "Set a small savings goal and add to it regularly.",
    "Wait a day before buying non-essential items.",
    "Use a shopping list to help avoid unplanned purchases.",
    "Turn off lights and electronics when you leave a room.",
    "Bring a water bottle instead of buying drinks.",
    "Set aside a little money right after you get paid.",
    "Cancel subscriptions you rarely use.",
    "Cook one extra meal at home instead of buying takeout."
  ],
  zh: [
    "买菜前先安排餐食，并检查家里已有的食物。",
    "比较每单位的价格，看看哪种更划算。",
    "设定一个小额储蓄目标，并定期存入一点。",
    "购买非必需品前，先等一天再决定。",
    "购物时使用清单，减少计划外购买。",
    "离开房间时关闭电灯和电子设备。",
    "自带水壶，减少购买饮料的花费。",
    "拿到收入后立刻存一小部分。",
    "取消很少使用的订阅服务。",
    "在家多做一顿饭，不要点外卖。"
  ],
  es: [
    "Planifica las comidas y revisa lo que ya tienes antes de comprar alimentos.",
    "Compara los precios por unidad para encontrar la mejor opción.",
    "Fija una meta pequeña de ahorro y aporta dinero con regularidad.",
    "Espera un día antes de comprar cosas que no sean necesarias.",
    "Usa una lista de compras para evitar compras no planeadas.",
    "Apaga las luces y los aparatos electrónicos al salir de una habitación.",
    "Lleva una botella de agua en vez de comprar bebidas.",
    "Reserva un poco de dinero justo después de recibir tu pago.",
    "Cancela las suscripciones que casi no usas.",
    "Prepara una comida más en casa en vez de pedir comida para llevar."
  ],
  fr: [
    "Planifiez vos repas et vérifiez ce que vous avez déjà avant les courses.",
    "Comparez les prix au kilo ou à l’unité pour trouver la meilleure valeur.",
    "Fixez un petit objectif d’épargne et ajoutez-y régulièrement.",
    "Attendez un jour avant d’acheter un article non essentiel.",
    "Utilisez une liste de courses pour éviter les achats imprévus.",
    "Éteignez les lumières et les appareils en quittant une pièce.",
    "Apportez une bouteille d’eau au lieu d’acheter des boissons.",
    "Mettez un peu d’argent de côté dès que vous êtes payé.",
    "Annulez les abonnements que vous utilisez rarement.",
    "Préparez un repas de plus à la maison plutôt que de commander."
  ],
  hi: [
    "किराने की खरीदारी से पहले खाने की योजना बनाएँ और घर में मौजूद सामान जाँचें।",
    "बेहतर कीमत जानने के लिए प्रति इकाई दाम की तुलना करें।",
    "बचत का एक छोटा लक्ष्य बनाएँ और नियमित रूप से उसमें पैसे जोड़ें।",
    "गैर-ज़रूरी चीज़ खरीदने से पहले एक दिन रुकें।",
    "बिना योजना की खरीदारी से बचने के लिए सूची बनाएँ।",
    "कमरा छोड़ते समय लाइट और इलेक्ट्रॉनिक उपकरण बंद करें।",
    "पेय पदार्थ खरीदने के बजाय अपना पानी साथ रखें।",
    "वेतन मिलने के बाद तुरंत थोड़ा पैसा बचत में रखें।",
    "जो सदस्यता आप बहुत कम इस्तेमाल करते हैं, उसे रद्द करें।",
    "घर पर बाहर का खाना खरीदने के बजाय एक अतिरिक्त खाना बनाएँ।"
  ]
};

const themeOptions = document.querySelectorAll('input[name="color-theme"]');
const themeStatus = document.querySelector("#theme-status");
const budgetForm = document.querySelector("#budget-form");
const incomeInput = document.querySelector("#monthly-income");
const suggestionText = document.querySelector("#suggestion-text");
const acceptButton = document.querySelector("#accept-suggestion");
const defaultSection = document.querySelector("#default-budget-section");
const defaultBudgetDetails = document.querySelector("#default-budget-details");
const defaultBudgetText = document.querySelector("#default-budget-text");
const defaultBudgetForm = document.querySelector("#default-budget-form");
const defaultPercentInput = document.querySelector("#default-budget-percent");
const statusMessage = document.querySelector("#status-message");
const expenseForm = document.querySelector("#expense-form");
const expenseNameInput = document.querySelector("#expense-name");
const expenseCategorySelect = document.querySelector("#expense-category");
const expenseAmountInput = document.querySelector("#expense-amount");
const pendingExpensesList = document.querySelector("#pending-expenses");
const monthlyExpensesList = document.querySelector("#monthly-expenses");
const pendingExpensesEmpty = document.querySelector("#pending-expenses-empty");
const monthlyExpensesEmpty = document.querySelector("#monthly-expenses-empty");
const undoDeleteButton = document.querySelector("#undo-delete-button");
const expenseActionStatus = document.querySelector("#expense-action-status");
const budgetWarning = document.querySelector("#budget-warning");
const dismissBudgetWarning = document.querySelector("#dismiss-budget-warning");
const repeatBudgetWarningToggle = document.querySelector("#repeat-budget-warning-toggle");
const easyReadingToggle = document.querySelector("#easy-reading-toggle");
const pauseAnimationsToggle = document.querySelector("#pause-animations-toggle");
const textSizeSelect = document.querySelector("#text-size-select");
const budgetPieChart = document.querySelector("#budget-pie-chart");
const budgetChartPercent = document.querySelector("#budget-chart-percent");
const budgetChartSummary = document.querySelector("#budget-chart-summary");
const weeklySpendingText = document.querySelector("#weekly-spending-text");
const savingsGoalForm = document.querySelector("#savings-goal-form");
const savingsGoalNameInput = document.querySelector("#savings-goal-name");
const savingsGoalTargetInput = document.querySelector("#savings-goal-target");
const savingsGoalSavedInput = document.querySelector("#savings-goal-saved");
const savingsGoalProgress = document.querySelector("#savings-goal-progress");
const savingsGoalSummary = document.querySelector("#savings-goal-summary");
const savingsGoalStatus = document.querySelector("#savings-goal-status");
const monthlyTotalText = document.querySelector("#monthly-total-text");
const largestExpenseText = document.querySelector("#largest-expense-text");
const readSummaryButton = document.querySelector("#read-summary-button");
const printSummaryButton = document.querySelector("#print-summary-button");
const summaryReadStatus = document.querySelector("#summary-read-status");
const languageSelect = document.querySelector("#language-select");
const savingTip = document.querySelector("#saving-tip");
const savingTipText = document.querySelector("#saving-tip-text");
const savingTipNextButton = document.querySelector("#saving-tip-next");

function getTranslation(language, key) {
  return translations[language]?.[key] || null;
}

function formatTranslation(key, values = {}) {
  const translation = getTranslation(document.documentElement.lang, key);
  if (!translation) {
    return null;
  }
  return translation.replace(/\{(\w+)\}/g, (match, name) =>
    Object.hasOwn(values, name) ? String(values[name]) : match
  );
}

let savingTipIndex = -1;

function renderSavingTip(advance = false) {
  const tips = savingTips[document.documentElement.lang] || savingTips.en;
  savingTipIndex = advance
    ? (savingTipIndex + 1) % tips.length
    : Math.floor(Math.random() * tips.length);
  savingTipText.textContent = tips[savingTipIndex];
}

savingTipNextButton.addEventListener("click", () => renderSavingTip(true));

function applyLanguage(language) {
  const selectedLanguage = translations[language] ? language : "en";
  document.documentElement.lang = selectedLanguage;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    if (!element.dataset.originalText) {
      element.dataset.originalText = element.textContent;
    }
    const key = element.dataset.i18n;
    element.textContent = getTranslation(selectedLanguage, key) || element.dataset.originalText;
  });

  languageSelect.setAttribute(
    "aria-label",
    selectedLanguage === "zh" ? "语言" : "Language"
  );

  for (const option of languageSelect.options) {
    const languageName = languages.find(([code]) => code === option.value)?.[1];
    if (!languageName) {
      continue;
    }

    const available = Boolean(translations[option.value]);
    option.disabled = !available;
    option.textContent = available
      ? languageName
      : `${languageName} ${getTranslation(selectedLanguage, "notTranslatedYet") || "(translation not available yet)"}`;
    option.title = available
      ? languageName
      : "This language does not have an offline translation yet.";
  }
}

languages.forEach(([code, name]) => {
  const option = document.createElement("option");
  option.value = code;
  option.textContent = name;
  languageSelect.append(option);
});

languageSelect.addEventListener("change", () => {
  const language = languageSelect.value;
  try {
    localStorage.setItem(languageKey, language);
  } catch {
    // The language can still change for this visit if storage is unavailable.
  }
  applyLanguage(language);
  updateSuggestion();
  renderExpenses();
  renderSavingsGoal();
  renderSavingTip();
  if (lastStatusMessage) {
    showStatus(lastStatusMessage.message, lastStatusMessage.key, lastStatusMessage.values);
  }
});

let suggestedPercent = null;
let defaultPercent = null;
let expenses = [];
let expenseToUndo = null;
let savingsGoal = null;
let budgetWarningShown = false;
let lastStatusMessage = null;

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

function showStatus(message, key, values) {
  lastStatusMessage = { message, key, values };
  statusMessage.textContent = (key && formatTranslation(key, values)) || message;
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
  return amount.toLocaleString(document.documentElement.lang, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

function getExpenseCategoryLabel(category) {
  const translationKey = expenseCategoryTranslationKeys[category] ||
    expenseCategoryTranslationKeys.other;
  return getTranslation(document.documentElement.lang, translationKey) || "Other";
}

function createExpenseRow(expense) {
  const row = document.createElement("li");
  const details = document.createElement("label");
  const checkbox = document.createElement("input");
  const name = document.createElement("span");
  const category = document.createElement("span");
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
  category.className = "expense-category";
  category.textContent = getExpenseCategoryLabel(expense.category);
  amount.className = "expense-amount";
  amount.textContent = formatAmount(expense.amount);
  deleteButton.type = "button";
  deleteButton.className = "delete-button";
  deleteButton.textContent = getTranslation(document.documentElement.lang, "delete") || "Delete";
  deleteButton.setAttribute("aria-label", `Delete ${expense.name}`);

  checkbox.addEventListener("change", () => {
    expense.completed = checkbox.checked;
    saveExpenses();
    renderExpenses();
  });

  deleteButton.addEventListener("click", () => {
    const confirmation = formatTranslation("confirmDeleteExpense", {
      name: expense.name
    }) || `Delete ${expense.name}?`;
    if (!window.confirm(confirmation)) {
      return;
    }

    const expenseIndex = expenses.findIndex((item) => item.id === expense.id);
    if (expenseIndex === -1) {
      return;
    }

    expenseToUndo = { expense, index: expenseIndex };
    expenses.splice(expenseIndex, 1);
    undoDeleteButton.hidden = false;
    expenseActionStatus.textContent = "";
    const saved = saveExpenses();
    renderExpenses();
    if (saved) {
      const values = { name: expense.name };
      expenseActionStatus.textContent =
        formatTranslation("expenseDeleted", values) || `${expense.name} was deleted.`;
    }
  });

  details.append(checkbox, name, category, amount);
  row.append(details, deleteButton);
  return row;
}

undoDeleteButton.addEventListener("click", () => {
  if (!expenseToUndo) {
    return;
  }

  const { expense, index } = expenseToUndo;
  expenses.splice(Math.min(index, expenses.length), 0, expense);
  expenseToUndo = null;
  undoDeleteButton.hidden = true;
  expenseActionStatus.textContent = "";
  const saved = saveExpenses();
  renderExpenses();
  if (saved) {
    const values = { name: expense.name };
    expenseActionStatus.textContent =
      formatTranslation("expenseRestored", values) || `${expense.name} was restored.`;
  }
});

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

function getMonthlyExpenses() {
  return expenses.filter((expense) => expense.completed);
}

function updateBudgetInsights(monthlyExpenses, totalExpenses) {
  monthlyTotalText.textContent = formatTranslation("monthlyTotal", {
    amount: formatAmount(totalExpenses)
  }) || `Spent this month: ${formatAmount(totalExpenses)}.`;

  const largestExpense = monthlyExpenses.reduce(
    (largest, expense) => !largest || expense.amount > largest.amount ? expense : largest,
    null
  );
  largestExpenseText.textContent = largestExpense
    ? formatTranslation("biggestExpense", {
      name: largestExpense.name,
      amount: formatAmount(largestExpense.amount)
    }) || `Largest expense: ${largestExpense.name} (${formatAmount(largestExpense.amount)}).`
    : formatTranslation("noBiggestExpense") || "No tracked expenses this month yet.";

  const income = Number(incomeInput.value);
  if (
    incomeInput.value.trim() === "" ||
    !Number.isFinite(income) ||
    income < 0 ||
    defaultPercent === null
  ) {
    weeklySpendingText.textContent =
      formatTranslation("weeklyPrompt") || "Enter income and save a budget to see your weekly guide.";
    return;
  }

  const remainingBudget = income * defaultPercent / 100 - totalExpenses;
  if (remainingBudget <= 0) {
    weeklySpendingText.textContent =
      formatTranslation("weeklyOverBudget") || "Your budget is used up, so there is no weekly spending amount left.";
    return;
  }

  const today = new Date();
  const daysLeftInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate() - today.getDate() + 1;
  const weeksLeftInMonth = Math.ceil(daysLeftInMonth / 7);
  weeklySpendingText.textContent = formatTranslation("weeklyAvailable", {
    amount: formatAmount(remainingBudget / weeksLeftInMonth),
    weeks: weeksLeftInMonth
  }) || `${formatAmount(remainingBudget / weeksLeftInMonth)} available per week for the ${weeksLeftInMonth} weeks left this month.`;
}

function renderSavingsGoal() {
  const prompt = formatTranslation("goalPrompt") || "Set a savings goal to see your progress.";
  if (!savingsGoal) {
    savingsGoalProgress.value = 0;
    savingsGoalProgress.setAttribute("aria-valuetext", prompt);
    savingsGoalSummary.textContent = prompt;
    return;
  }

  const percent = Math.min(100, Math.round(savingsGoal.saved / savingsGoal.target * 100));
  const remaining = Math.max(0, savingsGoal.target - savingsGoal.saved);
  const values = {
    name: savingsGoal.name,
    saved: formatAmount(savingsGoal.saved),
    target: formatAmount(savingsGoal.target),
    percent,
    remaining: formatAmount(remaining)
  };
  const summary = formatTranslation("goalProgressText", values) ||
    `${savingsGoal.name}: ${values.saved} saved of ${values.target} (${percent}% complete). ${values.remaining} to go.`;
  savingsGoalProgress.value = percent;
  savingsGoalProgress.setAttribute("aria-valuetext", summary);
  savingsGoalSummary.textContent = summary;
}

function readSavingsGoal() {
  let storedGoal;
  try {
    storedGoal = localStorage.getItem(savingsGoalKey);
  } catch {
    savingsGoalStatus.textContent = formatTranslation("goalLoadFailed") ||
      "Your saved savings goal could not be read.";
    return null;
  }

  if (storedGoal === null) {
    return null;
  }

  try {
    const goal = JSON.parse(storedGoal);
    if (
      !goal ||
      typeof goal.name !== "string" ||
      goal.name.trim() === "" ||
      !Number.isFinite(goal.target) ||
      goal.target <= 0 ||
      !Number.isFinite(goal.saved) ||
      goal.saved < 0
    ) {
      throw new Error("Saved savings goal has an invalid shape.");
    }
    return { name: goal.name.trim(), target: goal.target, saved: goal.saved };
  } catch {
    savingsGoalStatus.textContent = formatTranslation("goalLoadFailed") ||
      "Your saved savings goal could not be read.";
    return null;
  }
}

savingsGoalForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = savingsGoalNameInput.value.trim();
  const target = Number(savingsGoalTargetInput.value);
  const saved = Number(savingsGoalSavedInput.value);
  if (
    name === "" ||
    savingsGoalTargetInput.value.trim() === "" ||
    !Number.isFinite(target) ||
    target <= 0 ||
    savingsGoalSavedInput.value.trim() === "" ||
    !Number.isFinite(saved) ||
    saved < 0
  ) {
    savingsGoalStatus.textContent = formatTranslation("goalInvalid") ||
      "Enter a goal name, a target above 0, and an amount saved of 0 or more.";
    return;
  }

  const nextGoal = { name, target, saved };
  try {
    localStorage.setItem(savingsGoalKey, JSON.stringify(nextGoal));
    savingsGoal = nextGoal;
    renderSavingsGoal();
    savingsGoalStatus.textContent = formatTranslation("goalSavedStatus") ||
      "Savings goal saved on this device.";
  } catch {
    savingsGoalStatus.textContent = formatTranslation("goalSaveFailed") ||
      "Your savings goal could not be saved. Check your browser storage and try again.";
  }
});

function updateBudgetChart() {
  const income = Number(incomeInput.value);
  const expensesThisMonth = getMonthlyExpenses();
  const monthlyExpenses = expensesThisMonth
    .reduce((total, expense) => total + expense.amount, 0);
  updateBudgetInsights(expensesThisMonth, monthlyExpenses);

  if (
    incomeInput.value.trim() === "" ||
    !Number.isFinite(income) ||
    income < 0 ||
    defaultPercent === null
  ) {
    budgetPieChart.style.setProperty("--budget-used-angle", "0deg");
    budgetPieChart.style.setProperty("--budget-used-color", "var(--accent)");
    budgetChartPercent.textContent = "0%";
    budgetChartSummary.textContent = incomeInput.value.trim() === ""
      ? formatTranslation("chartNeedIncome") || "Enter monthly income and accept a budget suggestion to see your chart."
      : formatTranslation("chartNeedBudget") || "Accept a budget suggestion to start tracking usage.";
    budgetPieChart.setAttribute("aria-label", "Budget usage chart is waiting for income and a saved budget.");
    return;
  }

  const budget = income * defaultPercent / 100;
  const usedPercent = budget > 0
    ? monthlyExpenses / budget * 100
    : monthlyExpenses > 0
      ? Infinity
      : 0;
  const chartPercent = Math.min(usedPercent, 100);
  const angle = chartPercent * 3.6;
  const isOverBudget = monthlyExpenses > budget;

  budgetPieChart.style.setProperty("--budget-used-angle", `${angle}deg`);
  budgetPieChart.style.setProperty(
    "--budget-used-color",
    isOverBudget ? "var(--danger)" : "var(--accent)"
  );
  budgetChartPercent.textContent = Number.isFinite(usedPercent)
    ? `${Math.round(usedPercent)}%`
    : "Over";
  budgetChartSummary.textContent = isOverBudget
    ? formatTranslation("spentOver", {
      spent: formatAmount(monthlyExpenses),
      over: formatAmount(monthlyExpenses - budget)
    }) || `Spent ${formatAmount(monthlyExpenses)}; over budget by ${formatAmount(monthlyExpenses - budget)}.`
    : formatTranslation("spentWithin", {
      spent: formatAmount(monthlyExpenses),
      budget: formatAmount(budget),
      left: formatAmount(budget - monthlyExpenses)
    }) || `Spent ${formatAmount(monthlyExpenses)} of ${formatAmount(budget)}; ${formatAmount(budget - monthlyExpenses)} left.`;
  budgetPieChart.setAttribute(
    "aria-label",
    `Monthly budget used: ${Number.isFinite(usedPercent) ? `${Math.round(usedPercent)} percent` : "over 100 percent"}.`
  );
}

function checkBudgetWarning() {
  updateBudgetChart();
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

  const monthlyExpenses = getMonthlyExpenses()
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
    ).map((expense) => ({
      ...expense,
      category: expenseCategories.includes(expense.category) ? expense.category : "other"
    }));
  } catch {
    showStatus("Saved expenses could not be read. Add them again to save a new list.");
    return [];
  }
}

function updateDefaultDisplay() {
  if (defaultPercent === null) {
    defaultSection.hidden = false;
    defaultBudgetDetails.hidden = true;
    return;
  }

  defaultSection.hidden = false;
  defaultBudgetDetails.hidden = false;
  defaultPercentInput.value = String(defaultPercent);

  const income = Number(incomeInput.value);
  if (incomeInput.value !== "" && Number.isFinite(income) && income >= 0) {
    const amount = income * defaultPercent / 100;
    defaultBudgetText.textContent = formatTranslation("defaultWithAmount", {
      percent: defaultPercent,
      amount: formatAmount(amount)
    }) || `${defaultPercent}% of your income (${formatAmount(amount)}).`;
  } else {
    defaultBudgetText.textContent = formatTranslation("defaultPercent", {
      percent: defaultPercent
    }) || `${defaultPercent}% of your monthly income.`;
  }
}

function updateSuggestion() {
  const rawIncome = incomeInput.value.trim();
  const income = Number(rawIncome);

  if (rawIncome === "" || !Number.isFinite(income) || income < 0) {
    suggestedPercent = null;
    acceptButton.disabled = true;
    suggestionText.textContent =
      formatTranslation("incomeInvalid") || "Enter an income of 0 or more to see a suggestion.";
    updateDefaultDisplay();
    return;
  }

  suggestedPercent = income <= 5000 ? 20 : 30;
  const amount = income * suggestedPercent / 100;
  suggestionText.textContent = formatTranslation("incomeSuggestion", {
    percent: suggestedPercent,
    amount: formatAmount(amount)
  }) || `${suggestedPercent}% of your income is ${formatAmount(amount)}.`;
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
    showStatus(
      "Suggestion saved as your default budget.",
      "suggestionSaved"
    );
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
    showStatus("Enter a percentage from 0 to 100.", "invalidPercent");
    return;
  }

  if (saveNumber(budgetPercentKey, value)) {
    defaultPercent = value;
    updateDefaultDisplay();
    checkBudgetWarning();
    showStatus("Your default budget was updated.", "defaultUpdated");
  }
});

expenseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = expenseNameInput.value.trim();
  const category = expenseCategorySelect.value;
  const amount = Number(expenseAmountInput.value);

  if (
    name === "" ||
    expenseAmountInput.value.trim() === "" ||
    !Number.isFinite(amount) ||
    amount < 0
  ) {
    showStatus("Enter an expense name and a price of 0 or more.", "expenseInvalid");
    return;
  }

  if (!expenseCategories.includes(category)) {
    showStatus("Choose an expense category.", "expenseCategoryInvalid");
    return;
  }

  expenses.push({
    id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    name,
    category,
    amount,
    completed: false
  });
  const saved = saveExpenses();
  renderExpenses();
  expenseForm.reset();
  if (saved) {
    showStatus(`${name} was added to expenses to track.`, "expenseAdded", { name });
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
  shooter: document.querySelector("#shooter-game"),
  prism: document.querySelector("#prism-game")
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
  document.body.classList.toggle("game-mode-active", enabled);

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

function setEasyReading(enabled, saveChoice = true) {
  easyReadingToggle.checked = enabled;
  document.body.classList.toggle("easy-reading", enabled);

  if (saveChoice) {
    try {
      localStorage.setItem(easyReadingKey, String(enabled));
      settingsStatus.textContent = enabled
        ? "Easy Reading is on. Text and controls are larger."
        : "Easy Reading is off.";
    } catch {
      settingsStatus.textContent = "Your Easy Reading choice changed, but could not be saved.";
    }
  }
}

easyReadingToggle.addEventListener("change", () => {
  setEasyReading(easyReadingToggle.checked);
});

const textSizeChoices = ["normal", "large", "extra-large"];

function setTextSize(size, saveChoice = true) {
  if (!textSizeChoices.includes(size)) {
    size = "normal";
  }

  document.documentElement.dataset.textSize = size;
  textSizeSelect.value = size;
  if (saveChoice) {
    try {
      localStorage.setItem(textSizeKey, size);
      settingsStatus.textContent = formatTranslation("textSizeSaved") || "Text size updated.";
    } catch {
      settingsStatus.textContent = "Your text size changed, but could not be saved.";
    }
  }
}

textSizeSelect.addEventListener("change", () => {
  setTextSize(textSizeSelect.value);
});

function setPauseAnimations(enabled, saveChoice = true) {
  pauseAnimationsToggle.checked = enabled;
  document.body.classList.toggle("pause-animations", enabled);

  if (saveChoice) {
    try {
      localStorage.setItem(pauseAnimationsKey, String(enabled));
      settingsStatus.textContent = enabled
        ? "Interface animations are paused."
        : "Interface animations are on.";
    } catch {
      settingsStatus.textContent = "Your animation choice changed, but could not be saved.";
    }
  }
}

pauseAnimationsToggle.addEventListener("change", () => {
  setPauseAnimations(pauseAnimationsToggle.checked);
});

let activeSummaryUtterance = null;
readSummaryButton.addEventListener("click", () => {
  if (
    typeof window.speechSynthesis?.speak !== "function" ||
    typeof window.SpeechSynthesisUtterance !== "function"
  ) {
    summaryReadStatus.textContent = formatTranslation("summaryReadUnavailable") ||
      "This browser cannot read the summary aloud.";
    return;
  }

  if (activeSummaryUtterance) {
    window.speechSynthesis.cancel();
    activeSummaryUtterance = null;
    summaryReadStatus.textContent = formatTranslation("summaryReadStopped") ||
      "Reading stopped.";
    return;
  }

  const summary = [
    budgetChartSummary.textContent,
    monthlyTotalText.textContent,
    largestExpenseText.textContent
  ].filter(Boolean).join(" ");
  const utterance = new window.SpeechSynthesisUtterance(summary);
  utterance.lang = document.documentElement.lang;
  utterance.rate = 0.9;
  utterance.onstart = () => {
    if (activeSummaryUtterance === utterance) {
      summaryReadStatus.textContent = formatTranslation("summaryReadStarted") ||
        "Reading the summary aloud.";
    }
  };
  utterance.onend = () => {
    if (activeSummaryUtterance === utterance) {
      activeSummaryUtterance = null;
      summaryReadStatus.textContent = formatTranslation("summaryReadFinished") ||
        "Finished reading the summary.";
    }
  };
  utterance.onerror = () => {
    if (activeSummaryUtterance === utterance) {
      activeSummaryUtterance = null;
      summaryReadStatus.textContent = formatTranslation("summaryReadFailed") ||
        "The summary could not be read aloud. Try again.";
    }
  };
  activeSummaryUtterance = utterance;
  try {
    window.speechSynthesis.speak(utterance);
  } catch {
    activeSummaryUtterance = null;
    summaryReadStatus.textContent = formatTranslation("summaryReadFailed") ||
      "The summary could not be read aloud. Try again.";
  }
});

printSummaryButton.addEventListener("click", () => {
  window.print();
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
  const scoreLabel = document.querySelector("#shooter-score");
  const healthLabel = document.querySelector("#shooter-health-label");
  const healthTrack = document.querySelector(".shooter-health-track");
  const healthFill = document.querySelector("#shooter-health-fill");
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
  let enemyBullets;
  let hits;
  let health;
  let gameOver;
  let lastFrame;
  let animationId;
  let nextSpawnAt;
  let bulletShotAt = 0;
  let renderDepth = [];

  function reset() {
    player = { x: 1.5, y: 1.5, angle: 0 };
    targets = [];
    enemyBullets = [];
    hits = 0;
    health = 100;
    gameOver = false;
    lastFrame = 0;
    bulletShotAt = 0;
    nextSpawnAt = performance.now() + 700;
    keys.clear();
    scoreLabel.textContent = "Robots defeated: 0";
    status.textContent = "Robots are coming! Move, turn, and shoot to survive.";
    updateHealthDisplay();
    for (let count = 0; count < 3; count += 1) {
      spawnTarget(performance.now());
    }
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

  function updateHealthDisplay() {
    healthLabel.textContent = `Health: ${health}%`;
    healthTrack.setAttribute("aria-valuenow", String(health));
    healthFill.style.width = `${health}%`;
    healthFill.classList.toggle("low", health <= 35);
  }

  function hasLineOfSight(fromX, fromY, toX, toY) {
    const distance = Math.hypot(toX - fromX, toY - fromY);
    const steps = Math.ceil(distance / 0.08);
    for (let step = 1; step < steps; step += 1) {
      const progress = step / steps;
      if (isWall(
        fromX + (toX - fromX) * progress,
        fromY + (toY - fromY) * progress
      )) {
        return false;
      }
    }
    return true;
  }

  function spawnTarget(now) {
    const candidates = [];
    for (let y = 1; y <= 10; y += 1) {
      for (let x = 1; x <= 10; x += 1) {
        const targetX = x + 0.5;
        const targetY = y + 0.5;
        const distance = Math.hypot(targetX - player.x, targetY - player.y);
        if (
          isWall(targetX, targetY) ||
          distance < 3 ||
          distance > 8 ||
          targets.some((target) =>
            Math.hypot(targetX - target.x, targetY - target.y) < 1.2
          )
        ) {
          continue;
        }
        candidates.push({
          x: targetX,
          y: targetY,
          visible: hasLineOfSight(targetX, targetY, player.x, player.y)
        });
      }
    }

    const visibleCandidates = candidates.filter((candidate) => candidate.visible);
    const spawnOptions = visibleCandidates.length > 0 ? visibleCandidates : candidates;
    if (spawnOptions.length === 0) {
      return false;
    }

    const spawn = spawnOptions[Math.floor(Math.random() * spawnOptions.length)];
    targets.push({
      x: spawn.x,
      y: spawn.y,
      strafeDirection: Math.random() < 0.5 ? -1 : 1,
      changeStrafeAt: now + 350 + Math.random() * 450,
      shootAt: now + 500 + Math.random() * 800,
      muzzleFlashUntil: 0
    });
    return true;
  }

  function shoot() {
    if (gameOver) {
      return;
    }
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
      scoreLabel.textContent = `Robots defeated: ${hits}`;
      status.textContent = "Hit! More robots will arrive.";
      nextSpawnAt = Math.min(nextSpawnAt, performance.now() + 700);
    } else {
      status.textContent = "Missed. Keep moving and aim for a robot.";
    }
  }

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
      const stride = Math.sin(performance.now() / 90 + target.x + target.y) * size * 0.08;
      context.fillStyle = "#e85d75";
      context.fillRect(screenX - bodyWidth / 2, bodyTop, bodyWidth, size * 0.62);
      context.strokeStyle = "#263238";
      context.lineWidth = Math.max(2, size * 0.045);
      context.beginPath();
      context.moveTo(screenX - bodyWidth / 2, bodyTop + size * 0.18);
      context.lineTo(screenX - bodyWidth * 0.85, bodyTop + size * 0.34 + stride);
      context.moveTo(screenX + bodyWidth / 2, bodyTop + size * 0.18);
      context.lineTo(screenX + bodyWidth * 0.85, bodyTop + size * 0.34 - stride);
      context.moveTo(screenX - bodyWidth * 0.25, bodyTop + size * 0.62);
      context.lineTo(screenX - bodyWidth * 0.32 - stride, bodyTop + size * 0.82);
      context.moveTo(screenX + bodyWidth * 0.25, bodyTop + size * 0.62);
      context.lineTo(screenX + bodyWidth * 0.32 + stride, bodyTop + size * 0.82);
      context.stroke();
      context.fillStyle = "#ffd166";
      context.beginPath();
      context.arc(screenX, bodyTop - size * 0.12, size * 0.22, 0, Math.PI * 2);
      context.fill();
      context.fillStyle = "#263238";
      context.fillRect(screenX - size * 0.12, bodyTop - size * 0.16, size * 0.05, size * 0.05);
      context.fillRect(screenX + size * 0.06, bodyTop - size * 0.16, size * 0.05, size * 0.05);
      if (target.muzzleFlashUntil > performance.now()) {
        context.beginPath();
        context.arc(screenX + bodyWidth, bodyTop + size * 0.36, Math.max(3, size * 0.08), 0, Math.PI * 2);
        context.fillStyle = "#ffb703";
        context.fill();
      }
    });

    const focalLength = canvas.width / (2 * Math.tan(fov / 2));
    enemyBullets
      .map((bullet) => {
        const dx = bullet.x - player.x;
        const dy = bullet.y - player.y;
        return {
          distance: Math.hypot(dx, dy),
          forward: dx * Math.cos(player.angle) + dy * Math.sin(player.angle),
          sideways: -dx * Math.sin(player.angle) + dy * Math.cos(player.angle)
        };
      })
      .filter((bullet) => bullet.forward > 0.1 && bullet.distance < 12)
      .sort((first, second) => second.forward - first.forward)
      .forEach((bullet) => {
        const screenX = canvas.width / 2 + bullet.sideways / bullet.forward * focalLength;
        const column = Math.max(0, Math.min(
          rayCount - 1,
          Math.floor(screenX / stripWidth)
        ));
        if (
          screenX < 0 ||
          screenX > canvas.width ||
          renderDepth[column] < bullet.forward
        ) {
          return;
        }
        const radius = Math.max(3, focalLength * 0.08 / bullet.forward);
        const screenY = horizon + Math.min(canvas.height * 0.32, radius * 2.5);
        context.beginPath();
        context.arc(screenX, screenY, radius, 0, Math.PI * 2);
        context.fillStyle = "#ffb703";
        context.fill();
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

    if (gameOver) {
      context.fillStyle = "rgb(20 30 35 / 75%)";
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = "#fff";
      context.textAlign = "center";
      context.font = "bold 32px system-ui, sans-serif";
      context.fillText("You were tagged!", canvas.width / 2, horizon - 8);
      context.font = "18px system-ui, sans-serif";
      context.fillText("Press Restart game to try again.", canvas.width / 2, horizon + 26);
    }
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

  function moveTargets(delta, now) {
    for (const target of targets) {
      const dx = player.x - target.x;
      const dy = player.y - target.y;
      const distance = Math.hypot(dx, dy);
      if (now >= target.changeStrafeAt) {
        target.strafeDirection = Math.random() < 0.5 ? -1 : 1;
        target.changeStrafeAt = now + 450 + Math.random() * 650;
      }

      const towardX = dx / Math.max(distance, 0.001);
      const towardY = dy / Math.max(distance, 0.001);
      const moveToward = distance > 1.4 ? 0.45 : 0;
      const moveX = towardX * moveToward - towardY * target.strafeDirection;
      const moveY = towardY * moveToward + towardX * target.strafeDirection;
      const moveLength = Math.hypot(moveX, moveY);
      const step = 1.8 * delta / Math.max(1, moveLength);
      const nextX = target.x + moveX * step;
      const nextY = target.y + moveY * step;
      const radius = 0.22;

      if (
        !isWall(nextX - radius, target.y - radius) &&
        !isWall(nextX + radius, target.y - radius) &&
        !isWall(nextX - radius, target.y + radius) &&
        !isWall(nextX + radius, target.y + radius) &&
        Math.hypot(nextX - player.x, target.y - player.y) > 0.55 &&
        !targets.some((other) =>
          other !== target && Math.hypot(nextX - other.x, target.y - other.y) < 0.48
        )
      ) {
        target.x = nextX;
      }
      if (
        !isWall(target.x - radius, nextY - radius) &&
        !isWall(target.x + radius, nextY - radius) &&
        !isWall(target.x - radius, nextY + radius) &&
        !isWall(target.x + radius, nextY + radius) &&
        Math.hypot(target.x - player.x, nextY - player.y) > 0.55 &&
        !targets.some((other) =>
          other !== target && Math.hypot(target.x - other.x, nextY - other.y) < 0.48
        )
      ) {
        target.y = nextY;
      }

      if (now >= target.shootAt) {
        if (distance < 10 && hasLineOfSight(target.x, target.y, player.x, player.y)) {
          const angle = Math.atan2(player.y - target.y, player.x - target.x);
          enemyBullets.push({
            x: target.x,
            y: target.y,
            vx: Math.cos(angle) * 4,
            vy: Math.sin(angle) * 4
          });
          target.muzzleFlashUntil = now + 180;
        }
        target.shootAt = now + 1300 + Math.random() * 700;
      }
    }
  }

  function moveEnemyBullets(delta) {
    const remaining = [];
    for (const bullet of enemyBullets) {
      bullet.x += bullet.vx * delta;
      bullet.y += bullet.vy * delta;
      if (isWall(bullet.x, bullet.y)) {
        continue;
      }
      if (Math.hypot(bullet.x - player.x, bullet.y - player.y) < 0.28) {
        health = Math.max(0, health - 10);
        updateHealthDisplay();
        if (health === 0) {
          gameOver = true;
          status.textContent = `Game over. You defeated ${hits} robots. Restart to play again.`;
        } else {
          status.textContent = "You were hit! Keep moving to dodge their shots.";
        }
        continue;
      }
      remaining.push(bullet);
    }
    enemyBullets = remaining;
  }

  function loop(timestamp) {
    const delta = lastFrame === 0 ? 0 : Math.min((timestamp - lastFrame) / 1000, 0.05);
    lastFrame = timestamp;
    if (!gameOver) {
      movePlayer(delta);
      moveTargets(delta, timestamp);
      moveEnemyBullets(delta);
      if (targets.length < 5 && timestamp >= nextSpawnAt) {
        nextSpawnAt = spawnTarget(timestamp)
          ? timestamp + 1400
          : timestamp + 500;
      }
    }
    draw();
    animationId = requestAnimationFrame(loop);
  }

  function handleKeyDown(event) {
    const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
    if (["w", "a", "s", "d", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(key)) {
      event.preventDefault();
    }
    keys.add(key);
    if (event.code === "Space" && !event.repeat && !gameOver) {
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

function startPrismSprint() {
  const canvas = document.querySelector("#prism-canvas");
  const context = canvas.getContext("2d");
  const status = document.querySelector("#prism-status");
  const progressBar = document.querySelector("#prism-progress");
  const progressFill = document.querySelector("#prism-progress-fill");
  const progressText = document.querySelector("#prism-progress-text");
  const levelSelect = document.querySelector("#prism-level-select");
  const playArea = document.querySelector("#prism-play-area");
  const chooseLevelButton = document.querySelector("#prism-choose-level");
  const controller = new AbortController();
  const groundY = canvas.height - 72;
  const ceilingY = 24;
  const playerX = 136;
  const playerSize = 34;
  const gravityButton = document.querySelector("#prism-flip");
  const levels = {
    sunrise: {
      name: "Sunrise Steps",
      speed: 240,
      length: 3100,
      colors: {
        sky: "#bde0fe",
        sun: "#ffd166",
        hills: "#9ad1a5",
        ground: "#344e41",
        groundLine: "#f4a261",
        stripes: "#5c8068",
        spike: "#e76f51",
        block: "#7b61a8"
      },
      obstacles: [
        { x: 430, width: 40, height: 38, shape: "spike" },
        { x: 760, width: 58, height: 44, baseElevation: 0, shape: "block" },
        { x: 1110, width: 40, height: 42, shape: "spike" },
        { x: 1450, width: 58, height: 40, baseElevation: 0, shape: "block" },
        { x: 1515, width: 58, height: 40, baseElevation: 40, shape: "block" },
        { x: 1930, width: 40, height: 38, shape: "spike" },
        { x: 2280, width: 60, height: 48, baseElevation: 0, shape: "block" },
        { x: 2670, width: 40, height: 42, shape: "spike" }
      ]
    },
    canopy: {
      name: "Canopy Run",
      speed: 250,
      length: 3600,
      colors: {
        sky: "#b8e0d2",
        sun: "#f6bd60",
        hills: "#6b9b78",
        ground: "#315c4b",
        groundLine: "#f28482",
        stripes: "#477b62",
        spike: "#e07a5f",
        block: "#3d7ea6"
      },
      obstacles: [
        { x: 450, width: 60, height: 42, baseElevation: 0, shape: "block" },
        { x: 515, width: 60, height: 42, baseElevation: 42, shape: "block" },
        { x: 890, width: 42, height: 46, shape: "spike" },
        { x: 1190, width: 58, height: 52, baseElevation: 0, shape: "block" },
        { x: 1520, width: 42, height: 40, shape: "spike" },
        { x: 1820, width: 58, height: 38, baseElevation: 0, shape: "block" },
        { x: 1885, width: 58, height: 38, baseElevation: 38, shape: "block" },
        { x: 2170, width: 42, height: 44, shape: "spike" },
        { x: 2460, width: 58, height: 46, baseElevation: 0, shape: "block" },
        { x: 2525, width: 58, height: 46, baseElevation: 46, shape: "block" },
        { x: 2940, width: 42, height: 46, shape: "spike" },
        { x: 3260, width: 62, height: 44, baseElevation: 0, shape: "block" }
      ]
    },
    night: {
      name: "Neon Night",
      speed: 270,
      length: 3950,
      colors: {
        sky: "#172554",
        sun: "#f0abfc",
        hills: "#334e83",
        ground: "#111827",
        groundLine: "#22d3ee",
        stripes: "#334155",
        spike: "#fb7185",
        block: "#a78bfa"
      },
      obstacles: [
        { x: 430, width: 40, height: 44, shape: "spike" },
        { x: 730, width: 56, height: 50, baseElevation: 0, shape: "block" },
        { x: 1050, width: 40, height: 44, shape: "spike" },
        { x: 1320, width: 40, height: 44, shape: "spike" },
        { x: 1620, width: 58, height: 42, baseElevation: 0, shape: "block" },
        { x: 1685, width: 58, height: 42, baseElevation: 42, shape: "block" },
        { x: 2070, width: 40, height: 48, shape: "spike" },
        { x: 2360, width: 60, height: 52, baseElevation: 0, shape: "block" },
        { x: 2680, width: 40, height: 46, shape: "spike" },
        { x: 2950, width: 40, height: 46, shape: "spike" },
        { x: 3260, width: 60, height: 44, baseElevation: 0, shape: "block" },
        { x: 3325, width: 60, height: 44, baseElevation: 44, shape: "block" },
        { x: 3690, width: 40, height: 48, shape: "spike" }
      ]
    },
    gravity: {
      name: "Gravity Switch",
      speed: 250,
      length: 3820,
      gravityFlip: true,
      colors: {
        sky: "#211b45",
        sun: "#f7b267",
        hills: "#4b3f72",
        ground: "#26213f",
        groundLine: "#62d2a2",
        stripes: "#463d66",
        spike: "#ff7b89",
        block: "#73c0de"
      },
      obstacles: [
        { x: 470, width: 42, height: 46, shape: "spike", side: "floor" },
        { x: 870, width: 42, height: 46, shape: "spike", side: "ceiling" },
        { x: 1270, width: 42, height: 50, shape: "spike", side: "floor" },
        { x: 1670, width: 42, height: 50, shape: "spike", side: "ceiling" },
        { x: 2070, width: 44, height: 48, shape: "spike", side: "floor" },
        { x: 2470, width: 44, height: 48, shape: "spike", side: "ceiling" },
        { x: 2870, width: 44, height: 52, shape: "spike", side: "floor" },
        { x: 3270, width: 44, height: 52, shape: "spike", side: "ceiling" },
        { x: 3590, width: 44, height: 48, shape: "spike", side: "floor" }
      ]
    }
  };
  let activeLevel = null;
  let obstacles = [];
  let levelLength = 0;
  let distance = 0;
  let playerHeight = 0;
  let verticalVelocity = 0;
  let isGrounded = true;
  let gravitySide = "floor";
  let jumpBuffer = 0;
  let state = "running";
  let lastFrame = 0;
  let animationId = null;
  let lastProgress = -1;

  function drawObstacle(obstacle) {
    const x = playerX + obstacle.x - distance;
    if (x + obstacle.width < 0 || x > canvas.width) {
      return;
    }

    context.fillStyle = obstacle.shape === "spike"
      ? activeLevel.colors.spike
      : activeLevel.colors.block;
    context.strokeStyle = activeLevel.colors.sky === "#172554" ? "#e0f2fe" : "#263238";
    context.lineWidth = 3;
    context.beginPath();
    if (obstacle.shape === "spike") {
      if (obstacle.side === "ceiling") {
        context.moveTo(x, ceilingY);
        context.lineTo(x + obstacle.width / 2, ceilingY + obstacle.height);
        context.lineTo(x + obstacle.width, ceilingY);
      } else {
        context.moveTo(x, groundY);
        context.lineTo(x + obstacle.width / 2, groundY - obstacle.height);
        context.lineTo(x + obstacle.width, groundY);
      }
    } else {
      if (obstacle.side === "ceiling") {
        context.rect(
          x,
          ceilingY + obstacle.baseElevation,
          obstacle.width,
          obstacle.height
        );
      } else {
        const blockBottom = groundY - obstacle.baseElevation;
        context.rect(x, blockBottom - obstacle.height, obstacle.width, obstacle.height);
      }
    }
    context.closePath();
    context.fill();
    context.stroke();
  }

  function draw() {
    context.fillStyle = activeLevel.colors.sky;
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = activeLevel.colors.sun;
    context.beginPath();
    context.arc(canvas.width - 92, 72, 28, 0, Math.PI * 2);
    context.fill();

    context.fillStyle = activeLevel.colors.hills;
    context.beginPath();
    context.moveTo(0, groundY);
    context.lineTo(0, 222);
    context.lineTo(130, 176);
    context.lineTo(260, 222);
    context.lineTo(390, 184);
    context.lineTo(535, 224);
    context.lineTo(canvas.width, 178);
    context.lineTo(canvas.width, groundY);
    context.closePath();
    context.fill();

    if (activeLevel.gravityFlip) {
      context.fillStyle = activeLevel.colors.groundLine;
      context.fillRect(0, ceilingY, canvas.width, 5);
      context.fillStyle = activeLevel.colors.stripes;
      for (let x = 12; x < canvas.width; x += 56) {
        context.fillRect(x, ceilingY + 12, 30, 4);
      }
    }

    context.fillStyle = activeLevel.colors.ground;
    context.fillRect(0, groundY, canvas.width, canvas.height - groundY);
    context.fillStyle = activeLevel.colors.groundLine;
    context.fillRect(0, groundY, canvas.width, 5);
    const dashOffset = distance % 56;
    for (let x = -dashOffset; x < canvas.width; x += 56) {
      context.fillStyle = activeLevel.colors.stripes;
      context.fillRect(x, groundY + 22, 30, 5);
    }

    for (const obstacle of obstacles) {
      drawObstacle(obstacle);
    }

    const playerY = gravitySide === "floor"
      ? groundY - playerSize - playerHeight
      : ceilingY + playerHeight;
    context.save();
    context.translate(playerX + playerSize / 2, playerY + playerSize / 2);
    context.rotate(isGrounded ? 0 : -Math.max(-1, Math.min(1, verticalVelocity / 510)));
    context.fillStyle = activeLevel.colors.sky === "#172554" ? "#f4f1de" : "#264653";
    context.fillRect(-playerSize / 2, -playerSize / 2, playerSize, playerSize);
    context.fillStyle = activeLevel.colors.groundLine;
    context.fillRect(-playerSize / 2 + 7, -playerSize / 2 + 7, 9, 9);
    context.restore();

    if (state !== "running") {
      context.fillStyle = "rgb(11 19 34 / 78%)";
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = "#fff";
      context.textAlign = "center";
      context.font = "bold 30px system-ui, sans-serif";
      context.fillText(
        state === "won" ? "Course complete!" : "Try that jump again!",
        canvas.width / 2,
        canvas.height / 2 - 8
      );
      context.font = "17px system-ui, sans-serif";
      context.fillText(
        state === "won" ? "Choose another level or play again." : "Choose another level or restart.",
        canvas.width / 2,
        canvas.height / 2 + 24
      );
    }
  }

  function updateProgress() {
    const percent = levelLength === 0 ? 0 : Math.min(100, Math.floor(distance / levelLength * 100));
    progressBar.setAttribute("aria-valuenow", String(percent));
    progressFill.style.width = `${percent}%`;
    if (percent !== lastProgress) {
      progressText.textContent = `${percent}% complete`;
      lastProgress = percent;
    }
  }

  function jump() {
    if (state === "running") {
      jumpBuffer = 0.18;
      tryStartJump();
    }
  }

  function flipGravity() {
    if (!activeLevel.gravityFlip || state !== "running") {
      return;
    }
    gravitySide = gravitySide === "floor" ? "ceiling" : "floor";
    playerHeight = 0;
    verticalVelocity = 0;
    isGrounded = true;
    jumpBuffer = 0;
    status.textContent = `Gravity switched to the ${gravitySide}. Keep moving!`;
    draw();
  }

  function tryStartJump() {
    if (isGrounded && jumpBuffer > 0) {
      verticalVelocity = 510;
      isGrounded = false;
      jumpBuffer = 0;
    }
  }

  function hasPlatformSupport(playerLeft, playerRight) {
    if (playerHeight === 0) {
      return true;
    }
    return obstacles.some((obstacle) =>
      obstacle.shape === "block" &&
      Math.abs(obstacle.baseElevation + obstacle.height - playerHeight) < 0.01 &&
      playerLeft < obstacle.x + obstacle.width &&
      playerRight > obstacle.x
    );
  }

  function update(delta) {
    distance += activeLevel.speed * delta;
    jumpBuffer = Math.max(0, jumpBuffer - delta);

    const playerLeft = distance;
    const playerRight = playerLeft + playerSize;
    if (isGrounded && !hasPlatformSupport(playerLeft, playerRight)) {
      isGrounded = false;
    }

    const previousHeight = playerHeight;
    if (!isGrounded) {
      playerHeight += verticalVelocity * delta;
      verticalVelocity -= 1450 * delta;
    }

    let landingHeight = null;
    if (!isGrounded && verticalVelocity < 0) {
      for (const obstacle of obstacles) {
        if (obstacle.shape !== "block") {
          continue;
        }
        const overlapsX =
          playerLeft < obstacle.x + obstacle.width &&
          playerRight > obstacle.x;
        const platformHeight = obstacle.baseElevation + obstacle.height;
        if (
          overlapsX &&
          previousHeight >= platformHeight &&
          playerHeight <= platformHeight &&
          (landingHeight === null || platformHeight > landingHeight)
        ) {
          landingHeight = platformHeight;
        }
      }
    }

    if (landingHeight !== null) {
      playerHeight = landingHeight;
      verticalVelocity = 0;
      isGrounded = true;
    } else if (!isGrounded && playerHeight <= 0) {
      playerHeight = 0;
      verticalVelocity = 0;
      isGrounded = true;
    }

    if (isGrounded) {
      tryStartJump();
    }

    for (const obstacle of obstacles) {
      if ((obstacle.side || "floor") !== gravitySide) {
        continue;
      }
      const overlapLeft = Math.max(playerLeft, obstacle.x);
      const overlapRight = Math.min(playerRight, obstacle.x + obstacle.width);
      if (overlapLeft >= overlapRight) {
        continue;
      }

      let overlapsObstacle;
      if (obstacle.shape === "spike") {
        const apexX = obstacle.x + obstacle.width / 2;
        const closestX = Math.max(overlapLeft, Math.min(apexX, overlapRight));
        const distanceFromApex = Math.abs(closestX - apexX);
        const spikeSurfaceY =
          groundY - obstacle.height * (1 - distanceFromApex / (obstacle.width / 2));
        const spikeSurfaceHeight = groundY - spikeSurfaceY;
        overlapsObstacle = playerHeight < spikeSurfaceHeight && playerHeight + playerSize > 0;
      } else {
        const blockBottom = obstacle.baseElevation;
        const blockTop = blockBottom + obstacle.height;
        overlapsObstacle = playerHeight < blockTop && playerHeight + playerSize > blockBottom;
      }

      if (overlapsObstacle) {
        state = "lost";
        status.textContent = "You hit an obstacle. Restart for a new course.";
        chooseLevelButton.hidden = false;
        return;
      }
    }

    if (distance >= levelLength) {
      state = "won";
      status.textContent = "Nice run! You finished the course.";
      chooseLevelButton.hidden = false;
    }
  }

  function loop(timestamp) {
    animationId = null;
    const delta = lastFrame === 0 ? 0 : Math.min((timestamp - lastFrame) / 1000, 0.05);
    lastFrame = timestamp;
    if (state === "running") {
      update(delta);
    }
    updateProgress();
    draw();
    if (state === "running") {
      animationId = requestAnimationFrame(loop);
    }
  }

  function reset() {
    if (activeLevel === null) {
      return;
    }
    if (animationId !== null) {
      cancelAnimationFrame(animationId);
    }
    obstacles = activeLevel.obstacles;
    levelLength = activeLevel.length;
    distance = 0;
    playerHeight = 0;
    verticalVelocity = 0;
    isGrounded = true;
    gravitySide = "floor";
    jumpBuffer = 0;
    state = "running";
    lastFrame = 0;
    lastProgress = -1;
    status.textContent =
      `${activeLevel.name}: jump over spikes and use blocks as platforms.`;
    gravityButton.hidden = !activeLevel.gravityFlip;
    chooseLevelButton.hidden = true;
    updateProgress();
    draw();
    animationId = requestAnimationFrame(loop);
  }

  function handleKeyDown(event) {
    if (event.code === "Space" || event.key === "ArrowUp") {
      event.preventDefault();
      if (!event.repeat) {
        jump();
      }
    } else if (event.key.toLowerCase() === "f") {
      event.preventDefault();
      if (!event.repeat) {
        flipGravity();
      }
    }
  }

  document.addEventListener("keydown", handleKeyDown, { signal: controller.signal });
  gravityButton.addEventListener("click", flipGravity, { signal: controller.signal });
  document.querySelector("#prism-jump").addEventListener("click", jump, {
    signal: controller.signal
  });
  document.querySelector("#prism-restart").addEventListener("click", reset, {
    signal: controller.signal
  });

  document.querySelectorAll("[data-prism-level]").forEach((button) => {
    button.addEventListener("click", () => {
      activeLevel = levels[button.dataset.prismLevel];
      if (!activeLevel) {
        return;
      }
      levelSelect.hidden = true;
      playArea.hidden = false;
      reset();
    }, { signal: controller.signal });
  });

  chooseLevelButton.addEventListener("click", () => {
    if (animationId !== null) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }
    activeLevel = null;
    playArea.hidden = true;
    levelSelect.hidden = false;
  }, { signal: controller.signal });

  levelSelect.hidden = false;
  playArea.hidden = true;
  return () => {
    if (animationId !== null) {
      cancelAnimationFrame(animationId);
    }
    controller.abort();
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
    shooter: startShooterGame,
    prism: startPrismSprint
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
try {
  const savedLanguage = localStorage.getItem(languageKey);
  const savedOption = languages.find(
    ([code]) => code === savedLanguage && Boolean(translations[code])
  );
  languageSelect.value = savedOption ? savedLanguage : "en";
} catch {
  languageSelect.value = "en";
}
applyLanguage(languageSelect.value);
renderSavingTip();
expenses = readExpenses();
savingsGoal = readSavingsGoal();
if (savingsGoal) {
  savingsGoalNameInput.value = savingsGoal.name;
  savingsGoalTargetInput.value = String(savingsGoal.target);
  savingsGoalSavedInput.value = String(savingsGoal.saved);
}
renderSavingsGoal();
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
try {
  setEasyReading(localStorage.getItem(easyReadingKey) === "true", false);
} catch {
  setEasyReading(false, false);
  settingsStatus.textContent = "Your browser could not load the saved Easy Reading choice.";
}
try {
  setPauseAnimations(localStorage.getItem(pauseAnimationsKey) === "true", false);
} catch {
  setPauseAnimations(false, false);
  settingsStatus.textContent = "Your browser could not load the saved animation choice.";
}
try {
  const savedTextSize = localStorage.getItem(textSizeKey);
  setTextSize(textSizeChoices.includes(savedTextSize) ? savedTextSize : "normal", false);
} catch {
  setTextSize("normal", false);
  settingsStatus.textContent = "Your browser could not load the saved text size.";
}
