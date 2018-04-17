
var result=' ';
var bottles;

for (counter = 99; counter >= 1; counter = counter - 1) 
{
    if (counter == 1) {
        bottles = 'bottle';
    } else {
        bottles = 'bottles';
    }
    console.log(counter+" "+bottles+" of beer on the wall.");
    

    if (counter < 99) {
        //console.log("");
        //console.log(counter+" "+bottles+" of beer on the wall.");
        
        var lyricsLine =`${bottles} +" "+bottles+" of beer on the wall.<br>`  
    }
    console.log(lyricsLine);
    result = result + lyricsLine;
  
    }
    
    console.log(counter+" "+bottles+" of beer.");
    console.log("Take one down.");
    console.log("Pass it around.");

    if (counter == 1) {
        //console.log("");
        //console.log("No more "+bottles+" of beer on the wall, no more "+bottles+" of beer.");
        //console.log("Go to the store and buy some more, 99 "+bottles+" of beer on the wall.");

        result = result + `No more bottles of beer on the wall, no more bottles of beer.<br>
        Go to the store and buy some more, ${bottles - 1} bottles of beer on the wall.<br>`
   
    }


console.log(bottles);
result = result + bottles;

document.getElementById('mylyrics').innerHTML=result;
