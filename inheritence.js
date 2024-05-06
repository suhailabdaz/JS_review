const obj ={
    nameofperson:"suhail",
    age : 23,
    objfn : ()=>{
        console.log(`${this.nameofperson} of age ${this.age}`);
    }
}

class newcalss{
    constructor(){
        
    }
    class = lolo
}

function fun1(){
    this.a =10
}

console.log(Object.getOwnPropertyNames(obj.__pr));
newcalss.prototype.a=1


console.log(Object.getOwnPropertyNames(newcalss.prototype));


console.log(Object.getOwnPropertyNames(fun1.prototype));


