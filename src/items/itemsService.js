const ItemsService = {
    getAllItems(knex) {
        return knex.select('*').from('items')
    }, 
    insertItem(knex, newItem) {
        return knex
            .insert(newItem)
            .into('items')
            .returning('*')
            .then(rows => {
                return rows[0]
            })
    }, 
    getById(knex, id) {
        return knex('items').join('categories', 'items.category', '=', 'categories.id').select('items.id', 'items.item_name', 'categories.category', 'items.img', 'items.daily_cost', 'items.weekly_cost', 'items.owner_username', 'items.owner_id', 'items.city', 'items.item_description', 'items.rental_start', 'items.rental_end', 'items.rented_by_id').where('items.id', id).first()
    }, 
    deleteItem(knex, id) {
        return knex('items').where({ id }).delete()
    }
}

module.exports = ItemsService

/*

getAllItems(knex) {
    return knex('items').join('categories', 'items.category', '=', 'categories.id').select('items.id', 'items.item_name', 'categories.category', 'items.img', 'items.daily_cost', 'items.weekly_cost', 'items.owner_username', 'items.owner_id', 'items.city', 'items.item_description', 'items.rental_start', 'items.rental_end', 'items.rented_by_id')
}, 

*/