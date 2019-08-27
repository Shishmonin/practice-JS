let check = {};


$('document').ready(function(){
    loadClassic();
    loadCoffeeDrink();
    loadIceCoffee();
    loadCocoa();

    testCheck();

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

            out+='<button class="add-to-check" data-art="'+key+'"><p>Добавить</p></button>';

            out+='</div>';
        }
        $('#classic-content').html(out);
        // Новые строчки
        $('button.add-to-check').on('click', addToCheck);
        $('button.add-to-check').on('click', showCheck);

    })
}

// Новая функция добавления в счет за кофе
function addToCheck() {
    // добавление позиции в счет
    let articul = $(this).attr('data-art');
    // Проверка на количество товара при нажатии на кнопку
    if (check[articul] != undefined) {
        check[articul]++;
    }else {
        check[articul] = 1;
    }
    // сохранение в localStorage
    localStorage.setItem('check', JSON.stringify(check) );
    console.log(check);
    showCheck();
}
function testCheck() {
    // Проверка на существующие позиции счета в localStorage
    if (localStorage.getItem('check') != null) {
        check = JSON.parse (localStorage.getItem('check'));
    }
}

function showCheck() {
    let out = '';
    for (let key in check){
        out+='<img src="'+classicCoffee[key].image+'">';
    }
    $('.calc-check___list-add-drinks').html(out);
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

