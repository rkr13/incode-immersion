function concatArray(argArray){
    let returnString = argArray.join(' ');
    returnString +='.';

    return returnString
}

console.log(concatArray(["Hello", "this", "is", "dog"]));
