let check = {};
let check1 = {};
let check2 = {};
let check3 = {};



$('document').ready(function(){
    loadClassic();
    loadCoffeeDrink();
    loadIceCoffee();
    loadCocoa();
    loadCity();

    testCheck();
    testCheck1();
    testCheck2();
    testCheck3();

    reloadAll();
    reloadAll1();
    reloadAll2();
    reloadAll3();

});

// Переменные для ApI блока
let tempVal = document.getElementsByClassName('temp-value');
let apiRec = document.getElementsByClassName('API-block__recomend');

// API блок с рекомендациями
function loadCity() {
    // Загрузка базы json по городам
    $.getJSON('citylist.json', function (data) {
        $('select').on('change', function(){
            let out = '';
            // Выведение списка городов в #city  в виде параграфов с уникальным id
            for (let key in data){
                if (data[key].country == $('select option:selected').val()){
                    out += '<p value="'+data[key].id+'">'+data[key].name+'</p>';
                }
            }
            $('#city').html(out);
            // По клику на название города выводить ниже температуру в нем
            $('#city p').on('click', function(){
                $.get(
                    "http://api.openweathermap.org/data/2.5/weather",
                    {
                        "id" : $(this).attr('value'),
                        "appid": "70e1ed322b02acbc57d443dd91065f3e"
                    },
                    // При сверке со значением температуры выводить разные сообщения на страницу в блоке рекомендаций
                    function (data) {
                        let out = '';
                        // Присвоение переменной и выведение данных из api запроса в блок #temp
                        out +='<p> Температура: <p class="temp-value">'+Math.round(data.main.temp-273)+'</p> &#176;C</p>';
                        $('#temp').html(out);
                        console.log(+tempVal[0].innerHTML);
                        if(+tempVal[0].innerHTML >= 10 && +tempVal[0].innerHTML <= 20){
                            apiRec[0].textContent = "Самая прекрасная погода для прогулки! Возьмите эспрессо для активизации жизненного тонуса!";
                        }else if (+tempVal[0].innerHTML > 0 && +tempVal[0].innerHTML < 10){
                            apiRec[0].textContent = "Погода не для прогулок! Возьмите любой напиток из раздела cocoa и заройтесь под одеяло";
                        }else if (+tempVal[0].innerHTML > 20){
                            apiRec[0].textContent = "В такую жару только холодненького! Берите ice coffee!";
                        }else if (+tempVal[0].innerHTML <= 0){
                            apiRec[0].textContent = "В такую холодную погоду подойдут только горячие напитки в самой большой кружке. Возьмите любой напиток из раздела Coffee drink";
                        };
                    }
                );
            });
        });
    });
};































function loadClassic() {
    //загружаю товары на страницу
    $.getJSON('classicCoffee.json', function (data) {
        let out = '';
        for (let key in data){
            out+='<div class="card-drink d-flex" >';
            out+='<img src="'+data[key].image+'">';

            out+='<h2>'+data[key]['name']+'</h2>';
            out+='<p>'+ data[key]['compose']+ '</p>';

            out+='<div>';
            out+='<p>Цена: '+data[key]['cost'] + ' руб' + '</p>' + '<p>Объем: '+data[key]['ml']+ ' ml' + '</p>';
            out+='</div>';

            out+='<button class="add-to-check" data-atr="'+key+'" data-cost="'+data[key]['cost']+'" data-name="'+data[key]['name']+'"><p>Добавить</p></button>';

            out+='</div>';
        }
        $('#classic-content').html(out);
        // Новые строчки
        $('button.add-to-check').on('click', addToCheck);

    })
}







// Получаем переменные для подсчета стоимости заказа из выбранных позиций
let btns = document.getElementsByClassName('sum__price');
let totalScore = document.getElementsByClassName('total-price__price');

