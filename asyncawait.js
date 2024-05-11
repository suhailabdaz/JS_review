// async function getdata(){
//     return "gogogogog"
// }
                                    // async function always return a promise
// const data = getdata()

// console.log(data);


// const promise = new Promise((res,rej)=>{
//     rej("foo")
// })

// async function getdata(params) {
//     return promise
// }

// const data = getdata()
// console.log(data);

const p1 = new Promise((resolve,reject)=>{
    setTimeout(resolve,5000,"res1")
})
const p2 = new Promise((resolve,reject)=>{
    setTimeout(resolve,10000,"res2")
})

async function ase(){
    console.log("1st stage");
    const pp1 = await p1
    console.log(pp1);
    const pp2 = await p2
    console.log(pp2);
    console.log("finish");
}

ase()

console.log("asyncncncncn");

