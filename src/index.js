const express = require('express');
const mongoose = require('mongoose')
const app = express();

require('dotenv').config()

const mongoUri = `mongodb+srv://ed:${process.env.DB_PASS}@cluster0.jybnz.mongodb.net/Cluster0?retryWrites=true&w=majority`

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', ()=> {
    console.log('Connected to mongo instance')
})
mongoose.connection.on('error', (err)=> {
    console.log('Error connecting to mongo >>' + err)
})

app.get('/', (req, res) => {
    res.send('Hi there!')
});
app.get('/hey', (req, res) => {
    res.send('COOOOL HEY PAGEE')
});

app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000`)
    console.log('coool')
  })