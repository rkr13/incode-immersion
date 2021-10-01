function translate(objects, str) {

    obj=objects;
    var stri= str.split(' ');

    let strd=''

    for(s in stri) {
        for(key in obj){
            if (stri[s]==key){
                strd=strd+" "+obj[key];
            }
        }
    }
    strd = strd.substring(1)

    if (strd.split(' ').length!=stri.length){
        console.log('Error: missing value');
    }
    else{
        console.log(strd);
    }
}

translate({"je": "I", "suis": "am", "pere": "father", "ton": "your"}, "je suis ton pere")
translate({"the": "le", "cute": "mignon", "your": "ton", "dog": "chien", "is": "est"}, "the dog is cute")
translate({"the": "le", "cute": "mignon", "your": "ton", "dog": "chien", "is": "est"}, "the dog is fluffy")

