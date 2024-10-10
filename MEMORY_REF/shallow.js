let employee = {
  age:10,
  name:"suhail",
  address:{
    street:'thesection',
    state:'kerala'
  }

}

let newEmployee = structuredClone(employee)

newEmployee.address.state='karnataka'

console.log("og",employee);

console.log("dupe",newEmployee);


