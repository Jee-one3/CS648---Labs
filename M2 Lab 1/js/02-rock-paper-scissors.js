function userChoice(){
    var user = window.prompt("Enter your choice (rock/ paper/ scissors) .");
    if(user === "rock" || user === "paper" || user ==="scissors"){
        return user
    }
    else{
        window.alert("Enter a valid choice");
        return userChoice();
    }
}

function comChoice(){
    var com;
    var rand = Math.floor(Math.random()*3);
    if(rand === 0){
        com = "rock";
    }
    else if(rand === 1){
        com = "paper";
    }
    else{
        com = "scissors";
    }
    return com
}

function game(user, com){
    if (user === com) {
        return "It's a tie! You both chose " + user + ".";
    } else if (
        (user === "rock" && com === "scissors") ||
        (user === "scissors" && com === "paper") ||
        (user === "paper" && com === "rock")
    ) {
        return "You win! " + user + " beats " + com + ".";
    } else {
        return "You lose! " + com + " beats " + user + ".";
    }
}

function display(){
    do{
        var user = userChoice();
        var com = comChoice();
        var result = game(user, com);
        window.alert(result);
        var retry = window.prompt("Do you want to retry (y/n) ?");
    }while(retry === "y");

}

display();

