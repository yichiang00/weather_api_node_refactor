var apiKey=require('./../.env').apiKey;
$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=' + apiKey).then(function(response){
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
      $('.showTemp').append("The temp in " + city + " is " + response.main.temp + "F");
      console.log(response);
    }).fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
    });
  });
});
