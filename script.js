const prompt = require("prompt-sync")();
// npm install prompt-sync

// ------------------- TASK 1 -------------------
console.log("Task 1: Flexible String Manipulation with Functions");

let userFirstName = prompt("Please enter a First Name: ");
let userLastName = prompt("Please enter a Last Name: ");

function formatFullName(firstName, lastName) {
  if (!firstName || !lastName) {
    return "Invalid name input.";
  }

  let firstNameCapitalized =
    firstName[0].toUpperCase() + firstName.slice(1, firstName.length);
  let lastNameCapitalized =
    lastName[0].toUpperCase() + lastName.slice(1, lastName.length);
  let fullName = `${lastNameCapitalized}, ${firstNameCapitalized}`;

  return fullName;
}

console.log(formatFullName(userFirstName, userLastName));

// ------------------- TASK 2 -------------------
console.log("Task 2: Mathematical Operations with Multiple Parameters");
let userPrice = Number(prompt("What is the price of the item? "));
let userQuantity = Number(prompt("How many items do you need? "));
let userTax = Number(prompt("What is the tax rate in %? ")) / 100;

function calculateTotalCost(price, quantity, taxRate) {
  let totalCost;

  // Number.isFinite works as a number bouncer, and allow numbers that have an end.
  if (
    price < 0 ||
    quantity < 0 ||
    taxRate < 0 ||
    !Number.isFinite(price) ||
    !Number.isFinite(quantity) ||
    !Number.isFinite(taxRate)
  ) {
    return "Invalid input.";
  }

  if (taxRate === 0) {
    totalCost = price * quantity;
  } else {
    totalCost = price * quantity * (1 + taxRate);
  }

  // add a round, because money is money, every penny counts!
  return Math.round(totalCost * 100) / 100;
}

console.log(calculateTotalCost(userPrice, userQuantity, userTax));

// ------------------- TASK 3 -------------------
console.log("Task 3: Functions with Conditional Logic");
let userAge = Number(prompt("What is you age? "));
let userEmployment = prompt("Are you employed? (Yes/No) ");

function checkEligibility(age, isEmployed) {
  if (age <= 0 || !Number.isFinite(age) || typeof isEmployed !== "string") {
    return "Invalid input.";
  }

  let userEmploymentTrim = isEmployed.trim().toLowerCase();

  if (userEmploymentTrim !== "yes" && userEmploymentTrim !== "no") {
    return "Invalid input.";
  }

  if (age <= 18) {
    return "You are not eligible for the program.";
  } else if (userEmploymentTrim === "yes") {
    return "Congratulations! You are eligible for the program!";
  } else {
    return "You are conditionally eligible.";
  }
}

console.log(checkEligibility(userAge, userEmployment));

// ------------------- TASK 4 -------------------
console.log("Task 4: Refactoring for Reusability");

let userPrice2 = Number(prompt("What is the price of the item? "));
let userQuantity2 = Number(prompt("How many items do you need? "));
let userTax2 = Number(prompt("What is the tax rate in %? ")) / 100;
let userStoreDiscount = Number(prompt("What is the discount? "));

function calculateTotalCost(price, quantity, taxRate, discount = 0) {
  let totalCost;

  // Number.isFinite works as a number bouncer, and allow numbers that have an end.
  if (
    price < 0 ||
    quantity < 0 ||
    taxRate < 0 ||
    discount < 0 ||
    !Number.isFinite(price) ||
    !Number.isFinite(quantity) ||
    !Number.isFinite(taxRate) ||
    !Number.isFinite(discount)
  ) {
    return "Invalid input.";
  }

  let dicountedTotal = price * quantity - discount;

  if (dicountedTotal < 0) {
    return "Invalid input.";
  }

  if (taxRate === 0) {
    totalCost = dicountedTotal;
  } else {
    totalCost = dicountedTotal * (1 + taxRate);
  }

  // add a round, because money is money, every penny counts!
  return Math.round(totalCost * 100) / 100;
}

console.log(
  calculateTotalCost(userPrice2, userQuantity2, userTax2, userStoreDiscount),
);
