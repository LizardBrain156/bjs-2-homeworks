"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;

  if (d < 0) {
    return arr;
  } else if (d === 0) {
    let r = -b / (2 * a);
    arr.push(r);
  } else if (d > 0) {
    let r1 = (-b + Math.sqrt(d)) / (2 * a);
    let r2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(r1, r2);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentageMonthly = percent / 12 / 100;
  let creditBody = amount - contribution;
  let paymentMontly = creditBody * (
    percentageMonthly +
    (percentageMonthly / (((1 + percentageMonthly) ** countMonths) - 1))
  );
  let paymentTotal = paymentMontly * countMonths;

  return parseFloat(paymentTotal.toFixed(2));
}