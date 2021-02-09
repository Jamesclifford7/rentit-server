const express = require('express');
const itemsRouter = express.Router();
const jsonParser = express.json();
const mockItems = require('../STORE/mockItems')

itemsRouter
    .route('/api/items')
    .get((req, res) => {
        // for search

        res.json(mockItems)
    })
    .post(jsonParser, (req, res) => {
        // for listing new items

        const { id, item_name, category, img_url, daily_cost, weekly_cost, owner, owner_id, city, description, rental_start, rental_end } = req.body; 

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

        if (!owner) {
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
            id,
            item_name, 
            category, 
            img_url, 
            daily_cost, 
            weekly_cost, 
            owner,
            owner_id, 
            city, 
            description, 
            rental_start, 
            rental_end
        }

        mockItems.push(newItem)

        console.log(mockItems)
        res
            .status(201)
            .json(newItem)
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

        const indexToRemove = mockItems.find(item => item.id == id)

        if (indexToRemove === -1) {
            return res  
                .status(400)
                .send('item not found')
        }

        // remove current version of item
        mockItems.splice(indexToRemove, 1)

        // re-add it with updated info
        mockItems.push(updatedItem)

        return res
            .status(200)
            .json(updatedItem)
    })  

itemsRouter
    .route('/api/items/:id')
    .get((req, res) => {
        const { id } = req.params

        const item = mockItems.find(item => item.id == id)

        if (!item) {
            return res
                .status(400)
                .send('item not found')
        }

        res
            .status(200)
            .json(item)
    })
    .delete((req, res) => {
        const { id } = req.params

        const indexToRemove = mockItems.findIndex(item => item.id == id)

        if (indexToRemove === -1) {
            return res
                .status(400)
                .send('item not found')
        }

        mockItems.splice(indexToRemove, 1); 

        res
            .status(204)
            .end()


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

        // console.log(mockItems)
        return res
            .status(200)
            .json(updatedItem)
    })  


module.exports = itemsRouter