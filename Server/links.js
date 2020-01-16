const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.static('build'))
const port = 3001

app.get('/release/latest', async (req, res) => {
    const gitVer = await axios.get('https://api.github.com/repos/kimitzu/kimitzu-client/releases/latest')
    if(gitVer.data) {
        res.json({version: gitVer.data.name})
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))