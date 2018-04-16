/*
2 EMILY DISTANCE CONVERTER ANSWER
3 TASK: Create a function named "convertToM" that
4 - accepts a value in feet
5 - and converts it to meters
6 * Note: 1 foot = 0.3048 meters
7
8 example usage if a successful calculator:
9 var sum = convertToM(10); // 3.048
10 */

function convertToM(feet){
  
    $('#button').click(function(){
        var v1 = parseFloat($('#fc1').val());
        $('#result').html(convertToM(v1).toString());
    });
    
    return feet * 0.3048;
   }

// This code runs your function using the input fields
function LengthConverter(valNum) {
    document.getElementById("outputMeters").innerHTML=valNum/3.2808;