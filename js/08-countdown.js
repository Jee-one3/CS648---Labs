var userInput = window.prompt("Enter a number");
window.document.write("Countdown begins now!!!" + "<br>");
for (i=userInput; i>=0; i--){
    window.document.write(i + "<br>");
}