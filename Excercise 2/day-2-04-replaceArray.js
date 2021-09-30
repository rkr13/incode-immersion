function concatArray(argArray){
    
    ele=[]
    argArray.forEach((element, index) => {
        if(element.startsWith("H")||element.startsWith("h")){
            ele[index]=element.toUpperCase();
        }
        else{
            ele[index]=element;
        }
    });

    console.log(ele)
    //return returnString
}

concatArray(["Hello", "this", "is", "dog"]);