const fs = require('fs')

fs.readFile('/Users/knath/Documents/code/aocday1/input.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data);
})

