function pyramid(arg){
    var row=arg+1;
    var col=arg+1;
    for (var i =1; i<=row; i++){
        for (var k =1; k<=(row-i); i++){
            console.log(" ")
            for (var j=1; j<=i;j++){
                console.log('# ');
            }
        }

    }
}

pyramid(5)