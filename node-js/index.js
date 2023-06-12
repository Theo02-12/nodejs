const express = require('express')
const { readFileSync, writeFileSync } = require('fs');
const cors = require('cors')
const app = express() // initialize app
const port = 3000
const apiRoot = '/api'

// GET callback function returns a response message
app.use(cors());

const router = express.Router();
router.get('/', (req, res) => {
    res.send(readFileSync('./data.json', 'utf8'))
})
app.use(apiRoot, router)

app.listen(port, () => {
console.log(`Server listening at http://localhost:${port}`)
})
