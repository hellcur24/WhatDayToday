const express = require('express');
const ejs = require('ejs');
const app = express();

app.set('view engine', ejs);

app.get('/date',(req,res)=>{
    let today =new Date();
    let day ='';

    if(today.getDay() === 6 || today.getDate()=== 0){
        day="Weekend!";
    }else{
        day = "Workday";
    }
    
    res.render('index.ejs', {kindOfDay: day});
});

app.listen(5000,()=>{
    console.log('Server is running on port 5000.');
});