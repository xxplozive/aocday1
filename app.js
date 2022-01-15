const fs = require('fs')

fs.readFile('/Users/kartiknath/Documents/code/aocday1/inputsample.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  var array = data.toString().split("\n").map(Number);
  
  //for(i in array){
  //console.log(array[i]);
  //}
  
  function sum3nums(a, b, c) {return a + b + c};
  

  for (let i=0; i < 1; i++){
    var totalNumber1 = sum3nums(array[i], array[i+1], array[i+2]);
    
  };


  console.log(totalNumber1);


 // console.log(totalNumber);


});