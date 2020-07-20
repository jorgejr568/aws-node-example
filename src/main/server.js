const express = require('express')

const app = express()
const port = process.env.PORT || 3000

require('./routes')(app)

app.listen(port, function () {
  console.log(`Server running @${port}`)
})
