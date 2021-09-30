function displayFullName(name){
    splitName = name.split(' ');
    let lastName= splitName[splitName.length-1];
    returnString= `My name is ${lastName}, ${name}`;

    return returnString;
}
console.log(displayFullName("Salvador Felipe Jacinto Dalí"));
