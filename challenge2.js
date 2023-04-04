var i;
var n;
var p;
for(i=1;i<=100;i++){
    n=i%3;
    p=i%5;
    if (n==0){
        console.log("Fizz");
    }
    else if(p==0){
        console.log("Buzz");
    }
    else if(n==0 && p==0){
        console.log("FizzBuzz");
    }
}