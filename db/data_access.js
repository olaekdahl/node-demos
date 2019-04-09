var mongodb = require("mongodb");
var dbPool; //Connection pool
var url = "mongodb://localhost:27017/";

mongodb.MongoClient.connect(url, { useNewUrlParser: true },function(err, client) {
    if (err === null) {
        dbPool = client.db('biblio1_db'); //Open the pool
    }
});


module.exports.findBook = function(isbn, callback) {
  var col = dbPool.collection("books");

  col.find({isbn: isbn})
    .toArray((err, books) => {
      if (err === null && books.length > 0) {
        callback(null, books[0]);
      } else {
        callback("Failed to find book");
      }
  });
};

module.exports.updateBook = function(isbn, book, callback) {
  var col = dbPool.collection("books");

  col.updateOne(
    {isbn: isbn},
    {$set: book},
    {upsert: true},
    callback);
};