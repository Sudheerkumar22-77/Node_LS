const express= require('express')
const path = require('path');
const app= express();
const cors= require('cors');
const bodyParser= require('body-parser');
const { DateTime } = require("luxon");
const baseTime = DateTime.fromISO(datetime, { zone: timezone });

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

let output = `<h2>Converted Times</h2>

// app.get('/', (req, res)=>{
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

app.post('/post', (req, res)=>{
    const {date, city}= req.body;
    const arr= date.split(' ');
    const nums = arr.map(Number);
    const d= arr[1];
    //console.log(`Asia ${date}`);
    //console.log(`America ${date-9}`);


    console.log(date, city);
});



app.listen(1000, ()=>{
    console.log('Listening on port 1000');

})

