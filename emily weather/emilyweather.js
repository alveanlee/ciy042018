/* EMILY'S WEATHER APP */
// when we click the check button, do the following

$('#check-button').click(function(){

// input is the value of the text field
var input = getText();

// image urls
  var sunImg = 'http://bsnscb.com/data/out/189/39312326-sunny-day.jpg'
  var cloudImg = 'https://cdn.pixabay.com/photo/2015/12/25/13/03/sky-1107579__340.jpg'
  var rainImg = 'https://i.ytimg.com/vi/J5OSRpRyl6g/maxresdefault.jpg'
  var invalidImg = 'https://travelsecretsmag.files.wordpress.com/2013/09/invalid-stamp.gif'
    /*
    TASK: complete the if statement below such that:
    - when input is 'sunny',
    - when input is 'cloudy',
    - when input is 'rainy',
    - when input is anything else,  the url is invalidImg
    */

    var url= "";
    if(input == 'sunny'){
      url = sunImg;
    }
    else if(input == 'cloudy'){
    url = cloudImg;
    }
    else if(input == 'rainy'){
    url = rainImg;
    }
    else{
    url = invalidImg;
    }

// ----------------------------------------------
// displays image in HTML based on url
    displayImageFrom(url);
});

// helper functions. ----------------------
function displayImageFrom(url){
    $('img').attr('src', url);
}

function getText(){
    return $('#weather-input').val();
}