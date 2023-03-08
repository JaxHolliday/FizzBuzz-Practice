//Get values from the page from the user
//fizz and buzz value
function getValues(){

    //get user values from page
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    //Parse the numbers
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    //check to make sure numsare integers
    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {

    //we can call fizzbuzz function
        let fbArray = fizzBuzz(fizzValue, buzzValue);
    //call of display data function
        displayData(fbArray);
    } else {
        alert("You must enter integers")
    }
}

//logic function
function fizzBuzz(fizzValue, buzzValue){
    //initialize an array
    let returnArray = [];

    //loop for the fizzbuzz ==> 1 to 100

    for (let i = 1; i <= 100; i++) {
        if (i % fizzValue == 0 && i % buzzValue == 0) {
            returnArray.push('FizzBuzz')
        } else if (i % fizzValue == 0){ 
            returnArray.push('Fizz')
        } else if (i % buzzValue == 0) {
            returnArray.push('Buzz')
        } else {
            returnArray.push(i);
        }        
    }
    returnArray;
}

function displayData(fbArray){

    //loop over the array and print them to the screen

}