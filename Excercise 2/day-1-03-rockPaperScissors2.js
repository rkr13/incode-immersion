function rockPaperScissors(p1, p2){
    if (p1 == "rock" && p2 == "paper") {
        var msg='Second player wins';
        return msg;
    }
    else if (p1 == "paper" && p2 == "rock") {
        var msg='First player wins';
        return msg;        
    }
    else if (p1 == "scissor" && p2 == "rock") {
        var msg='Second player wins';
        return msg;        
    }
    else if (p1 == "rock" && p2 == "scissor") {
        var msg='First player wins';
        return msg;        
    }
    else if (p1 == "paper" && p2 == "scissor") {
        var msg='Second player wins';
        return msg;        
    }
    else if (p1 == "scissor" && p2 == "paper") {
        var msg='First player wins';
        return msg;        
    }
    else if (p1 == p2){
        var msg='Draw'
        return msg;
    }
    else{
        return false;
    }
}

var message= rockPaperScissors("scissor", "paper")
console.log(message);