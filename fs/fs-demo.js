const fs = require('fs');

// fs.stat('./misc-utils1.js', function (err, stats) {
//     if (err) {
//         console.log(err.message);
//     } else {
//         console.log(stats);
//     }
// });


// var func = function (err, stats) {
//     if (err) {
//         console.log(err.message);
//     } else {
//         console.log(stats);
//     }
// }

// fs.stat('./misc-utils.js', func);

var source = fs.createReadStream('./data.txt','utf-8');
source.on('data',data=>{
    console.log(data);
});

fs.readFile('./data.txt','utf-8',(err,data)=>{
    console.log(data);
});

fs.writeFile("./data.txt", "Hey there!", function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 

fs.appendFile('./data.txt', '\ndata to append', function (err) {
  if (err) throw err;
  console.log('Saved!');
});