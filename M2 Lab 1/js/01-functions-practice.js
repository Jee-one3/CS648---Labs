//STEP 1
function halfNumber(num1){
    var result1 = num1/2;
    window.console.log("Half of " + num1 + " is " + result1);
    return result1
};
//STEP 2
function squareNumber(num2){
    var result2 = num2*num2;
    window.console.log("The result of squaring the number " + num2 + " is " + result2);
    return result2
};
//STEP 3
function percentOf(num1, num2){
    var result3 = (num1/num2)*100;
    window.console.log(num1 + " is " + result3 + "% " + "of" + num2);
    return result3
};
//STEP 4
function findModulus(num1, num2){
    var result4 = num2%num1;
    window.console.log(result4 + " is the modulus of " + num1 + " and " + num2 + ".");
    return result4
};

halfNumber(5);
squareNumber(3);
percentOf(2,4);
findModulus(4,10);
