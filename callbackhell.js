function a(b){
    console.log("a is done");
    b(function c(d){
        console.log("c is done");
        d()
    })
}



a(function b(c){
    console.log("b is done");
    c(function d(e){
        console.log("d is done");
    })
})







