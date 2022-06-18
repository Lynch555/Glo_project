'use strict';

const DomElement = function (selector, height = 100, width = 100, bg = 'red', fontSize = 20) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;

  this.createElem = () => {
    let elem;
    const inText = ('Текст');
    if (this.selector[0] === '.') {
      elem = document.createElement('div');
      elem.classList.add(`${this.selector.slice(1)}`);
    }
    if (this.selector[0] === '#') {
      elem = document.createElement('p');
      elem.id = `${this.selector.slice(1)}`;
    }

    elem.style.cssText = `margin: 0;
    padding: 5px;
    height: ${this.height}px;
    width: ${this.width}px;
    background: ${this.bg};
    font-size: ${this.fontSize}px;
    position: absolute;
    top: 0;
    left: 0;`;

    if (inText || inText.trim() !== '') {
      elem.innerText = inText;
    }

    return document.body.append(elem);
  };
};

const element = new DomElement();
element.selector = '.div';
element.createElem();

console.log(element);
