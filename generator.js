// function* getdata(){
//     yield 1;
//     yield 2;
//     yield 3;
// } 

// const data = getdata()

// console.log(data.next());
// console.log(data.next());
// console.log(data.next());

function* even(number){
    while(true){
        yield number
        number+=2
    }
}
 const generator=even(2)
 for(let i=0;i<10;i++){
    console.log(generator.next().done);
 }