const express = require('express')
const axios = require('axios')
const app = express()
const port = 3001

app.get('/', async (req, res) => {
    const gitVer = await axios.get('/user?ID=12345')
    res.send('Hello World!')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))