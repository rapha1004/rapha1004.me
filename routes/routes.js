const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/*', (req, res) => {
    res.render('404');
});

module.exports = app;