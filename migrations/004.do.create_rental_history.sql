DROP TABLE IF EXISTS rental_history; 

CREATE TABLE rental_history (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY, 
    item_name TEXT NOT NULL, 
    category INTEGER REFERENCES categories(id) ON DELETE CASCADE NOT NULL, 
    img TEXT, 
    daily_cost INTEGER NOT NULL, 
    weekly_cost INTEGER NOT NULL, 
    owner_username TEXT NOT NULL, 
    owner_id INTEGER REFERENCES users(id) ON DELETE CASCADE NOT NULL,
    city TEXT NOT NULL, 
    item_description TEXT, 
    rental_start TEXT NOT NULL, 
    rental_end TEXT NOT NULL, 
    rented_by_id INTEGER references users(id) ON DELETE CASCADE NOT NULL, 
    total_cost INTEGER NOT NULL
); 

/* add total cost */

/* id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY */