function rmCensored(objects) {
    var toSearch = '*';

    
    for(key in objects) {
        if (key.indexOf('*') !== -1) {
            delete objects[key];
        }
        else if (objects[key].indexOf('*') !== -1) {
            delete objects[key];
        }
        }

    return objects;
}



var swearWords = {"potato": "starch", "spin*ch": "green", "collard": "green", "tomato": "fr*it"}
q=rmCensored(swearWords)
console.log(q)