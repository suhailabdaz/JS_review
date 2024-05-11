function* generator(){
    try{
        yield 1;
        yield 2;
    }catch(err){
        console.log(err);
    }finally{
        yield 5
    }
    
}

const gn = generator()
console.log(gn.next());
console.log(gn.next());
console.log(gn.next());
console.log(gn.throw("error"));
console.log(gn.return());
