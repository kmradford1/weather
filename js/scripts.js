console.log( $( ) );

$.simpleWeather({
    location: 99004,
    success: function(weather) {
        console.log(weather.image);
        console.log(weather.updated);
        console.log(weather.temp);
        console.log(weather.city);

        $('.image img').attr('src',weather.image);
        $('.city').text(weather.updated);
        $('.temp').text(weather.temp);
        $('.time').text(weather.city);
    }, 
    error: function(error) {
      console.log('Fucking look outside!');
    }
 });