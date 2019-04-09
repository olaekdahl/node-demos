// var process = require('process');

// for (let index = 0; index < 10; index++) {
//    console.log(index);
// }

// console.log(`after ${index}`);

// setTimeout(demo, 1000)
// function demo(){ console.log('Hello!') }

// setTimeout(() => process.exit(), 1000);

// process.on('exit',()=>{console.log('Ending program...')});
// console.log('Hello...');

// const func = to =>{
//     console.log(`Hello after ${to} seconds...`)
// }

// setTimeout(func, 4*1000, 4);
// setTimeout(func, 8*1000, 8);

var balance = 0;
function deposit(amount, callback) {
    var err = null;
    if (amount <= 0) {
        err = "Invalid amount!";
    } else {
        balance += amount;
    }
    callback(err, balance);
}

deposit(-100, function (err, data) { 
    if (err) {
         console.log(err);
    } else {
        console.log(data);
    }
});

// deposit(-100, (err, data) => { 
//     if (err) {
//          console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// function deposit(amount, callback) {
//     var err = null;
//     if (amount <= 0) {
//         err = "Invalid amount!";
//     } else {
//         balance += amount;
//     }
//     process.nextTick(
//         ()=>{callback(err, balance)}
//     );
// }


// deposit(-100, function (err, data) { 
//     if (err) {
//          console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// deposit(-100, (err, data) => { 
//     if (err) {
//          console.log(err);
//     } else {
//         console.log(data);
//     }
// });