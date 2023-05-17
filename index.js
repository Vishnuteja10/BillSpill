let input = document.querySelector(".ip");
let ppl = document.querySelector(".numOfppl");
let billButton = document.querySelector(".bill");
let tip = document.querySelector(".tipAmount");
let total = document.querySelector(".totalAmount");
let resetBtn = document.querySelector(".reset");
let billGenerated = false;
let amount = 0;
let numOfppl = Number(ppl.innerText);
let tipAmount = 0;
let totalAmount = 0;

let tipPerPerson = 0;
let amountPerPerson = 0;

// let numOfppl = ppl.value;
console.log("amount", amount);
console.log("ppl", numOfppl);
console.log("tip", tipAmount);
console.log("total", totalAmount);

function fivePercent() {
  amount = Number(input.value);
  tipAmount = (amount / 100) * 5;
  console.log(tipAmount);
}

function tenPercent() {
  amount = Number(input.value);
  tipAmount = (amount / 100) * 10;
}

function fifteenPercent() {
  amount = Number(input.value);
  tipAmount = (amount / 100) * 15;
}

function twentyFivePercent() {
  amount = Number(input.value);
  tipAmount = (amount / 100) * 25;
}

function fiftyPercent() {
  amount = Number(input.value);
  tipAmount = (amount / 100) * 50;
}

function seventyFivePercent() {
  amount = Number(input.value);
  tipAmount = (amount / 100) * 75;
}

function inc() {
  numOfppl = numOfppl + 1;
  ppl.innerHTML = numOfppl;

  if (amount > 0 && tipAmount > 0 && numOfppl > 0) {
    billButton.classList.add("enableBill");
    console.log("true");
  }
}

function dec() {
  numOfppl = numOfppl - 1;
  ppl.innerHTML = numOfppl;

  if (amount > 0 && tipAmount > 0 && numOfppl > 0) {
    billButton.classList.add("enableBill");
    console.log("true");
  } else {
    billButton.classList.remove("enableBill");
  }
}

function generateBill() {
  if (amount > 0 && tipAmount > 0 && numOfppl > 0) {
    tipPerPerson = tipAmount / numOfppl;
    amountPerPerson = (tipAmount + amount) / numOfppl;

    console.log("tipamount", tipAmount);
    console.log("amount", amount);
    console.log("tipPerPerson", tipPerPerson);
    console.log("amountPerPerson", amountPerPerson);

    tip.innerHTML = tipPerPerson;
    total.innerHTML = amountPerPerson;

    resetBtn.classList.add("enableReset");
    billGenerated = true;
  }
}

function reset() {
  if (billGenerated) {
    amount = 0;
    tipAmount = 0;
    tipPerPerson = 0;
    amountPerPerson = 0;
    numOfppl = 0;

    console.log("reset amount", amount);
    input.value = amount;
    ppl.innerHTML = numOfppl;
    tip.innerHTML = tipPerPerson;
    total.innerHTML = amountPerPerson;
    billButton.classList.remove("enableBill");
    resetBtn.classList.remove("enableReset");
  }
}
