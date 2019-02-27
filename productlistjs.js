//your code goes here
$( document ).ready(function() {



    console.log( "ready!" );
    //example code to retrieve a dollar value from a text field with a $(dollar sign)
    var priceStr = $("span.toppings-list__item-price").eq(0).text();
    priceStr = priceStr.replace("$","");
    priceStr = parseInt(priceStr);
    alert(priceStr);




});