var coinFlip;
do{
    coinFlip = Math.floor(Math.random() * 2);
    if(coinFlip == 0){
        window.console.log("Heads");
    }
    else if(coinFlip == 1){
        window.console.log("Tails");
    }
}while(coinFlip == 0)