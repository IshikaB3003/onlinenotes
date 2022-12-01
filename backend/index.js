const connectToMongo = require('./db');
const express = require('express')
connectToMongo();


const app = express()
const port = 5000

//Available Routes
// app.get('/', (req, res) => {
//   res.send('Hello Ishika!')
// })
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})





// 1.First, write npm install --save nodemon then in package.json write the followings
// 2."scripts": {
//     "server": "nodemon server.js"
//   },
// 3.then write in  the terminal

// npm run server