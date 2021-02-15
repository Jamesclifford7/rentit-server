const { expect } = require('chai'); 
const app = require('../src/app'); 
require('dotenv').config(); 
const knex = require('knex'); 
const testItems = require('../src/STORE/testItems'); 
const items = require('../src/STORE/items'); 
const ItemsService = require('../src/items/itemsService');

let db; 

before(() => {
    db = knex({
        client: 'pg', 
        connection: process.env.TEST_DB_URL
    })
    app.set('db', db)
}); 

before(() => db('items').truncate()); 

before(() => {
    return db
    .into('items')
    .insert(items)
}); 

after(() => db('items').truncate()); 

after(() => db.destroy()); 

describe('POST /api/items', () => {
    it('should add a new item to the database', () => {
        const newItem = {
            id: 32,
            item_name: "6 foot Painting Easel", 
            category: 5, 
            img: "https://sc04.alicdn.com/kf/H7852824ff18e4b7988931042ce99fb87W.jpg", 
            daily_cost: 12, 
            weekly_cost: 60, 
            owner_username: 'ThelmaShaw21', 
            owner_id: 3,
            city: 'New York', 
            item_description: 'Adjustable wooden painting easel; comes with paintbrushes', 
            rental_start: '', 
            rental_end: '', 
            rented_by_id: null
        }

        ItemsService.insertItem(db, newItem)
            .then(item => {
                expect(item).to.eql({
                    id: newItem.id, 
                    item_name: newItem.item_name, 
                    category: newItem.category, 
                    img: newItem.img, 
                    daily_cost: newItem.daily_cost, 
                    weekly_cost: newItem.weekly_cost, 
                    owner_username: newItem.owner_username, 
                    owner_id: newItem.owner_id, 
                    city: newItem.city, 
                    item_description: newItem.item_description, 
                    rental_start: newItem.rental_start, 
                    rental_end: newItem.rental_end, 
                    rented_by_id: newItem.rented_by_id
                })
            })
            .then(() => {
                return ItemsService.deleteItem(db, newItem.id)
            })
    })
}); 

describe('DELETE /api/items/:id', () => {
    it('should delete the item from the database', () => {

        const itemId = 3; 

        return ItemsService.deleteItem(db, 3)
            .then(() => ItemsService.getAllItems(db))
            .then(allItems => {
                const expected = testItems.filter(item => item.id !== itemId); 
                expect(allItems).to.eql(expected)
            })
    })
}); 

describe('GET /api/search', () => {
    it('should return items based on input, category, and city', () => {

        // { input, category, city, id }

        const item = testItems[0]

        const search = {
            input: 'Paddle', 
            category: 4, 
            city: 'Los Angeles'
        }

        ItemsService.getAllItems(db)
            .then(allItems => {
                const result = allItems.find(item => (item.category === search.category) && (item.city === search.city) && (item.item_name.includes(search.input)))

                expect(result).to.eql(item)
            })
    })
}); 

describe('GET /api/items/:id/listeditems', () => {
    it('should return the listed items by owner id', () => {
        const ownerId = 2; 

        const listedItems = testItems.filter(item => item.owner_id === ownerId); 

        ItemsService.getByOwnerId(db, ownerId)
            .then(items => {
                console.log(items)
                expect(items).to.eql(listedItems)
            })
    })
}); 




