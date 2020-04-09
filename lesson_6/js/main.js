'use strict';

let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0];
    
let inputExpenses = document.getElementsByClassName('expenses-item'),
    buttons = document.getElementsByTagName('button');

let btnExpenses = buttons[0],
    btnOptionalExpenses = buttons[1],
    btnCountBudget = buttons[2];

let optionalExpenses = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    chooseSavings = document.querySelector('#savings'),
    sumSavings = document.querySelector('.choose-sum'),
    percentSavings = document.querySelector('.choose-percent');

let yearValue = document.querySelector('.year-value'),
    dayValue = document.querySelector('.day-value'),
    monthValue = document.querySelector('.month-value');

let money,
    time;

startBtn.addEventListener('click', function() {
  time = prompt('Введите дату в формате YYYY-MM-DD');
  money = +prompt('Ваш бюджет на месяц');

  while(isNaN(money) || money == "" || money == null) {
    money = +prompt('Ваш бюджет на месяц');
  }

  appData.budget = money;
  appData.timeData = time;

  budgetValue.textContent = money.toFixed();
  yearValue.value = new Date(Date.parse(time)).getFullYear();
  monthValue.value = new Date(Date.parse(time)).getMonth();
  dayValue.value = new Date(Date.parse(time)).getDate();
});

btnExpenses.addEventListener('click', function() {
  let sum = 0;

  for (let i = 0; i < inputExpenses.length; i++) {
    let a = inputExpenses[i].value,
        b = inputExpenses[++i].value;
    
    if (typeof(a) === 'string' && typeof(a) != null && a != '' && typeof(b) != null && b != '' && a.length < 50) {
      console.log('done');
      appData.expenses[a] = b;

      sum += +b;
    } else {
      i--;
    }
  }

  expensesValue.textContent = sum;
});

btnOptionalExpenses.addEventListener('click', function() {


  for (let i = 0; i < optionalExpenses.length; i++) {
    let OptionalExpense = optionalExpenses[i].value;
    appData.optionalExpenses[i] = OptionalExpense;
    optionalExpensesValue.textContent += OptionalExpense + ' ';
  }
});

btnCountBudget.addEventListener('click', function() {
  let sumExpenses = 0;

  if (appData.expenses != '' || appData.expenses != null) {
    for (let key in appData.expenses) {
      sumExpenses += +appData.expenses[key];
    }
    console.log(sumExpenses);
  }

  if (appData.budget != '') {

    if (sumExpenses != 0) {
      appData.moneyPerDay = ((appData.budget - sumExpenses) / 30).toFixed();
    } else {
      appData.moneyPerDay = (appData.budget / 30).toFixed();
    }

    dayBudgetValue.textContent = appData.moneyPerDay;

    if (appData.moneyPerDay < 100) {
      levelValue.textContent = 'Низкий уровень достатка';
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      levelValue.textContent = 'Средний уровень достатка';
    } else if (appData.moneyPerDay > 2000) {
      levelValue.textContent = 'Высокий уровень достатка';
    } else {
      levelValue.textContent = 'Произошла какая-то ошибка';
    }
  }

});

chooseIncome.addEventListener('input', function() {
  let items = chooseIncome.value;

  appData.income = items.split(', ');

  incomeValue.textContent = chooseIncome.value;

});

chooseSavings.addEventListener('click', function() {
  if (appData.savings != true) {
    appData.savings = true;
  } else {
    appData.savings = false;
  }
});

sumSavings.addEventListener('input', function() {
  let percent = percentSavings.value;
  if (appData.savings) {
    appData.monthIncome = (sumSavings.value / 100 / 12 * percent).toFixed();
    monthSavingsValue.textContent = appData.monthIncome;

    yearSavingsValue.textContent = (sumSavings.value / 100 * percent).toFixed();
  }
});

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
  detectDayBudget: function() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();

    alert("Ежедневный бюджет: " + appData.moneyPerDay);
  },
  detectLevel: function() {
    if (appData.moneyPerDay < 100) {
      console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
      console.log("Высокий уровень достатка");
    } else {
      console.log("Произошла какая-то ошибка");
    }
  },
  chooseOptExpenses: function() {
    for (let i = 1; i < 4; i++) {
      let quetion = prompt("Статья необязательных расходов?");
      appData.optionalExpenses[i] = quetion;
    }
  },
  checkSavings: function() {
    if (appData.savings == true) {
      let save = +prompt("Какова сумма накоплений?"),
          percent = +prompt("Под какой процент?");
  
          appData.monthIncome = save / 100 / 12 * percent;
          alert("Доход в месяц с вашего депозита" + appData.monthIncome);
    }
  },
  chooseIncome: function() {
    let items = prompt("Что приносит дополнительный доход (Напишите через запятую)");

    while(typeof(items) === 'string' || items == '' || items == null) {
      items = prompt("Что приносит дополнительный доход (Напишите через запятую)");
    }

    appData.income = items.split(', ');
    appData.income.push(prompt('Может что-то еще?'));
    appData.income.sort();

    // appData.income.forEach(function(item, i, mass) {
    //   alert('Способы доп. заработка: ');
    // });
  }
};


console.log('Наша программа включает в себя данные: ');
for (let key in appData) {
  console.log(key);
}