const { text } = require('express');
const express = require('express');
const app = express();
let port = process.env.PORT || 4000;
function test(params) {
    console.log("params :",params);
}

// test("okay");

app.get('/',(req,res)=>{
    res.send("Hello heroku apiheroku-ar");
});

app.get('/test',(req,res)=>{
    res.send("heroku test apiheroku-ar");
});

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})

