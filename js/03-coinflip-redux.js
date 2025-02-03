var coinFlip;
for(var i=1; i<=10; i++){
    coinFlip = Math.floor(Math.random()*2);
    if(coinFlip == 0){
        window.console.log(coinFlip + "Heads" + "<br>");
    }
    else{
        window.console.log(coinFlip + "Tails" + "<br>");
    }
}