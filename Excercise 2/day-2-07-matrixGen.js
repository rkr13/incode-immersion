
function matrixGen(height,width){

    arr =  [[]]; 
    for(j=1;j<height;j++){
        for(i=1;i<width;i++){
            arr[i,j]=i;
        }
        arr[i,j]=j*2;

    }
    console.log(arr)

}

matrixGen(5,5)