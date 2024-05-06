// function a(b){
//     console.log("a is done");
//     b(function c(d){
//         console.log("c is done");
//         d()
//     })
// }
                                        //an example but not that readable


// a(function b(c){
//     console.log("b is done");
//     c(function d(e){
//         console.log("d is done");
//     })
// })

function step1(callback) {
    console.log("step one completed");
    callback()
}

function step3(callback){
    console.log("step three completed");
    callback()
}
function step2(callback){
    console.log("step two completed");
    callback()
}



step1(()=>{
    step1(()=>{
        step3(()=>{
            console.log("all steps are complted");
        })
    })
})






