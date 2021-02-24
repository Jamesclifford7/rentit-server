# Rentit Server

Server for https://rentit-app.vercel.app/

## API Overview

### Items endpoints

#### GET ```/api/items```

```javascript
// res.body
[
    {
        id: Number, 
        item_name: String, 
        category: Number, 
        img: String, 
        daily_cost: Number, 
        weekly_cost: Number, 
        owner_username: String, 
        owner_id: Number, 
        city: String, 
        item_description: String, 
        rental_start: String, 
        rental_end: String, 
        rented_by_id: Number
    }
]
```

#### POST ```/api/items```

```javascript
// req.body
{
    item_name: String, 
    category: Number, 
    img: String, 
    daily_cost: Number, 
    weekly_cost: Number, 
    owner_username: String, 
    owner_id: Number, 
    city: String, 
    item_description: String, 
    rental_start: String, 
    rental_end: String, 
    rented_by_id: Number
}

// res.body
{
    id: Number,
    item_name: String, 
    category: Number, 
    img: String, 
    daily_cost: Number, 
    weekly_cost: Number, 
    owner_username: String, 
    owner_id: Number, 
    city: String, 
    item_description: String, 
    rental_start: String, 
    rental_end: String, 
    rented_by_id: Number
}
```

#### GET ```/api/items/:id```

```javascript
// res.body
{
    id: Number, 
    item_name: String, 
    category: Number, 
    img: String, 
    daily_cost: Number, 
    weekly_cost: Number, 
    owner_username: String, 
    owner_id: Number, 
    city: String, 
    item_description: String, 
    rental_start: String, 
    rental_end: String, 
    rented_by_id: Number
}
```

#### DELETE ```/api/items/:id```

```javascript
// req.params
{
    id: Number
}
```

#### GET ```/api/search```

```javascript
// req.headers
{
    input: String, 
    category: Number, 
    city: String, 
    id: Number
}

// res.body
[
    {
        id: Number, 
        item_name: String, 
        category: Number, 
        img: String, 
        daily_cost: Number, 
        weekly_cost: Number, 
        owner_username: String, 
        owner_id: Number, 
        city: String, 
        item_description: String, 
        rental_start: String, 
        rental_end: String, 
        rented_by_id: Number
    }
]
```

#### GET ```/api/items/:id/listeditems```

```javascript
// req.params
{
    id: Number
}

// res.body
[
    {
        id: Number, 
        item_name: String, 
        category: Number, 
        img: String, 
        daily_cost: Number, 
        weekly_cost: Number, 
        owner_username: String, 
        owner_id: Number, 
        city: String, 
        item_description: String, 
        rental_start: String, 
        rental_end: String, 
        rented_by_id: Number
    }
]
```

#### POST ```/api/items/:id/listeditems```

```javascript
// req.body
{
    item_name: String, 
    category: Number, 
    img: String, 
    daily_cost: Number, 
    weekly_cost: Number, 
    owner_username: String, 
    owner_id: Number, 
    city: String, 
    item_description: String, 
    rental_start: String, 
    rental_end: String, 
    rented_by_id: Number
}

// res.body
{
    id: Number,
    item_name: String, 
    category: Number, 
    img: String, 
    daily_cost: Number, 
    weekly_cost: Number, 
    owner_username: String, 
    owner_id: Number, 
    city: String, 
    item_description: String, 
    rental_start: String, 
    rental_end: String, 
    rented_by_id: Number
}
```

### Users Endpoints

#### GET ```/api/users```

```javascript
// res.body
[
    {
        id: Number, 
        user_name: String, 
        user_email: String, 
        user_password: String, 
        user_username: String, 
        user_city: String, 
        profile_img: String
    }
]
```

#### POST ```/api/users```

```javascript
// req.body
{
    user_name: String, 
    user_email: String, 
    user_username: String, 
    user_password: String, 
    user_city: String, 
    profile_img: String, 
}

// res.body
{
    id: Number, 
    user_name: String, 
    user_email: String, 
    user_password: String, 
    user_username: String, 
    user_city: String, 
    profile_img: String
}
```

#### GET ```/api/users/:id```

```javascript
// req.params
{
    id: Number
}

// res.body
{
    id: Number, 
    user_name: String, 
    user_email: String, 
    user_password: String, 
    user_username: String, 
    user_city: String, 
    profile_img: String
}
```

#### PATCH ```/api/users/:id```

```javascript
// req.body
{
    id: Number, 
    user_name: String, 
    user_email: String, 
    user_username: String, 
    user_city: String, 
    profile_img: String
}

//res.body
{
    id: Number, 
    user_name: String, 
    user_email: String, 
    user_username: String, 
    user_city: String, 
    profile_img: String
}
```

#### GET ```/api/users/:id/rentalhistory/```

```javascript
// req.params
{
    id: Number
}

// res.body
[
    {
        item_name: String, 
        category: Number, 
        img: String, 
        daily_cost: Number, 
        weekly_cost: Number, 
        owner_username: String, 
        owner_id: Number, 
        city: String, 
        item_description: String, 
        rental_start: String, 
        rental_end: String, 
        rented_by_id: Number
    }
]
```

#### POST ```/api/users/:id/rentalhistory/```

```javascript
// req.body
{
    item_name: String, 
    category: Number, 
    img: String, 
    daily_cost: Number, 
    weekly_cost: Number, 
    owner_username: String, 
    owner_id: Number, 
    city: String, 
    item_description: String, 
    rental_start: String, 
    rental_end: String, 
    rented_by_id: Number, 
    total_cost: Number
}

//res.body
{
    item_name: String, 
    category: Number, 
    img: String, 
    daily_cost: Number, 
    weekly_cost: Number, 
    owner_username: String, 
    owner_id: Number, 
    city: String, 
    item_description: String, 
    rental_start: String, 
    rental_end: String, 
    rented_by_id: Number, 
    total_cost: Number
}
```

#### GET ```/api/login```

```javascript
// req.headers
{
    input: String, 
    password: String
}

// res.body
{
    id: Number, 
    user_name: String, 
    user_email: String, 
    user_password: String, 
    user_username: String, 
    user_city: String, 
    profile_img: String
}
```
















