function removeDouble(myString){    
    var res = "";
    n=myString.length;
    for (i = 0; i < n; i++) { 
        // Check if str[i] is present before it
        var j;
        for (j = i+1; j < n; j++)
            if (myString[i] == myString[j])
                break;
 
        // If not present, then add it to
        // result.
        if (j == n)
            res = res + myString[i] + " ";
    }
    
    splitName=res.substring(0, res.lastIndexOf(" "));
    splitName = splitName.split(' ');
    
    console.log(splitName);   

}

var stuff = ["suit", "clock", "butter", "suit", -26, -26]
removeDouble(stuff)