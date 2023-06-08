const express = require('express')
const { readFileSync, writeFileSync } = require('fs');
const cors = require('cors')
const app = express() // initialize app
const port = 3000

// GET callback function returns a response message
app.use(cors());

app.get('/', (req, res) => {
    res.send(readFileSync('./info.json', 'utf8'))
})

app.listen(port, () => {
console.log(`Server listening at http://localhost:${port}`)
})
