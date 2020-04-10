'use strict';

class Options {
  constructor(heigth, width, bg, fontSize, textAlign) {
    this.heigth = heigth;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.textAlign = textAlign;
  }
  createAndGetDivBlock() {
    let divBlock = document.createElement('div');
    
    divBlock.style.width = `${this.width}px`;
    divBlock.style.height = `${this.heigth}px`;
    divBlock.style.backgroundColor = this.bg;
    divBlock.style.fontSize = `${this.fontSize}px`;
    divBlock.textContent = this.textAlign;

    document.body.appendChild(divBlock);
  }
}

let hello = new Options(60, 400, 'blue', 30, 'Как тебя зовут');

hello.createAndGetDivBlock();

let Yob = new Options(400, 400, 'green', 30, 'Это новый блок, где можно менять свою жизнь');

Yob.createAndGetDivBlock();