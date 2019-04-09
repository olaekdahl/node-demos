var balance = 0;
module.exports.deposit =  function (amount, callback) {
    var err = null;
    if (amount <= 0) {
        err = "Invalid amount!";
    } else {
        balance += amount;
    }
    callback(err, balance);
}