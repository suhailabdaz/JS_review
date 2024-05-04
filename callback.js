function mainfunction(a,b,callback){
    let c = a+b
    if(typeof callback == "function"){
    callback(c)
    }else{
        console.log("no further operation");
    }
}

function callbackfunc(c){
    console.log(c);
}
mainfunction(2,3,callbackfunc)










