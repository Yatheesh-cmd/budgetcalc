function fibo(n){
    if(n==0){
        return 0;
    }
    else if(n==1){
        return 1;
    }
    else{
        return fibo(n-1)+fibo(n-2)
    }

}
let limit=7
for(i=0;i<=limit;i++){
    console.log(fibo(i))
}


