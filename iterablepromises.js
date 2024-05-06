const promise1 = new Promise((res,rej)=>{
    setTimeout(res,1300,"1")
})
const promise2 = new Promise((res,rej)=>{
    setTimeout(res,1200,"2")
})
const promise3 = new Promise((res,rej)=>{
    setTimeout(res,1000,"3")
})

Promise.all([promise1,promise2,promise3]).then((val)=>{
    console.log(val);
})

Promise.allSettled([promise1,promise2,promise3]).then(results=>{
    console.log(results);
})

Promise.any([promise1,promise2,promise3]).then(results=>{
        console.log(results);
})

const newrator = Promise.race([promise1,promise2,promise3])
console.log(newrator);


