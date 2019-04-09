const fs = require('fs');

// var data = fs.readFileSync('./source.txt', 'utf-8');

// console.log(data);

// fs.readFile('./source.txt', 'utf-8', (err, data) => {
//     console.log(data);
// });

fs.readFile('./source.txt', 'utf-8', (err, data) => {
    fs.writeFile('./target.txt', data, (err) => {
        console.log('done with copy');
    })
});


console.log('More work....');