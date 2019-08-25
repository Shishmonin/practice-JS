$('document').ready(function(){
    loadGoods();
});

function loadGoods() {
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

            out+='<button><p>Добавить</p></button>';

            out+='</div>';
        }
        $('#goods').html(out);
    })
}