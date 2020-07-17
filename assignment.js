// Assignment starts from here:

// Solution of 1st problem:
function feetToMile(inputFeet){
    let outputMiles=(inputFeet*0.000189394);
    outputMiles = outputMiles.toFixed(2);
    outputMiles = parseFloat(outputMiles)
    return outputMiles;
}
    console.log (feetToMile(400000));
    

// Solution of 2nd roblem:
function woodCalculator(chair, table, bed){
    let chairCalculator = chair * 1;
    let tableCalculator = table * 3;
    let bedCalculator = bed * 5;
    let totalWood = (chairCalculator * tableCalculator * bedCalculator);
    return totalWood;
}
console.log (woodCalculator (4,1,1));


// Solution of 3rd problem:

function brickCalculator (inputFloorNum) {
    let outputBriksNum = undefined;
    if (inputFloorNum <= 10) {
        outputBriksNum = (inputFloorNum*15*1000);
    } 
    else if (inputFloorNum >= 11 && inputFloorNum <= 20) {
        let firstTenth = (10*15*1000);
        let remaining = (inputFloorNum-10);
        let secondTenth = (remaining*12*1000);
        outputBriksNum = (firstTenth+secondTenth);
    } 
    else {
        let firstTenth = (10*15*1000);
        let secondTenth = (10*12*1000);
        let remaining = (inputFloorNum-20);
        let nextFloors = (remaining*10*1000);
        outputBriksNum = (firstTenth+secondTenth+nextFloors);
    }
  return outputBriksNum;
}
console.log(brickCalculator(22));


// Solution of 4th problem:
function tinyFriend(names){
    let shortLength = null;

    if (names.length > 0) { 
        for (let i = 0; i < names.length; i++) {
            if (typeof names[i] === 'string'){
                if (shortLength == null) shortLength = names[i];
                else if (names[i].length < shortLength.length){
                    shortLength = names[i];
                }
            }
        }
    }
    return shortLength;
}
let result = tinyFriend(['Sunny', 'Tonny', 'Jony', 'tom', 'Romman']);
console.log(result);

// Assignment ends here: