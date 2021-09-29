function abbrev(arg){
    l=(arg.length);
    if (l>=3){
        console.log('"'+arg[0]+arg[1]+arg[2]+' '+ l+'"');
    }
    else if (l==2){
        console.log('"'+arg[0]+arg[1]+' '+' '+ l+'"');
    }
    else {
        console.log('"'+arg[0]+' '+' '+' '+ l+'"');
    }
}

abbrev("I am your father");
