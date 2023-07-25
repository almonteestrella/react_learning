import express from 'express';
import {
    createUser,
    getUser,
    getUserDetails,
    deleteUser,
    updateUser,
} from '../controllers/users.js';

const router = express.Router();

//get users
router.get('/', getUser);

//post a user
router.post('/', createUser);

//user details
router.get('/:id', getUserDetails);

//delete user
router.delete('/:id', deleteUser);

//update a user
router.patch('/:id', updateUser);

export default router;
