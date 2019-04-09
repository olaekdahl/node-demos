const express = require('express')
const app = express()
const port = 3000

// app.get('/books/:bookId', (req, res) => {
//   res.send(req.params.bookId)
// })

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.send('Hello World!')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))