let obj = {
  name:'suhail',
  age:78

}

let pr = new Proxy(obj,{
  set:(target,property,value)=>{
    if(property == 'name' && typeof value !== "string"){
      console.log('nah nah')
      return false;
    }else{
      target[property] = value
      return Reflect.set(target,property,value);
    }
  },
  get:(target,property)=>{
    console.log(`the ${property} has ${target[property]} in it`)
    return Reflect.get(target,property)
  }
})
// console.log(obj);

// pr.name = 'hahah'

// console.log(obj);

console.log(pr.name)


