import { v4 as uuidv4 } from 'uuid';

const users = [];

export const createUser = (req, res) => {
    const user = req.body;

    users.push({ ...user, id: uuidv4() });
    res.send(`User added to the database`);
};

export const getUser = (req, res) => {
    res.send(users);
};

export const getUserDetails = (req, res) => {
    const { id } = req.params;

    const foundUser = users?.find((user) => user.id === id);
    console.log(foundUser);
    res.send(foundUser);
};

export const deleteUser = (req, res) => {
    const { id } = req.params;

    const newUsersList = users.filter((user) => user.id !== id);
    console.log(newUsersList);
    res.send(`User with the the id: ${id} has been deleted from the db`);
};

export const updateUser = (req, res) => {
    const { id } = req.params;
    const user = users.find((user) => user.id === id);
    const { firstName, lastName, age } = req.body;
    if (firstName) user.firstName = firstName;

    if (lastName) user.lastName = lastName;

    if (age) user.age = age;

    res.send(`User with the the id: ${id} has been updated from the db`);
};
