let check = {};


$('document').ready(function(){
    loadClassic();
    loadCoffeeDrink();
    loadIceCoffee();
    loadCocoa();

    testCheck();
    showCheck();

});

function loadClassic() {
    //загружаю товары на страницу
    $.getJSON('classicCoffee.json', function (data) {
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

            out+='<button class="add-to-check" data-atr="'+key+'" data-cost="'+data[key]['cost']+'" data-name="'+data[key]['name']+'"><p>Добавить</p></button>';

            out+='</div>';
        }
        $('#classic-content').html(out);
        // Новые строчки
        $('button.add-to-check').on('click', addToCheck);

    })
}

// Сохранение в локалстор
function addToCheck() {
    // добавление позиции в счет
    // let articul = $(this).attr('data-atr');
    let articul = $(this).attr('data-name');

    // check[ $(this).attr('data-cost'), $(this).attr('data-name')];
    // Проверка на количество товара при нажатии на кнопку
    if (check[articul] != undefined) {
        check[articul]++;
    }else {
        check[articul] = 1;
    }
    // сохранение в localStorage
    localStorage.setItem('check', JSON.stringify(check) );

    console.log(check);
    showCheck()
}

// Проверка нашего чека в let check на наличие уже лежащих позиций
function testCheck() {
    // Проверка на существующие позиции счета в localStorage
    if (localStorage.getItem('check') != null) {
    // Достаем из локалстор значения в переменную let check 
        check = JSON.parse (localStorage.getItem('check'));
    }
}
// Визуализация работы локалстор ПРОМЕЖУТОЧНАЯ НЕ ЗАПУСКАТЬ
// function showCheck() {
//     let out = '';
//     for (let i in check){
//         out +='<p>' +i+ '</br> кол-во ' +check[i]+ '</br>';
//     }
//     $('.calc-check___list-add-drinks').html(out);
// }

$.getJSON('classicCoffee.json', function(data) {
    let clasCoff = data;
    // console.log(data);
    // console.log(check);
    showCheck();

})

function showCheck() {
    let out = '';
    for (let i in check){
        out += i +check[i]+ '</br>';
    }
    $('.card').html(out);
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

            out+='<button class="add-to-check" data-art="'+key+'"><p>Добавить</p></button>';

            out+='</div>';
        }
        $('#coffeedrink-content').html(out);
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

            out+='<button class="add-to-check" data-art="'+key+'"><p>Добавить</p></button>';

            out+='</div>';
        }
        $('#icecoffee-content').html(out);
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

            out+='<button class="add-to-check" data-art="'+key+'"><p>Добавить</p></button>';

            out+='</div>';
        }
        $('#cocoa-content').html(out);
    })
}

