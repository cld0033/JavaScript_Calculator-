//let count1 = 0;
let operator = '';
//let count2 = 0;

function add(x) {
  count1 += x;
  return count1;
}

function multiply(x) {
  count1 *= x;
  return count1;
}

function sub(x) {
  count1 -= x;
  return count1;
}

function div(x) {
  count1 /= x;
  return count1;
}

function operate(start, operator, num) {
  result = start;
  switch (operator) {
    case '+':
      add(num);
      break;
    case '-':
      sub(num);
      break;
    case '*':
      multiply(num);
      break;
    case '/':
      div(num);
      break;
  }
  return result;
}

const container = document.createElement('div');
container.setAttribute('id', 'container');
container.setAttribute('class', 'container');
document.body.appendChild(container);

const display = document.createElement('div');
display.innerText = 0;
display.setAttribute('id', 'display');
display.setAttribute('class', 'display');
container.appendChild(display);

const row1 = document.createElement('div');
row1.innerText = '';
row1.setAttribute('id', 'row1');
row1.setAttribute('class', 'row');
container.appendChild(row1);

const row2 = document.createElement('div');
row2.innerText = '';
row2.setAttribute('id', 'row2');
row2.setAttribute('class', 'row');
container.appendChild(row2);

const row3 = document.createElement('div');
row3.innerText = '';
row3.setAttribute('id', 'row3');
row3.setAttribute('class', 'row');
container.appendChild(row3);

const row4 = document.createElement('div');
row4.innerText = '';
row4.setAttribute('id', 'row4');
row4.setAttribute('class', 'row');
container.appendChild(row4);

const seven = document.createElement('button');
seven.innerText = '7';
seven.setAttribute('id', 'number');
seven.setAttribute('class', 'btn');
row1.appendChild(seven);

const eight = document.createElement('button');
eight.innerText = '8';
eight.setAttribute('id', 'number');
eight.setAttribute('class', 'btn');
row1.appendChild(eight);

const nine = document.createElement('button');
nine.innerText = '9';
nine.setAttribute('id', 'number');
nine.setAttribute('class', 'btn');
row1.appendChild(nine);

const divide = document.createElement('button');
divide.innerText = '/';
divide.setAttribute('id', 'operator');
divide.setAttribute('class', 'btn');
row1.appendChild(divide);

const four = document.createElement('button');
four.innerText = '4';
four.setAttribute('id', 'number');
four.setAttribute('class', 'btn');
row2.appendChild(four);

const five = document.createElement('button');
five.innerText = '5';
five.setAttribute('id', 'number');
five.setAttribute('class', 'btn');
row2.appendChild(five);

const six = document.createElement('button');
six.innerText = '6';
six.setAttribute('id', 'number');
six.setAttribute('class', 'btn');
row2.appendChild(six);

const mult = document.createElement('button');
mult.innerText = 'X';
mult.setAttribute('id', 'operator');
mult.setAttribute('class', 'btn');
row2.appendChild(mult);

const one = document.createElement('button');
one.innerText = '1';
one.setAttribute('id', 'number');
one.setAttribute('class', 'btn');
row3.appendChild(one);

const two = document.createElement('button');
two.innerText = '2';
two.setAttribute('id', 'number');
two.setAttribute('class', 'btn');
row3.appendChild(two);

const three = document.createElement('button');
three.innerText = '3';
three.setAttribute('id', 'number');
three.setAttribute('class', 'btn');
row3.appendChild(three);

const subtract = document.createElement('button');
subtract.innerText = '-';
subtract.setAttribute('id', 'operator');
subtract.setAttribute('class', 'btn');
row3.appendChild(subtract);

const zero = document.createElement('button');
zero.innerText = '0';
zero.setAttribute('id', 'number');
zero.setAttribute('class', 'btn');
row4.appendChild(zero);

const period = document.createElement('button');
period.innerText = '.';
period.setAttribute('id', 'period');
period.setAttribute('class', 'btn');
row4.appendChild(period);

const equals = document.createElement('button');
equals.innerText = '=';
equals.setAttribute('id', 'equals');
equals.setAttribute('class', 'btn');
row4.appendChild(equals);

const addition = document.createElement('button');
addition.innerText = '+';
addition.setAttribute('id', 'operator');
addition.setAttribute('class', 'btn');
row4.appendChild(addition);

zero.addEventListener('click', () => {
  display.innerText += 0;
});

one.addEventListener('click', () => {
  display.innerText += 1;
});

two.addEventListener('click', () => {
  display.innerText += 2;
});

three.addEventListener('click', () => {
  display.innerText += 3;
});

four.addEventListener('click', () => {
  display.innerText += 4;
});

five.addEventListener('click', () => {
  display.innerText += 5;
});

six.addEventListener('click', () => {
  display.innerText += 6;
});

seven.addEventListener('click', () => {
  display.innerText += 7;
});

eight.addEventListener('click', () => {
  display.innerText += 8;
});

nine.addEventListener('click', () => {
  display.innerText += 9;
});

divide.addEventListener('click', () => {
  operator = '/';
  count1 = Number(display.innerText);
  display.innerText = 0;
});

mult.addEventListener('click', () => {
  operator = '*';
  count1 = Number(display.innerText);
  display.innerText = 0;
});

subtract.addEventListener('click', () => {
  operator = '-';
  count1 = Number(display.innerText);
  display.innerText = 0;
});
//not working reading display as a string and concatenating
addition.addEventListener('click', () => {
  operator = '+';
  count1 = Number(display.innerText);
  display.innerText = 0;
});

equals.addEventListener('click', () => {
  count2 = Number(display.innerText);
  operate(count1, operator, count2);
  display.innerText = result;
});
