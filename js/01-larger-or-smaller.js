var firstNum = window.prompt("Enter the 1st number");
var secondNum = window.prompt("Enter the second number");

if (firstNum == secondNum){
    window.document.write("The two numbers " + firstNum + " and " + secondNum + " are equal.");
}
else if(firstNum > secondNum){
    window.document.write("The 1st number " + firstNum + " is greater.");    
}
else{
    window.document.write("The 2nd number " + secondNum + " is greater.");    
}