const fs = require('fs')

const pathMac = '/Users/kartiknath/Documents/code/aocday1/inputsample.txt';
const pathWin = 'c:\\code\\aocday1\\input.txt'
fs.readFile(pathWin, 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  var array = data.toString().split("\n").map(Number);
  let remain = array.length % 3; 
  function sum3nums(a, b, c) {return a + b + c};
  const arraySums = [];
  var numberSumIncreases = 0; 
  for (let i=0; i < array.length; i++){
    var totalNumber = sum3nums(array[i], array[i+1], array[i+2]);
    arraySums.push(totalNumber);
  };
  
  for (let j = 0; j < arraySums.length; j++) {
    if(arraySums[j] < arraySums[j+1]){
      numberSumIncreases++;
    }
  };
  
  //console.log(array.length);
  //console.log (arraySums.length);
  //console.log(arraySums);
  //console.log(remain);
  // console.log(totalNumber);
  console.log(`The total number of sums that are greater than the previous one is ${numberSumIncreases}`);
});

// The answer is 1575
