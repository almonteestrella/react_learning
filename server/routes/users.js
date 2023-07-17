import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

const users = [];

//get users
router.get('/', (req, res) => {
    res.send(users);
});

//post a user
router.post('/', (req, res) => {
    const user = req.body;

    users.push({ ...user, id: uuidv4() });
    res.send(`User with the name of ${user} added to the database`);
});

//user details
router.get('/:id', (req, res) => {
    res.send('user details');
});

export default router;
