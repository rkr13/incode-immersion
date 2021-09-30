
function evenIndexes(myString){
    let even = "";
    for (j = 0; j < myString.length; j++) {
        if (j % 2 == 0) {
            even+= myString.charAt(j);
        }
    }
    splitName = even.split('');
    console.log(splitName)

}

evenIndexes("You're weird")
