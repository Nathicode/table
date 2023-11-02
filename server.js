const express = require('express');
const app = express();
const morgan = require('morgan');
const Blog = require('./models/blog');

app.use(morgan('dev'))
app.set('view engine', 'ejs');
// middleware 
app.use(express.static('public'));
const port = process.env.PORT || 4000;
app.use(express.urlencoded())
//connect db
const url = 'mongodb+srv://nathi:qwer123@cluster0.16xnlht.mongodb.net/blogs?retryWrites=true&w=majority'
const mongoose = require('mongoose');
mongoose.connect(url)
.then((result) => {
    console.log('connected');
    app.listen(port);
})
.catch((err) => {
    console.log(err);
})
app.get('/', (req, res) => {
    res.redirect('/home')
})
app.get('/home', (req, res) => {
res.redirect('/blogs')
});
app.get('/create', (req, res) => {
    res.render('create')
});
app.get('/about', (req, res) => {
    res.render('about')
});
app.get('/about-us', (req, res) => {
    res.redirect('/about')
});
/*app.get('/get', (req, res) => {
    const blog = new Blog({
        title: 'new one',
        snippet: 'about becoming hero',
        body: 'siuu',
        required: true
    });

    blog.save()
    .then((result) => {
        res.send(result)
        console.log('success');
    })
    .catch((err) => {
        console.log(err);
    });*/
    app.get('/blogs', (req, res) => {
        Blog.find().sort({ createdAt: -1 })
        .then((result) => {
           //res.send(result)
           res.render('home', { blog: result });
            console.log('connected');
            console.log('res is made');
        })
        .catch((err) => {
            console.log(err + 'is occured');
        });
        app.post('/blog', (req, res) => {
console.log(req.body);
const blog = new Blog(req.body);
blog.save()
.then((result) => {
    res.redirect('/blogs')
})
.catch((err) => {
    console.log(err);
})
        })
    });
app.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    Blog.findById(id)
    .then((result) => {
        res.render('single', { blog: result });
        console.log(result)
    })
    .catch((err) => {
        console.log(err);
    });
});
app.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
    .then((result) => {
        res.json({ redirect: '/blogs'});
        res.redirect('/blogs')
    })
    .catch((err) => {
        console.log(err);
    })
})

