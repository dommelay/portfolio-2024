const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log('app is running on port: ', PORT)
})

//greetings 
app.get('/', (req, res) => {
    res.send('Hello Wolrd!')
})
