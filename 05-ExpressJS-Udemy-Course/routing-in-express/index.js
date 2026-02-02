const express = require('express')
const app = express()
const port = 3000

// •	app.use(express.json())
// o	Kaam: Yeh aane wale JSON Data (jo hum Postman ki body mein likhte hain) ko padhta hai aur req.body mein dalta hai. Iske bina req.body khali (undefined) milega.
// •	app.use(express.urlencoded({ extended: true }))
// o	Kaam: Yeh HTML Forms se aane wale data ko padhne ke liye hota hai.

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// Get Request Like Go to Any Page And Open Link Redirect To Page It Is A Get Request
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Post Request Like A Use Enter Password And Press Enter This Request Is A Post Request.
app.post('/', (req, res) => {
    console.log(req.body.name)
    res.send('Hello World! - This Is A Post Request')
})

// Put Request Like A post Request Update you that is Put Request
app.put('/', (req, res) => {
    res.send('Hello World! - This Is A Put Request')
})

// Delete Request Like A You delete Any Items Or Data In Server It Is A Delete Request
app.delete('/', (req, res) => {
    res.send('Hello World! - This Is A Delete Request')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