function calcScore(btns) {
    let arr1 = [];
    // Перебор коллекции в новый массив с полученными числами из оной
    for(let i = 0; i < btns.length; i++){
    arr1.push(+btns[i].innerHTML);
    }

    let arr2 = 0;
    // Перебор массива с сложением всех цен
    for(let i = 0; i < arr1.length; i++){
        arr2 += arr1[i];
    }
    console.log(arr2);
    totalScore[0].innerHTML = "<p>" +arr2+ " руб </p>";
}


// Сохранение в локалстор
function addToCheck() {
    // добавление позиции в счет
    let articul = $(this).attr('data-atr');
    // Проверка на количество товара при нажатии на кнопку
    if (check[articul] != undefined) {
        check[articul]++;
    }else {
        check[articul] = 1;
    }
    // сохранение в localStorage
    localStorage.setItem('check', JSON.stringify(check) );
    console.log(check);
    reloadAll();
}

function addToCheck1() {
    // добавление позиции в счет
    let articul = $(this).attr('data-atr1');
    // Проверка на количество товара при нажатии на кнопку
    if (check1[articul] != undefined) {
        check1[articul]++;
    }else {
        check1[articul] = 1;
    }
    // сохранение в localStorage
    localStorage.setItem('check1', JSON.stringify(check1) );
    console.log(check1);
    reloadAll1();
}

function addToCheck2() {
    // добавление позиции в счет
    let articul = $(this).attr('data-atr2');
    // Проверка на количество товара при нажатии на кнопку
    if (check2[articul] != undefined) {
        check2[articul]++;
    }else {
        check2[articul] = 1;
    }
    // сохранение в localStorage
    localStorage.setItem('check2', JSON.stringify(check2) );
    console.log(check2);
    reloadAll2();
}

function addToCheck3() {
    // добавление позиции в счет
    let articul = $(this).attr('data-atr3');
    // Проверка на количество товара при нажатии на кнопку
    if (check3[articul] != undefined) {
        check3[articul]++;
    }else {
        check3[articul] = 1;
    }
    // сохранение в localStorage
    localStorage.setItem('check3', JSON.stringify(check3) );
    console.log(check3);
    reloadAll3();
}




// Проверка нашего чека в let check на наличие уже лежащих позиций
function testCheck() {
    // Проверка на существующие позиции счета в localStorage
    if (localStorage.getItem('check') != null) {
    // Достаем из локалстор значения в переменную let check
        check = JSON.parse (localStorage.getItem('check'));
    }
}

// Проверка нашего чека в let check на наличие уже лежащих позиций
function testCheck1() {
    // Проверка на существующие позиции счета в localStorage
    if (localStorage.getItem('check1') != null) {
    // Достаем из локалстор значения в переменную let check
        check1 = JSON.parse (localStorage.getItem('check1'));
    }
}

// Проверка нашего чека в let check на наличие уже лежащих позиций
function testCheck2() {
    // Проверка на существующие позиции счета в localStorage
    if (localStorage.getItem('check2') != null) {
    // Достаем из локалстор значения в переменную let check
        check2 = JSON.parse (localStorage.getItem('check2'));
    }
}

// Проверка нашего чека в let check на наличие уже лежащих позиций
function testCheck3() {
    // Проверка на существующие позиции счета в localStorage
    if (localStorage.getItem('check3') != null) {
    // Достаем из локалстор значения в переменную let check
        check3 = JSON.parse (localStorage.getItem('check3'));
    }
}


