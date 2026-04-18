"use strict";

const categories = {
  food: "Food",
  salary: "Salary",
  utilities: "Utilities",
  transport: "Transport",
};

// initial data
const transactions = [
  {
    id: 1,
    category: categories.food,
    amount: -1200,
    date: "2024-03-01",
    note: "Lunch",
  },
  {
    id: 2,
    category: categories.salary,
    amount: 300000,
    date: "2024-03-25",
    note: "Monthly salary",
  },
  {
    id: 3,
    category: categories.utilities,
    amount: -15000,
    date: "2024-03-05",
    note: "Electricity",
  },
  {
    id: 4,
    category: categories.food,
    amount: -4500,
    date: "2024-03-10",
    note: "Dinner",
  },
  { id: 5, category: categories.transport, amount: -2000, date: "2024-03-12" },
  {
    id: 6,
    category: categories.salary,
    amount: 5000,
    date: "2024-03-15",
    note: "Bonus",
  },
];

// 1. Summary Calculation (合計の算出)
const totalIncome = transactions
  .filter(({ amount }) => amount >= 0)
  .reduce((acc, { amount }) => acc + amount, 0);

// calculate -> convert absolute value
const totalExpense = Math.abs(
  transactions
    .filter(({ amount }) => amount < 0)
    .reduce((acc, { amount }) => acc + amount, 0),
);

// 2. Category Aggregator (カテゴリ別集計)
const categoryAggregate = transactions.reduce((acc, { category, amount }) => {
  if (amount >= 0) return acc;

  const absAmount = Math.abs(amount);
  return {
    ...acc,
    [category]: (acc[category] ?? 0) + absAmount,
  };

  // Alternative: when I need to pay attention of memory (Mutating)
  // acc[category] = (acc[category] ?? 0) + absAmount;
}, {});

// 3. Safe List Formatting (安全なリスト表示用データの作成)

// Format into currency
const formatter = new Intl.NumberFormat("ja-JP", {
  style: "currency",
  currency: "JPY",
});

const displayList = transactions.map(({ category, note, amount }) => {
  return `[${category}] ${note ?? "No note"}: ${formatter.format(amount)}`;
});

const container = document.querySelector(".container");
// const containerInput = document.querySelector(".container-input");
const list = document.getElementById("list");

list.innerHTML = "";
displayList.forEach((item) => {
  const listItem = document.createElement("li");
  listItem.innerText = item;
  listItem.classList.add("list-item");
  list.appendChild(listItem);
});

const incom = document.getElementById("incom");
const expense = document.getElementById("expense");

incom.innerText = formatter.format(totalIncome);
expense.innerText = formatter.format(totalExpense);
