const express = require('express');
const itemsRouter = express.Router();
const jsonParser = express.json();
const mockItems = require('../STORE/mockItems')
const ItemsService = require('./itemsService')

itemsRouter
    .route('/api/items')
    .get((req, res, next) => {
        // for search and to list listed items on individual profile

        const knexInstance = req.app.get('db')

        ItemsService.getAllItems(knexInstance)
            .then(items => {
                if(!items) {
                    return res.status(404).json({
                        error: { message: 'no items found' }
                    })
                }
                res.json({
                    items
                }) 
            })
            .catch(next)

    })
    .post(jsonParser, (req, res, next) => {
        // for listing new items

        const { item_name, category, img, daily_cost, weekly_cost, owner_username, owner_id, city, item_description, rental_start, rental_end, rented_by_id } = req.body; 

        // validation

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

        const newItem = {
            item_name, 
            category, 
            img, 
            daily_cost, 
            weekly_cost, 
            owner_username,
            owner_id, 
            city, 
            item_description, 
            rental_start, 
            rental_end, 
            rented_by_id
        }

        const knexInstance = req.app.get('db');

        ItemsService.insertItem(knexInstance, newItem)
            .then(item => {
              res
                .status(201)
                .location(`/api/items/${item.id}`)
                .json(item)
            })
            .catch(next)

    })

itemsRouter
    .route('/api/items/:id')
    .get((req, res, next) => {
        // for checkout and confirmation 
        const { id } = req.params

        const knexInstance = req.app.get('db')

        ItemsService.getById(knexInstance, id)
            .then(item => {
                if (!item) {
                    return res
                        .status(404)
                        .send('Item not found')
                };

                res.json(item)
            })
            .catch(next)

    })
    .delete((req, res, next) => {
        // for once the item is rented

        const { id } = req.params

        const knexInstance = req.app.get('db')

        ItemsService.deleteItem(knexInstance, id)
            .then(() => {
                res
                    .status(204).end()
                    // .catch(next)
            })

    })
    .patch(jsonParser, (req, res) => {
        const { id, item_name, category, img_url, daily_cost, weekly_cost, owner, owner_id, city, description, rental_start, rental_end } = req.body;

        const updatedItem = {
            id: id, 
            item_name: item_name, 
            category: category, 
            img_url: img_url, 
            daily_cost: daily_cost, 
            weekly_cost: weekly_cost, 
            owner: owner, 
            owner_id: owner_id, 
            city: city, 
            description: description, 
            rental_start: rental_start, 
            rental_end: rental_end
        }

        const indexToRemove = mockItems.findIndex(item => item.id == id); 

        if (indexToRemove === -1) {
            return res  
                .status(400)
                .send('item not found')
        }

        console.log(indexToRemove)
        // remove current version of item
        mockItems.splice(indexToRemove, 1)

        console.log(mockItems)
        // re-add it with updated info
        mockItems.push(updatedItem)

        return res
            .status(200)
            .json(updatedItem)
    })  

itemsRouter
    .route('/api/search')
    .get((req, res) => {
        const { input, category, city, id } = req.headers

        const knexInstance = req.app.get('db')
        
        ItemsService.getAllItems(knexInstance)
            .then(items => {
                
                const allResults = items.filter(item => {

                    if (!input) {
                        if ((item.category == category) && (item.city == city)) {
                            return item
                        } else {
                            return null
                        }
                    } else {
                        const lowerCaseName = item.item_name.toLowerCase(); 
                        if ((lowerCaseName.includes(input.toLowerCase())) && (item.category == category) && (item.city == city)) {
                            return item
                        } else {
                            return null
                        }
                    }
                }); 
                /*
                if (!results.length) {
                    return res
                        .status(404)
                        .send('search yielded no results')
                }*/



                const results = allResults.filter(result => {
                    
                    if (result.owner_id != id) {
                        return result
                    } else {
                        return null
                    }
                })

                if (!results.length) {
                    return res
                        .status(404)
                        .send('search yielded no results')
                }


                res.json(results)
            })
    })

itemsRouter
    .route('/api/items/:id/listeditems')
    .get((req, res) => {
        const { id } = req.params

        const knexInstance = req.app.get('db')
        
        ItemsService.getByOwnerId(knexInstance, id)
            .then(item => {
                if (!item) {
                    return res
                        .status(404)
                        .send('item not found')
                }
                res.json(item)
            })
    })
    .post(jsonParser, (req, res) => {

        const { item_name, category, img, daily_cost, weekly_cost, owner_username, owner_id, city, description, rental_start, rental_end, rented_by_id } = req.body

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
            rented_by_id: rented_by_id
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

        ItemsService.insertItemToHistory(knexInstance, newItem)
            .then(item => {
                res
                .status(201)
                .location(`/api/items/${item.rented_by_id}/rentalhistory`)
                .json(item)
            })
            .catch(next)



    })

module.exports = itemsRouter