function reloadAll(){
    $.getJSON('classicCoffee.json', function(data) {
        let clasCoff = data;
        testCheck();
        showCheck();
        calcScore(btns);

        function showCheck() {// Добавление позиции напитка в чек с отрисовкой
            let out = '';
            for (let i in check){
                out+='<div class="add-drink" >';

                out+='<div class="add-drink__name d-flex" >';
                out+='<p>'+ clasCoff[i]['name']+ '</p>';
                out+='</div>';

                out+='<div class="add-drink__sum d-flex">';
                out+='<div class="sum__counter d-flex">';
                out+='<button class="minus" data-atr="'+i+'" >-</button>' +check[i]+ '<button class="plus" data-atr="'+i+'" >+</button>';
                out+='</div>';
                out+='<div class="sum__price d-flex">';
                out+=check[i]*clasCoff[i].cost;
                out+='</div>';
                out+='</div>';

                out+='<div class="add-drink__del d-flex">';
                out+='<button class="dell" data-atr="'+i+'" >x</button>';
                out+='</div>';

                out+='</div>';
            }
            $('.card').html(out);
            $('.plus').on('click', plusCoffee);
            $('.minus').on('click', minusCoffee);
            $('.dell').on('click', deleteCoffee);
        }
        function plusCoffee() {
            let articuls = $(this).attr('data-atr');
            check[articuls]++;
            saveCheckToLS();// Сохранение числа кружек в локалстор
            showCheck();// Отрисовка в чеке заново
            calcScore(btns);
        }

        function minusCoffee() {
            let articuls = $(this).attr('data-atr');
            if (check[articuls]>1){
                check[articuls]--;
            }
            else {
                delete check[articuls];
            }
            saveCheckToLS();// Сохранение числа кружек в локалстор
            showCheck();// Отрисовка в чеке заново
            calcScore(btns);
        }

        function deleteCoffee() {
            let articuls = $(this).attr('data-atr');
            delete check[articuls];
            saveCheckToLS();// Сохранение числа кружек в локалстор
            showCheck();// Отрисовка в чеке заново
            calcScore(btns);
        }
    })
}

// Сохранение числа кружек в локалстор после нажатия на + или -
function saveCheckToLS() {
    localStorage.setItem('check', JSON.stringify(check) );
}

function saveCheckToLS1() {
    localStorage.setItem('check1', JSON.stringify(check1) );
}

function saveCheckToLS2() {
    localStorage.setItem('check2', JSON.stringify(check2) );
}

function saveCheckToLS3() {
    localStorage.setItem('check3', JSON.stringify(check3) );
}



function loadCoffeeDrink() {
    //загружаю товары на страницу
    $.getJSON('coffeeDrink.json', function (data) {
        //console.log(data);
        let out = '';
        for (let key in data){
            out+='<div class="card-drink d-flex" >';
            out+='<img src="'+data[key].image+'">';

            out+='<h2>'+data[key]['name']+'</h2>';
            out+='<p>'+ data[key]['compose']+ '</p>';

            out+='<div>';
            out+='<p>Цена: '+data[key]['cost'] + ' руб' + '</p>' + '<p>Объем: '+data[key]['ml']+ ' ml' + '</p>';
            out+='</div>';

            out+='<button class="add-to-check1" data-atr1="'+key+'" data-cost="'+data[key]['cost']+'" data-name="'+data[key]['name']+'"><p>Добавить</p></button>';

            out+='</div>';
        }
        $('#coffeedrink-content').html(out);
        // Новые строчки
        $('button.add-to-check1').on('click', addToCheck1);

    })
}




