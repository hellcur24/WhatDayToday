const express = require('express');
const ejs = require('ejs');
const app = express();

app.use(express.static('public'));//мы разрешаем испльзовать эту папку, или не будет работать
app.set('view engine', ejs);


app.get('/date',(req,res)=>{
    let today =new Date();
    let day ='';
    let personData = {
                firstName:"John",
                lastName:"Doe",
                age:34,
                job:"Deleloper"
                };

    if(today.getDay() === 6 || today.getDate()=== 0){
        day="Weekend!";
    }else{
        day = "Workday";
    }
    
    res.render('index.ejs', {kindOfDay: day,
                            person:personData
                            });
});

app.listen(5000,()=>{
    console.log('Server is running on port 5000.');
});