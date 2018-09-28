"use strict";


// PART 1: SHOW A FORTUNE
  
function replaceFortune(result) {

  var fortune = result;
  $('#fortune-text').html(fortune);
}


function showFortune(evt) {
  $.get('/fortune', replaceFortune);






    // TODO: get the fortune and show it in the #fortune-text div
}

$('#get-fortune-button').on('click', showFortune);






// PART 2: SHOW WEATHER
function replaceWeather(results){
  let weather = results;

  $('#weather-info').html(weather.forecast);

}


function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};//from index"zipcode-field"


    $.get(url,formData,replaceWeather);



    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS
function showOrder(results){
  if results.code === 'OK' {
    $('#order-status').html(results.msg);
  }
  else:
    $('#order-status').html(results.msg);
  // console.log('\n\n\n\n\nhere\n\n\n\n');

}
function orderMelons(evt) {
    evt.preventDefault();

    let formInput = {
      'qty': $('#qty-field').val(),
      'melon_type': $('#melon-type-field').val()
    };


    $.post('/order-melons.json', formInput, showOrder);


    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


