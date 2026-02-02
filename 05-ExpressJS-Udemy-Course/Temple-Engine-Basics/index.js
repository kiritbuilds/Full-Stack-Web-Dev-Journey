const express = require('express')
const app = express()
const path = require("path")
const port = 3000

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    // Fetch How Many Users Enrolled From The Database
    let users = ["Kirit", "Brijesh" , "Vivek"]
    res.render("index",{users: users})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
