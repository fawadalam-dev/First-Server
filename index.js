import express from 'express';

const app = express();
app.get('/home', (req, res) => {
    res.send('Hello World');
});
app.get('/about', (req, res) => {
    res.send('This is about page');
});
app.get('/weather', (req, res) => {
    res.send('Yes today is 30 degree');
});
app.listen(8000, () => {
    console.log('Server is Running');
});