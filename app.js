const fs = require('fs')

const pathMac = '/Users/kartiknath/Documents/code/aocday1/inputsample.txt';
const pathWin = 'c:\\code\\aocday1\\inputsample.txt'
fs.readFile(pathWin, 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  var array = data.toString().split("\n").map(Number);
  
  //for(i in array){
  //console.log(array[i]);
  //}
  
  function sum3nums(a, b, c) {return a + b + c};
  const arraySums = [];
  var numberSumIncreases = 0; 
  for (let i=0; i < array.length-3 ; i++){
    var totalNumber1 = sum3nums(array[i], array[i+1], array[i+2]);
    var totalNumber2 = sum3nums(array[i+1], array[i+2], array[i+3]);
    //console.log(`The first group total is ${totalNumber1}`);
    //console.log(`The second group total is ${totalNumber2}`);
    arraySums.push(totalNumber1);
    arraySums.push(totalNumber2);
    if (totalNumber2 > totalNumber1){
      numberSumIncreases++;
    }
  };

  //console.log(`The total number of sums that are greater than the previous one is ${numberSumIncreases}`);
  console.log(arraySums);
  
 // console.log(totalNumber);
});