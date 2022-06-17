'use strict'

const DomElement = function () {
    this.selector = '';
    this.height = 100;
    this.width = 100;
    this.bg = 'red';
    this.fontSize = 20;

    this.getString = function () {
        if (this.selector[0] == '.') {
            document.body.innerHTML = '<div class="' + this.selector.slice(1) + '">Новый div</div>'
            document.querySelector('div').style.cssText = 'height: ' + this.height + 'px; width: ' + this.width + 'px; background: ' + this.bg + '; font-size: ' + this.fontSize + 'px'
        } else if (this.selector[0] == '#') {
            document.body.innerHTML = '<p id="' + this.selector.slice(1) + '">Новый параграф</p>'
            document.querySelector('p').style.cssText = 'height:' + this.height + 'px; width:' + this.width + 'px; background: ' + this.bg + '; font-size: ' + this.fontSize + 'px'
        }
    }
}

const element = new DomElement();
element.selector = '.div';
element.getString();

console.log(element);