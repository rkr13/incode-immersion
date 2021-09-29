function printVowels(str){
    l=(str.length);
    for (var i=0; i<l-1; i++){
        if (str.charAt(i) == 'a' || str.charAt(i) == 'e'
        || str.charAt(i) == 'i'
        || str.charAt(i) == 'o'
        || str.charAt(i) == 'u'){
            console.log(str.charAt(i))
        }

    }



}

printVowels("am your father");