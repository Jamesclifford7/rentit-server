const { expect } = require('chai'); 
const app = require('../src/app'); 
const testUsers = require('../src/STORE/testUsers'); 
const users = require('../src/STORE/users'); 
const testRentedItems = require('../src/STORE/testRentedItems'); 
const rentedItems = require('../src/STORE/rentedItems'); 
require('dotenv').config(); 
const UsersService = require('../src/users/usersService'); 
const knex = require('knex'); 

let db; 

before(() => {
    db = knex({
        client: 'pg', 
        connection: process.env.TEST_DB_URL
    })
    app.set('db', db)
}); 


before(() => db('users').truncate()); 

before(() => db('rental_history').truncate()); 

before(() => {
    return db
    .into('users')
    .insert(users)
}); 

after(() => db('users').truncate()); 

after(() => db('rental_history').truncate()); 

after(() => db.destroy()); 

describe('GET /api/users', () => {
    it('should return a list of all users', () => {
        return UsersService.getAllUsers(db)
            .then(actual => {
                expect(actual).to.eql(testUsers)
            })
    })
}); 

describe('POST /api/users', () => {
    it('should add a new user to the database', () => {
        const newUser = {
            id: 19, 
            user_name: 'Bob Dylan', 
            user_email: 'bobdylan@gmail.com', 
            user_password: 'Dylanbob6', 
            user_username: 'DylanBob87', 
            user_city: 'New York', 
            profile_img: 'https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png'
        }; 

        UsersService.insertUser(db, newUser)
            .then(actual => {
                expect(actual).to.eql({
                    id: newUser.id, 
                    user_name: newUser.user_name, 
                    user_email: newUser.user_email, 
                    user_password: newUser.user_password, 
                    user_username: newUser.user_username, 
                    user_city: newUser.user_city, 
                    profile_img: newUser.profile_img
                })
            })
            .then(() => {
                UsersService.deleteUser(db, 21)
            })
    })
}); 

describe('PATCH /api/users', () => {
    it('should updated a user in the database', () => {
        const idToUpdate = 5; 

        const newUserData = {
            id: 5, 
            user_name: 'Duane Torres', 
            user_email: 'duanetorres@yahoo.com', 
            user_password: 'Torresduane40', 
            user_username: 'DuaneTorres640', 
            user_city: 'New York', 
            profile_img: 'https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png'
        }; 

        UsersService.updateUser(db, idToUpdate, newUserData)
            .then(() => UsersService.getById(db, idToUpdate))
            .then(user => {
                expect(user).to.eql({
                    id: idToUpdate, 
                    ...newUserData, 
                })
            })

    })
}); 

describe('GET /api/users/:id/rentalhistory/', () => {
    it('should return the specific user by id', () => {
        const thirdUser = testUsers[2]; 
        UsersService.getById(db, 3)
            .then(user => {
                expect(user).to.eql(thirdUser)
            })
    })
}); 

describe('POST /api/users/:id/rentalhistory/', () => {
    it('should add a new user to the database', () => {

        const newRentedItem = {
            id: 1, 
            item_name: 'Green Fixed Gear Bike', 
            category: 4, 
            img: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Moyer_Cycles_I.jpg', 
            daily_cost: 30, 
            weekly_cost: 150, 
            owner_username: 'MichelleBlack4', 
            owner_id: 5, 
            city: 'Los Angeles', 
            item_description: 'One green fixed gear bike.', 
            rental_start: '2020-05-19', 
            rental_end: '2020-05-23', 
            rented_by_id: 1, 
            total_cost: 120
        }; 

        UsersService.insertItemToHistory(db, newRentedItem)
            .then(item => {
                expect(item).to.eql({
                    id: newRentedItem.id, 
                    item_name: newRentedItem.item_name, 
                    category: newRentedItem.category, 
                    img: newRentedItem.img, 
                    daily_cost: newRentedItem.daily_cost, 
                    weekly_cost: newRentedItem.weekly_cost, 
                    owner_username: newRentedItem.owner_username, 
                    owner_id: newRentedItem.owner_id, 
                    city: newRentedItem.city, 
                    item_description: newRentedItem.item_description, 
                    rental_start: newRentedItem.rental_start, 
                    rental_end: newRentedItem.rental_end, 
                    rented_by_id: newRentedItem.rented_by_id, 
                    total_cost: newRentedItem.total_cost
                })
            })
            .then(() => {
                UsersService.deleteItem(db, 5)
            })

    })
}); 

describe('GET /api/login', () => {
    it('should return the user by username/email and password', () => {
        const firstUser = testUsers[0]; 

        UsersService.getByEmailAndPassword(db, firstUser.user_email, firstUser.user_password)
            .then(user => {
                expect(user).to.eql(firstUser)
            })
            .then(() => {
                UsersService.getByUsernameAndPassword(db, firstUser.user_username, firstUser.user_password)
                .then(user => {
                    expect(user).to.eql(firstUser)
                })
            })
    })
}); 