function reloadAll1(){
    $.getJSON('coffeeDrink.json', function(data) {
        let coffDrink = data;
        testCheck1();
        showCheck1();
        calcScore(btns);

        function showCheck1() {// Добавление позиции напитка в чек с отрисовкой
            let out = '';
            for (let i in check1){
                out+='<div class="add-drink" >';

                out+='<div class="add-drink__name d-flex" >';
                out+='<p>'+ coffDrink[i]['name']+ '</p>';
                out+='</div>';

                out+='<div class="add-drink__sum d-flex">';
                out+='<div class="sum__counter d-flex">';
                out+='<button class="minus1" data-atr1="'+i+'" >-</button>' +check1[i]+ '<button class="plus1" data-atr1="'+i+'" >+</button>';
                out+='</div>';
                out+='<div class="sum__price d-flex">';
                out+=check1[i]*coffDrink[i].cost;
                out+='</div>';
                out+='</div>';

                out+='<div class="add-drink__del d-flex">';
                out+='<button class="dell1" data-atr1="'+i+'" >x</button>';
                out+='</div>';

                out+='</div>';
            }
            $('.card1').html(out);
            $('.plus1').on('click', plusCoffee1);
            $('.minus1').on('click', minusCoffee1);
            $('.dell1').on('click', deleteCoffee1);
        }
        function plusCoffee1() {
            let articuls = $(this).attr('data-atr1');
            check1[articuls]++;
            saveCheckToLS1();// Сохранение числа кружек в локалстор
            showCheck1();// Отрисовка в чеке заново
            calcScore(btns);
        }

        function minusCoffee1() {
            let articuls = $(this).attr('data-atr1');
            if (check1[articuls]>1){
                check1[articuls]--;
            }
            else {
                delete check1[articuls];
            }
            saveCheckToLS1();// Сохранение числа кружек в локалстор
            showCheck1();// Отрисовка в чеке заново
            calcScore(btns);
        }

        function deleteCoffee1() {
            let articuls = $(this).attr('data-atr1');
            delete check1[articuls];
            saveCheckToLS1();// Сохранение числа кружек в локалстор
            showCheck1();// Отрисовка в чеке заново
            calcScore(btns);
        }
    })
}




function loadIceCoffee() {
    //загружаю товары на страницу
    $.getJSON('iceCoffee.json', function (data) {
        //console.log(data);
        let out = '';
        for (let key in data){
            out+='<div class="card-drink d-flex" >';
            out+='<img src="'+data[key].image+'">';

            out+='<h2>'+data[key]['name']+'</h2>';
            out+='<p>'+ data[key]['compose']+ '</p>';

            out+='<div>';
            out+='<p>Цена: '+data[key]['cost'] + ' руб' + '</p>' + '<p>Объем: '+data[key]['ml']+ ' ml' + '</p>';
            out+='</div>';

            out+='<button class="add-to-check2" data-atr2="'+key+'" data-cost="'+data[key]['cost']+'" data-name="'+data[key]['name']+'"><p>Добавить</p></button>';

            out+='</div>';
        }
        $('#icecoffee-content').html(out);
        // Новые строчки
        $('button.add-to-check2').on('click', addToCheck2);

    })
}

function reloadAll2(){
    $.getJSON('iceCoffee.json', function(data) {
        let iceCoff = data;
        testCheck2();
        showCheck2();
        calcScore(btns);

        function showCheck2() {// Добавление позиции напитка в чек с отрисовкой
            let out = '';
            for (let i in check2){
                out+='<div class="add-drink" >';

                out+='<div class="add-drink__name d-flex" >';
                out+='<p>'+ iceCoff[i]['name']+ '</p>';
                out+='</div>';

                out+='<div class="add-drink__sum d-flex">';
                out+='<div class="sum__counter d-flex">';
                out+='<button class="minus2" data-atr2="'+i+'" >-</button>' +check2[i]+ '<button class="plus2" data-atr2="'+i+'" >+</button>';
                out+='</div>';
                out+='<div class="sum__price d-flex">';
                out+=check2[i]*iceCoff[i].cost;
                out+='</div>';
                out+='</div>';

                out+='<div class="add-drink__del d-flex">';
                out+='<button class="dell2" data-atr2="'+i+'" >x</button>';
                out+='</div>';

                out+='</div>';
            }
            $('.card2').html(out);
            $('.plus2').on('click', plusCoffee2);
            $('.minus2').on('click', minusCoffee2);
            $('.dell2').on('click', deleteCoffee2);
        }
        function plusCoffee2() {
            let articuls = $(this).attr('data-atr2');
            check2[articuls]++;
            saveCheckToLS2();// Сохранение числа кружек в локалстор
            showCheck2();// Отрисовка в чеке заново
            calcScore(btns);
        }

        function minusCoffee2() {
            let articuls = $(this).attr('data-atr2');
            if (check2[articuls]>1){
                check2[articuls]--;
            }
            else {
                delete check2[articuls];
            }
            saveCheckToLS2();// Сохранение числа кружек в локалстор
            showCheck2();// Отрисовка в чеке заново
            calcScore(btns);
        }

        function deleteCoffee2() {
            let articuls = $(this).attr('data-atr2');
            delete check2[articuls];
            saveCheckToLS2();// Сохранение числа кружек в локалстор
            showCheck2();// Отрисовка в чеке заново
            calcScore(btns);
        }
    })
}




