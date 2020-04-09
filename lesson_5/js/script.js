'use strict';

let menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu-item'),
    adv = document.querySelector('.adv'),
    column = document.querySelectorAll('.column'),
    title = document.getElementById('title'),
    promptElement = document.getElementById('prompt');

let li = document.createElement('li'),
    text = document.createTextNode('Пятый пункт');

li.classList.add('menu-item');
li.appendChild(text);


document.body.style.background = 'url(./img/apple_true.jpg) center no-repeat';

menu.appendChild(li);
menu.insertBefore(menuItem[2], menuItem[1]);

title.innerHTML = 'Мы продаем только подлинную технику Apple';

column[1].removeChild(adv);

let loveApple = document.createTextNode(prompt('Любишь ли ты технику Apple?'));


promptElement.appendChild(loveApple);




