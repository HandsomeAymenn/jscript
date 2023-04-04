const b = require('./b');
function objects1(){

    let student ={id : 666, name : "zidane"};
    console.log(student);
}

class Person{

    constructor(id,name,job){
        this.id = id;
        this.name = name;
        this.job = job
    }
}

b.objects1();