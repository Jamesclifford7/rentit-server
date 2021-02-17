const express = require('express');
const usersRouter = express.Router();
const jsonParser = express.json();
const UsersService = require('./usersService'); 

usersRouter
    .route('/api/users')
    .get((req, res, next) => { 
        const knexInstance = req.app.get('db')
        console.log('GET /api/users/')
        console.dir(knexInstance)
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

        if (user_password.length < 6) {
            return res
                .status(400)
                .send('Password must be at least 6 characters long')       
        }; 

        if (!user_password.match(/[A-Z]/)) {
            return res
                .status(400)
                .send('Password must include one uppercase letter')
        }; 

        if (!user_password.match(/\d+/g)) {
            return res  
                .status(400)
                .send('Password must include one number' )
        }; 

        const newUser = {
            user_name: "", 
            user_email: user_email, 
            user_username: "", 
            user_password: user_password, 
            user_city: "", 
            profile_img: "", 
        }

        const knexInstance = req.app.get('db')

        // need to check and make sure that user does not alredy exist

        UsersService.getByEmail(knexInstance, user_email)
            .then(user => {
                if (!user) {
                    return newUser
                } else if (newUser.user_email === user.user_email) {
                    return res.status(400).send('An account with this email already exists')
                }
            })
            .then(user => {
                UsersService.insertUser(knexInstance, newUser)
                    .then(user => {
                        res
                            .status(201)
                            // .location(`/api/users/${user.id}`)
                            .json(user)
                    })
                    .catch(next)
            })

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

    })
    /*.delete((req, res) => {
        const { id } = req.params

        const userIndex = mockUsers.findIndex(user => user.id == id)

        mockUsers.splice(userIndex, 1)

        res
            .status(201)
            .end()
    }) */
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

    })

usersRouter
    .route('/api/users/:id/rentalhistory/') 
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
    })
    .post(jsonParser, (req, res, next) => { 

        const { item_name, category, img, daily_cost, weekly_cost, owner_username, owner_id, city, description, rental_start, rental_end, rented_by_id, total_cost } = req.body

        const newItem = {
            item_name: item_name, 
            category: category, 
            img: img, 
            daily_cost: daily_cost, 
            weekly_cost: weekly_cost, 
            owner_username: owner_username, 
            owner_id: owner_id, 
            city: city, 
            item_description: description, 
            rental_start: rental_start, 
            rental_end: rental_end, 
            rented_by_id: rented_by_id, 
            total_cost: total_cost
        }

        if (!item_name) {
            return res
                .status(400)
                .send('item name is required')
        }

        if (!category) {
            return res
                .status(400)
                .send('item category is required')
        }

        if (!daily_cost) {
            return res
                .status(400)
                .send('item daily cost is required')
        }

        if (!weekly_cost) {
            return res
                .status(400)
                .send('item weekly cost is required')
        }

        if (!owner_username) {
            return res
                .status(400)
                .send('item owner is required')
        }

        if (!owner_id) {
            return res
                .status(400)
                .send('item owner id is required')
        }

        if (!city) {
            return res
                .status(400)
                .send('item city is required')
        }

        if (!rental_start) {
            return res
                .status(400)
                .send('rental start date is required')
        }

        if (!rental_end) {
            return res
                .status(400)
                .send('rental end date is required')
        }

        if (!rented_by_id) {
            return res
                .status(400)
                .send('id of renting user is required')
        }

        const knexInstance = req.app.get('db')

        UsersService.insertItemToHistory(knexInstance, newItem)
            .then(item => {
                console.log(item)
                res
                .status(201)
                // .location(`/api/users/${item.rented_by_id}/rentalhistory`)
                .json(item)
            })
            .catch(next); 
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
