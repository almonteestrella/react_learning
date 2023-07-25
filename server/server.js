import express from 'express';
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // To parse the incoming requests with JSON payloads

import usersRoutes from './routes/users.js';
app.use('/users', usersRoutes);

const port = 5000;

app.listen(port, () => console.log(`server running on port ${port}`));
