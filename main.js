'use strict';

let money = prompt('Ваш бюджет на месяц'),
    time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

let quetionOne = prompt('Введите обязательную статью расходов в этом месяце');
let quetionTwo = prompt('Во сколько обойдется?');

appData.expenses.quetionOne = +quetionTwo;

let budgetOneDay = (money - appData.expenses.quetionOne) / 30;

alert(budgetOneDay);



