var coinFlip;
var choice;
coinFlip = Math.floor(Math.random()*10);
choice = window.prompt("Head or Tails (H/T)");
if (coinFlip < 5){
    if(choice == "H"){
        window.document.write("The flip was heads and you chose heads...you win!");
    }
    else if(choice == "T"){
        window.document.write("The flip was heads but you chose tails...you lose!");
    }
    else{
        window.document.write("Enter a valid choice");
    }

}
else if (coinFlip > 5){
    if(choice == "T"){
        window.document.write("The flip was tails and you chose tails...you win!");
    }
    else if(choice == "H"){
        window.document.write("The flip was tails but you chose heads...you lose!");
    }
    else{
        window.document.write("Enter a valid choice");
    }

}
