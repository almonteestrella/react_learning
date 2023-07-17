import express from 'express';
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // To parse the incoming requests with JSON payloads

app.get('/', (req, res) => {
    res.status(200).send('home page');
});
app.get('/about', (req, res) => {
    res.status(200).send('about page');
});
app.all('*', (req, res) => {
    res.status(404).send('<h1>Resource not found!</h1>');
});

const port = 5000;

app.listen(port, () => console.log(`server running on port ${port}`));