function loadCocoa() {
    //загружаю товары на страницу
    $.getJSON('cocoa.json', function (data) {
        //console.log(data);
        let out = '';
        for (let key in data){
            out+='<div class="card-drink d-flex" >';
            out+='<img src="'+data[key].image+'">';

            out+='<h2>'+data[key]['name']+'</h2>';
            out+='<p>'+ data[key]['compose']+ '</p>';

            out+='<div>';
            out+='<p>Цена: '+data[key]['cost'] + ' руб' + '</p>' + '<p>Объем: '+data[key]['ml']+ ' ml' + '</p>';
            out+='</div>';

            out+='<button class="add-to-check3" data-atr3="'+key+'" data-cost="'+data[key]['cost']+'" data-name="'+data[key]['name']+'"><p>Добавить</p></button>';

            out+='</div>';
        }
        $('#cocoa-content').html(out);
        // Новые строчки
        $('button.add-to-check3').on('click', addToCheck3);

    })
}

function reloadAll3(){
    $.getJSON('cocoa.json', function(data) {
        let cocoDrink = data;
        testCheck3();
        showCheck3();
        calcScore(btns);


        function showCheck3() {// Добавление позиции напитка в чек с отрисовкой
            let out = '';
            for (let i in check3){
                out+='<div class="add-drink" >';

                out+='<div class="add-drink__name d-flex" >';
                out+='<p>'+ cocoDrink[i]['name']+ '</p>';
                out+='</div>';

                out+='<div class="add-drink__sum d-flex">';
                out+='<div class="sum__counter d-flex">';
                out+='<button class="minus3" data-atr3="'+i+'" >-</button>' +check3[i]+ '<button class="plus3" data-atr3="'+i+'" >+</button>';
                out+='</div>';
                out+='<div class="sum__price d-flex">';
                out+=check3[i]*cocoDrink[i].cost;
                out+='</div>';
                out+='</div>';

                out+='<div class="add-drink__del d-flex">';
                out+='<button class="dell3" data-atr3="'+i+'" >x</button>';
                out+='</div>';

                out+='</div>';
            }

            $('.card3').html(out);
            $('.plus3').on('click', plusCoffee3);
            $('.minus3').on('click', minusCoffee3);
            $('.dell3').on('click', deleteCoffee3);
        }
        function plusCoffee3() {
            let articuls = $(this).attr('data-atr3');
            check3[articuls]++;
            saveCheckToLS3();// Сохранение числа кружек в локалстор
            showCheck3();// Отрисовка в чеке заново
            calcScore(btns);
        }

        function minusCoffee3() {
            let articuls = $(this).attr('data-atr3');
            if (check3[articuls]>1){
                check3[articuls]--;
            }
            else {
                delete check3[articuls];
            }
            saveCheckToLS3();// Сохранение числа кружек в локалстор
            showCheck3();// Отрисовка в чеке заново
            calcScore(btns);
        }
        function deleteCoffee3() {
            let articuls = $(this).attr('data-atr3');
            delete check3[articuls];
            saveCheckToLS3();// Сохранение числа кружек в локалстор
            showCheck3();// Отрисовка в чеке заново
            calcScore(btns);
        }
    })
}

// console.log((btns[0].innerHTML));


// let arr = [3,2,5,6];

// function arraySum(array){
//     let sum = 0;
//     for(let i = 0; i < array.length; i++){
//     sum += +btns[i].innerHTML;
//     }
//     console.log(sum);
// }
// arraySum(btns);