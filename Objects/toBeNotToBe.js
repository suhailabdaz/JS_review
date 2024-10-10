function expect(val){
  let obj={
    toBe(newVal){
     return val === newVal
    },
    notToBe(newVal){
     return val !== newVal
    }
  }
  return obj
}

console.log(expect(5).notToBe(8))

console.log(expect(5).toBe(8))