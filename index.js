const express = require('express');
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors');
const categories = require('./data/Categories.json');


app.use(cors())

app.get('/', (req, res) =>{
    res.send('hello server side')
})


app.get('/categories', (req, res) =>{
    res.send(categories)
})


app.listen(port, ()=>{
    console.log('server is running on port', port)
})
