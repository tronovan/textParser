var fs = require('fs');

fs.readFile('dictionary.html', (err, data)=>{
    if(err){
        return console.log(`ERROR: ${err}`);
    } else {
        return console.log(`DATA: ${data}`);
    }
});
