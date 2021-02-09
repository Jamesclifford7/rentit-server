const express = require('express');
const usersRouter = express.Router();
const jsonParser = express.json();
const mockUsers = require('../STORE/mockUsers')

usersRouter
    .route('/api/users')
    .get((req, res) => {
        res.json(mockUsers)
    })
    .post(jsonParser, (req, res) => {
        // singup

        const { id, name, email, username, password, city, profile_img, rental_history, listed_items } = req.body

        if (!email) {
            res
                .status(400)
                .send('user email is required')
        }

        if (!password) {
            res
                .status(400)
                .send('user password is required')
        }

        const newUser = {
            id, 
            name: "", 
            email, 
            username: "", 
            password, 
            city: "", 
            profile_img: "", 
            rental_history: [], 
            listed_items: []
        }

        mockUsers.push(newUser)

        res
            .status(201)
            .json(newUser)
    })

usersRouter
    .route('/api/users/:id')
    .get((req, res) => {
        const { id } = req.params

        const user = mockUsers.find(user => user.id == id); 

        if (!user) {
            return res
                .status(400)
                .send('user not found')
        }

        res
            .status(200)
            .json(user)

    })
    .delete((req, res) => {
        const { id } = req.params

        const userIndex = mockUsers.findIndex(user => user.id == id)

        mockUsers.splice(userIndex, 1)

        res
            .status(201)
            .end()
    })
    .patch(jsonParser, (req, res) => {
        const { id, name, email, username, password, city, profile_img, rental_history, listed_items } = req.body

        const updatedUser = {
            id: id, 
            name: name, 
            email: email, 
            username: username, 
            password: password, 
            city: city, 
            profile_img: profile_img, 
            rental_history: rental_history, 
            listed_items: listed_items
        }

        const userIndex = mockUsers.findIndex(user => user.id == id)

        mockUsers.splice(userIndex, 1); 

        mockUsers.push(updatedUser); 

        res
            .status(200)
            .json(updatedUser)
    })

module.exports = usersRouter
