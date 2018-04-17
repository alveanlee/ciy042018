const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;
  
slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;  // stop the fn from running
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk;
});

var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];


function renderList(){
    var result = '';
    numbers.forEach((value, index)=>{
        result = result + `<div class="item item${value}" id='item${value}'>${value}</div>`;
    });
    document.getElementById('items').innerHTML = result;
}

renderList();


//numbers.push;
function doPush(){
    console.log(" >>>>> " + numbers.length);
    numbers.push(numbers.length + 1);
    renderList();
}


//number.pop=[result];
function doPop(){
    console.log(">>>>" + numbers.length);
    numbers.pop(numbers.length - 1);
    renderList();
}


//number.shift=[result];
function doShift(){
    console.log(">>>" + numbers.length);
    numbers.shift(numbers.length);
    renderList();
}

//number.unshift=[result];
function doUnShift(){
    console.log(">>" + numbers.length);
    numbers.unshift(numbers.length);
    renderList();
}

//splice where you need to delete 1 number from the 3rd position of the array and insert the number 4.5=[result];
function doSplice(){
    console.log(">" + numbers.length);
    numbers.splice(3,1,4.5);
    renderList();
}

//to sort the array descending order.=[result];
function doSort(){
    console.log("DDD" + numbers.length);
    numbers.sort(function(a,b){
        return b - a
    })
    renderList();
}
