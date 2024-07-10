const express = require('express');
const path = require('path');
const port = 5000;
const app = express();

app.use(express.static(path.join(__dirname, "public")));
console.log(__dirname)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get('/aboutme', (req, res) =>{
    res.sendFile(path.join(__dirname, "public", "aboutme.html"))
})


app.listen(port, () =>{
    console.log(`Status: Listening  on port ${port}`)
})