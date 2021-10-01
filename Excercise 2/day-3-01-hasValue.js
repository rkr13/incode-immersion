function hasValue(a,b){
    const object = a;

    for (const key in object) {
        if(object[key] ==b){
            console.log(true)
        }
        //else{console.log(false)
        //}
    }
}
hasValue({"hello": "bonjour", "my": "mon"}, "bonjour");

function hasValue2(obj, arg) {
    //it gets the object's values.
    let objValues = Object.values(obj)
    // check if the arg is within the values.
    let argIsInclude = objValues.includes(arg)
    return console.log(argIsInclude)
}

hasValue2({"hello": "bonjour", "my": "mon"}, "bonjour");
