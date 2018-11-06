console.log( $( ) );
// primary
$.simpleWeather({
    location: 99204,
    success: function(weather) {
        console.log(weather.image);
        console.log(weather.updated);
        console.log(weather.temp);
        console.log(weather.city);

        $('#primary .image img').attr('src',weather.image);
        $('#primary .city').text(weather.updated);
        $('#primary .temp').text(weather.temp);
        $('#primary .time').text(weather.city);
    }, 
    error: function(error) {
      console.log('Fucking look outside!');
    }
 });

//  secondary

$.simpleWeather({
    location: 'Seattle,WA',
    success: function(weather) {
        console.log(weather.image);
        console.log(weather.updated);
        console.log(weather.temp);
        console.log(weather.city);

        $('#secondary .image img').attr('src',weather.image);
        $('#secondary .city').text(weather.updated);
        $('#secondary .temp').text(weather.temp);
        $('#secondary .time').text(weather.city);
    }, 
    error: function(error) {
      console.log('Fucking look outside!');
    }
 });

//  geolocation

if ('geolocation'in navigator) {
    $('#geolocation').show();
}else{
    $('#geolocation *').hide();
    $('#geolocation').html('<p>Not Availiable</p>');
}

$.simpleWeather({
    location: 'geolocation',
    success: function(weather) {
        console.log(weather.image);
        console.log(weather.updated);
        console.log(weather.temp);
        console.log(weather.city);

        $('#geolocation .image img').attr('src',weather.image);
        $('#geolocation .city').text(weather.updated);
        $('#geolocation .temp').text(weather.temp);
        $('#geolocation .time').text(weather.city);
    }, 
    error: function(error) {
      console.log('Fucking look outside!');
    }
 });