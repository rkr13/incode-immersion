function subDigits(n){
    var D1=n;
    var D2=n%10;
    while(D1>=10){
        D1/=10;
    }

    outv=n-D1-D2;
    if (outv>=0){
        console.log(outv);
    }
    else{
        console.log("Aurgument error")
    }
}

subDigits(09)