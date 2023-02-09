const { json } = require('express')
const express = require('express')

const express = app()

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(8000)