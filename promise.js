// let promisefn = (data) => {
//     return new Promise((resolve, reject) => {
//         console.log(data);
//         resolve()
//     });
// };

// const promiser = promisefn("hello"); 
                                                        // basic 
// promiser.then(() => {
//     console.log("datahere");
// })
// .catch(()=>{
//     console.log("nahnahnah");
// });

                                //  -------------------------------------- 
                    


function step1() {
    return new Promise((resolve,reject)=>{
    console.log("step1");
    resolve()
})
}
function step2() {
    return new Promise((resolve,reject)=>{
        console.log("step2");
        resolve()
    })
}
function step3() {
    return new Promise((resolve,reject)=>{
        console.log("step3");
        resolve()
    })
}

const theprom = step1()


theprom
.then(()=>step2())
.then(()=>step3())


console.log(theprom);






