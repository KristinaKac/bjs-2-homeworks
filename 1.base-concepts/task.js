"use strict";

function solveEquation(a, b, c) {

  // Формула квадратного уравнения (ax² + bx + c = 0)
  // Формула дисриминанта b²-4*a*c
  // Формула вычисления при одном корне -b/(2*a)
  // (-b + Math.sqrt(d) )/(2*a) и (-b - Math.sqrt(d) )/(2*a)

  let arr = [];
  let d;
  let x1;
  let x2;

  d = Math.pow(b, 2) - 4 * a * c;
  
  if(d < 0){
  } else if(d === 0){
    x1 = -b/(2*a);
    arr.push(x1);
  } else if(d > 0) {
    x1 = (-b + Math.sqrt(d))/(2*a);
    x2 = (-b - Math.sqrt(d))/(2*a);
    arr.push(x1, x2);
  }

  return arr;
}
calculateTotalMortgage(10, 1000, 50000, 12);
function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  let S; // тело кредита — сумма, которую нужно вернуть банку;
  let P; // 1/12 процентной ставки (от 0 до 1);
  let monthlyPayment; //Месячная плата;
  let allPayment; // Общая сумма оплаты;

  P = (percent / 100) / 12; 
  S = amount - contribution;
  monthlyPayment = S * (P + (P / ((Math.pow((1 + P), countMonths)) - 1)));
  allPayment = (monthlyPayment * countMonths).toFixed(2);
  allPayment = +allPayment;
  return allPayment;
}