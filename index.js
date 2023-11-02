const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Wagecalculation = require('./models/wages.js')
app.use(express.urlencoded({ extended: true }))
const url = 'mongodb+srv://nathi:qwer123@cluster0.16xnlht.mongodb.net/?retryWrites=true&w=majority';
const port = process.env.PORT || 3000;
mongoose.connect(url)
.then(() => {
    app.listen(port, () => {
        console.log('connected to' + port);
    })
})
.catch((err) => {
    console.log(err);
})
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.get('/', (req, res) => {
    Wagecalculation.find().sort({ createdAt: -1 })
    .then((result) => {
        res.render('index', { responses: result})
    })
    .catch((err) => {
        console.log(err);
    });
   
});
app.get('/post', (req, res) => {
    res.render('form')
})

app.post('/post-wage', (req, res) => {
    const post = new Wagecalculation(req.body);
    post.save()
    .then((result) => {
        res.redirect('/');
    })
    .catch((err) => {
        console.log(err);
    });
    console.log(req.body);
})
