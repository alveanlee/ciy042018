var car1={
    brand:'Toyota',
    model:'Vios'

}

var car2={
    brand:'toyota',
    model:'camry'
}

var bmx={
   brand:'bmx',
   model:'x' 
}

var person ={
    firstname: 'Alvean',
    lastname:'Lee',
    gender:'female',
    age:40,
    bloodtype: 'o',
    siblings:['juliana', 'alice' ]
    transport:[car1, car2, bmx]
    hello:function(){
        console.log("hi there !");
    }
}

console.log(person.firstname);
console.log()
var pCar1=person.transport.[0];
var car1model=pCar1.model;

console.log(pCar1);
consolde.log(carmodel1);