const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;


app.use(cors());

const courses = require('./data/courses.json');

app.get('/', (req,res)=> {
    res.send('News Api Running')
});

app.get('/courses', (req,res) => {
    res.send(courses)
});

app.get('/courses/:id', (req,res) => {
    const id = req.params.id;
    const data = courses.find(cours => cours.id == id)
    res.send(data);
})


app.listen(port , () => {
    console.log('Course api running', port);
})