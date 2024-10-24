const express = require('express');
const path = require('path');
const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/*', (req, res) => {
    res.render('404');
});

const PORT = process.env.PORT || 2432;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
