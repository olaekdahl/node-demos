//curl -v -X PUT -H "Content-Type: application/json" -d @book1.json http://localhost:3000/books/123

var express = require('express');
var bodyParser = require('body-parser');
var dao = require("./data_access");

var app = express();

app.use(bodyParser.json()); //Parse JSON body

app.get("/books/:isbn", (req, res) => {
  dao.findBook(req.params.isbn, (err, book) => {
    if (book !== undefined) {
      //We have a book
      res.send(book);
    } else {
      res.statusCode = 404;
      res.end();
    }
  });
});

app.put("/books/:isbn", (req, res) => {
  if (req.params.isbn === undefined || req.body === undefined) {
    res.statusCode = 500;
    res.end();

    return;
  }

  dao.updateBook(req.params.isbn, req.body, (err) => {
    if (err !== null) {
      res.statusCode = 500;
    }
    res.end();
  });
});

  app.listen(3000);