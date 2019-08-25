// "use strict";
let btnsArea = document.getElementsByClassName('block-application__input');
console.log(btnsArea[0]);
let btns = document.getElementsByClassName('btn');
console.log(btns[1]);

let cost;
let costVal = document.getElementsByClassName('value-cost__value');

let name;
let nameVal = document.getElementsByClassName('value-name__value');

let products;
let productsVal = document.getElementsByClassName('value-products__value');

let employees;
let employeesVal = document.getElementsByClassName('value-employees__value');

let pay;
let payVal = document.getElementsByClassName('value-pay__value');

let inpSub = document.getElementsByClassName('inpsub');
console.log(inpSub);

btnsArea[0].addEventListener('click', function (e){
  if(event.target && event.target.matches('button.btn-cost')){
    cost = parseInt(prompt("Бюджет на закупку товара каждый месяц", "Указывайте сумму числами"));
    // console.log(!Number.isNaN(cost));
    // check let cost type number
    if (typeof cost === "number" && !Number.isNaN(cost) && cost !== Infinity && cost !== -Infinity) {
      cost = cost;
      costVal[0].textContent = cost + ' rub';
    } else {
      cost = undefined;
      costVal[0].innerHTML = "<span> <strong>Не число</strong> </span>";
    };
    // console.log(cost);
    // costVal[0].textContent = cost + ' rub';
  }else if(event.target && event.target.matches('button.btn-name')){
    name = prompt("Название компании", "Укажите название именно самого ООО");
    if (name !== "") {
      name = name;
      nameVal[0].textContent = name;
    } else {
      name = undefined;
      nameVal[0].textContent = "";
    };
    // nameVal[0].textContent = name;
  }else if(event.target && event.target.matches('button.btn-products')){
    products = prompt("Перечень продуктов", "Названия линеек указывайте через запятую");
    productsVal[0].textContent = products;
  }else if(event.target && event.target.matches('button.btn-employees')){
    employees = prompt("Перечень сотрудников", "Число сотрудников по должностям через запятую");
    employeesVal[0].textContent = employees;
  }else if(event.target && event.target.matches('button.btn-pay')){
    pay = prompt("Вид оплаты", "Полная предоплата, Оплата половины суммы, Постоплата");
    payVal[0].textContent = pay;
    console.log(pay);
  };

  if (typeof(cost) != 'undefined' && typeof(name) != 'undefined' && typeof(products) != 'undefined' && typeof(employees) != 'undefined' && typeof(pay) != 'undefined')
  {
    inpSub[0].classList.remove('notactive');
    inpSub[0].disabled = false;
    console.log(inpSub.className);
  }else{
    inpSub[0].classList.add('notactive');
    inpSub[0].disabled = true;
  };

});

// let myArr = new Array (3);
// for (let j = 0, J = myArr.length; j < J; j++)
//    myArr [j] = prompt ('введите значение ' + j + '-го элемента масива', '');
 
// alert (myArr); // это для проверки

// setTimeout (function () {
//   btn[0].style.width = '50px';
//   btn[0].style.height = '50px';

//   setTimeout (function () {
//     btn[0].style.width = '90px';
//     btn[0].style.borderRadius = '10%';

//   }, 1500);
// }, 3000);

// setTimeout (function () {
//   btn[0].style.backgroundColor = 'red';
// }, 1000);

// btn[0].addEventListener('click', function (e){
//   alert('Do not push button');
// })
