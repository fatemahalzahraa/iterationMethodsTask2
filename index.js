// You are given an array representing a series of transactions in a small business.
// Each transaction is an array containing the transaction type ("income" or "expense") and the amount.
const transactions = [
  ["income", 1000],
  ["income", 1500],
  ["expense", 500],
  ["expense", 300],
  ["income", 700],
];

/*****************************************************************
Part 1: Transaction Analysis

Task 1) Create a new array containing only the income transactions.
       Output 1) [["income", 1000], ["income", 1500], ["income", 700]]


Task 2) Create a new array containing only the expense transactions.
       Output 2) [["expense", 500], ["expense", 300]]

******************************************************************/

//Part 1

const income = transactions.filter((transaction) => {
  return transaction[0] == "income";
});

console.log(income);

const expense = transactions.filter((transaction) => {
  return transaction[0] == "expense";
});

console.log(expense);

/*****************************************************************
Part 2: Financial Summary

Task 3) Calculate the total income and return it.
       Output 3) 3200

Task 4) Calculate the total expenses and return it.
       Output 4) 800

******************************************************************/
// Part 2
//Task 3

//two ways of solutions 1. using forEach 2. using reduce

//1. using forEach

let sum = 0;

income.forEach((transaction) => {
  sum += transaction[1];
});

console.log(sum);

//2. using reduce

const totalInc = income.reduce(
  (total, value) => {
    return total + value[1];
  },
  0
  //^ 0 the initial value (reference value that all others accumalate over it)//NOTE FOR ME
);

console.log(totalInc);

//Part 2
//Task 4

//1. using forEach

let sum2 = 0;

expense.forEach((transaction) => {
  sum2 += transaction[1];
});

console.log(sum2);

//2. using reduce

const totalExp = expense.reduce((total, value) => {
  return total + value[1];
}, 0);

console.log(totalExp);

//Q) Why did we use console.log with sum2 not totalExpenses????

/*****************************************************************
Part 3: Net Analysis

Task 5) Calculate the net total (total income - total expenses) and return it.
       Output 5) 2400


Task 6) Identify and create a new array with transactions (both incomes and expenses) above $500.
       Output 6) [["income", 1000], ["income", 1500]]

******************************************************************/

// Note: Use appropriate JavaScript array iteration methods such as filter, reduce, etc., to achieve the desired output for each task.

//Task 5

console.log(totalInc - totalExp);

//Task 6

const moreThan500 = transactions.filter((transaction) => {
  return transaction[1] > 500;
});

console.log(moreThan500);
