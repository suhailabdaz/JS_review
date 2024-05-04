function mainfunction(a,b,callback){
    let c = a+b
    if(typeof callback == "function"){
    callback(c)
    }else{
        console.log("no further operation");
    }
}
                                                            // settimeout callback 
function callbackfunc(c){
    console.log(c);
}

setTimeout(()=>{mainfunction(2,3,callbackfunc)},2000)


                    //   - ------------------------------------------------------------------------


let arr =[2,3,4,5,6]

const mapped = arr.map(elem=>elem+1)
const mapped1 = arr.map((elem,index)=>elem+1)                  
                                                            // map arrow bracket and without bracket

console.log(mapped1);

                        // ------------------------------------------------------------------------


const newfn =(callback)=>{
    console.log("function original");
    callback()
}

newfn(()=>{
    console.log("maatta");
})

//                        --------------------------------------------------------------------------

const fetchdata=(data,callback)=>{
    setTimeout(()=>{
            callback(data)
    },2000)
}
                                        //   async callback
fetchdata("connected",(data)=>{
        console.log(data);
})

console.log("waait.....");

//           -----------------------------------------------------------------------------




