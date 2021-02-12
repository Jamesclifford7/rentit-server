const UsersService = {
    getAllUsers(knex) {
        return knex.select('*').from('users')
    }, 
    insertUser(knex, newUser) {
        return knex
            .insert(newUser)
                .into('users')
                .returning('*')
                .then(rows => {
                    return rows[0]
                })
    }, 
    getById(knex, id) {
        return knex.select('*').from('users').where('id', id).first()
    }, 
    updateUser(knex, id, newUserFields) {
        return knex('users')
            .where({ id })
            .update(newUserFields)
            .returning('*')
            .where('id', id)
    }, 
    getRentalHistory(knex, id) {
        return knex('rental_history').join('users', 'rental_history.rented_by_id', '=', 'users.id').select('rental_history.item_name', 'rental_history.category', 'rental_history.img', 'rental_history.daily_cost', 'rental_history.weekly_cost', 'rental_history.owner_username', 'rental_history.owner_id', 'rental_history.city', 'rental_history.item_description', 'rental_history.rental_start', 'rental_history.rental_end', 'rental_history.rented_by_id').where('users.id', id)
    }, 
    getByUsernameAndPassword(knex, username, password) {
        return knex.select('*').from('users').where('user_username', username).andWhere('user_password', password).first()
    }, 
    getByEmailAndPassword(knex, email, password) {
        return knex.select('*').from('users').where('user_email', email).andWhere('user_password', password).first()
    }, 
    getByEmail(knex, email) {
        return knex.select('*').from('users').where('user_email', email).first()
    },
    insertItemToHistory(knex, newItem) {
        return knex
            .insert(newItem)
            .into('rental_history')
            .returning('*')
            .then(rows => {
                return rows[0]
            })
    }
}

module.exports = UsersService