const express = require('express');
const usersRouter = express.Router();
const jsonParser = express.json();
const mockUsers = require('../STORE/mockUsers'); 
const UsersService = require('./usersService'); 

usersRouter
    .route('/api/users')
    .get((req, res, next) => {
        const knexInstance = req.app.get('db')

        UsersService.getAllUsers(knexInstance)
            .then(users => {
                if (!users) {
                    res
                        .status(404)
                        .send('no users found')
                }
                res.json(users)
            })
            .catch(next)

        /* before knex: 
        res.json(mockUsers) */
    })
    .post(jsonParser, (req, res, next) => {
        // signup

        const { name, user_email, username, user_password, city, profile_img, rental_history, listed_items } = req.body

        if (!user_email) {
            res
                .status(400)
                .send('user email is required')
        }

        if (!user_password) {
            res
                .status(400)
                .send('user password is required')
        }

        const newUser = {
            user_name: "", 
            user_email: user_email, 
            user_username: "", 
            user_password: user_password, 
            user_city: "", 
            profile_img: "", 
        }

        // had: rental_history and listed_items

        const knexInstance = req.app.get('db')

        UsersService.insertUser(knexInstance, newUser)
            .then(user => {
                res
                    .status(201)
                    .location(`/api/users/${user.id}`)
                    .json(user)
            })
            .catch(next)

        /* before knex: 
        mockUsers.push(newUser)

        res
            .status(201)
            .json(newUser) */
    })

usersRouter
    .route('/api/users/:id')
    .get((req, res, next) => {
        // for profile

        const { id } = req.params

        const knexInstance = req.app.get('db')

        UsersService.getById(knexInstance, id)
            .then(user => {
                if (!user) {
                    return res
                        .status(404)
                        .send('item not found')
                } 

                res.json(user)

            })
            .catch(next)

        /* before knex: 
        const user = mockUsers.find(user => user.id == id); 

        if (!user) {
            return res
                .status(400)
                .send('user not found')
        }

        res
            .status(200)
            .json(user) */

    })
    .delete((req, res) => {
        const { id } = req.params

        const userIndex = mockUsers.findIndex(user => user.id == id)

        mockUsers.splice(userIndex, 1)

        res
            .status(201)
            .end()
    })
    .patch(jsonParser, (req, res, next) => {
        // for create and/or edit profile

        const { id, user_name, user_email, user_username, user_password, user_city, profile_img } = req.body

        const updatedUser = {
            id: id, 
            user_name: user_name, 
            user_email: user_email, 
            user_username: user_username, 
            user_password: user_password, 
            user_city: user_city, 
            profile_img: profile_img, 
        }

        const knexInstance = req.app.get('db')

        UsersService.updateUser(knexInstance, id, updatedUser)
            .then(user => {
                console.log(user)
                if (!user) {
                    return res
                        .status(404)
                        .send('user not found')
                }
                res.json(user)
            })
            .catch(next)

        /* before knex: 
        const userIndex = mockUsers.findIndex(user => user.id == id)

        mockUsers.splice(userIndex, 1); 

        mockUsers.push(updatedUser); 

        res
            .status(200)
            .json(updatedUser) */
    })

usersRouter
    .route('/api/users/:id/rentalhistory/') // GET and POST for profile
    .get((req, res) => {
        // for profile
        const { id } = req.params

        const knexInstance = req.app.get('db')

        UsersService.getRentalHistory(knexInstance, id)
            .then(items => {
                if (!items) {
                    res
                        .status(404)
                        .send('no items found')
                }
                res.json(items)
            })

        /* before knex: 
        const user = mockUsers.find(user => user.id == id); 

        console.log(user)

        const userHistory = user.rental_history; 

        res
            .status(200)
            .json(userHistory) */
    })

// login endpoint

usersRouter
    .route('/api/login')
    .get((req, res) => {
        const { input, password } = req.headers; 

        const knexInstance = req.app.get('db')

        UsersService.getByUsernameAndPassword(knexInstance, input, password)
            .then(user => {
                if (!user) {
                    UsersService.getByEmailAndPassword(knexInstance, input, password)
                        .then(user => {
                            if (!user) {
                                return res
                                .status(404)
                                .send('user not found')
                            } else {
                                return res.json(user)
                            }
                        })
                } else {
                    return res.json(user)
                }

                // res.json(user)
            })
    })

module.exports = usersRouter
