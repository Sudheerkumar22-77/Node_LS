const express= require('express');
const path = require('path');
const app= express();
const cors= require('cors');
const bodyParser= require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

// app.get('/', (req, res)=>{
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

app.post('/post', (req, res)=>{
    const {date, city}= req.body;
    const arr= date.split(' ');
    const d= Number(arr[1]);
    console.log(`Asia ${date}`);
    console.log(`America ${date-9}`);


    console.log(date, city);
});



app.listen(1000, ()=>{
    console.log('Listening on port 1000');
})