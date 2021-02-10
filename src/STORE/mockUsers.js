const users = [{
    id: 1,
    name: "John Smith", 
    email: "johnsmith@gmail.com",
    username: "JohnSmith1", 
    password: "Smithjohn11",
    city: "Los Angeles", 
    profile_img: "",
    rental_history: [
        {
            id: 31,
            item_name: "Saw", 
            category: 2, 
            img_url: 'https://www.stanleytools.com/NA/product/images/3000x3000x96/15-334/15-334_1.jpg', 
            daily_cost: 10, 
            weekly_cost: 40,
            owner: 'EricEstrada37', 
            owner_id: 11, 
            city: 'Los Angeles',
            description: 'Stanley 15 inch handsaw with wooden handle.',
            rental_start: '2020-04-10', 
            rental_end: '2020-04-15', 
            rented_by: "" // ?
        }, 
        {
            id: 32,
            item_name: "30lb Dumbbells", 
            category: 3, 
            img_url: "https://ak1.ostkcdn.com/images/products/6075645/CAP-Barbell-30-lb-Pair-of-Hex-Dumbbells-Set-of-2-68983a95-70b4-42ec-8504-ec8629f15a7a.jpg",
            daily_cost: 8, 
            weekly_cost: 35,
            owner: 'CharlieFrench24', 
            owner_id: 2, 
            city: 'Los Angeles',
            description: 'Two 30 pound dumbbells.',
            rental_start: '2020-02-06', 
            rental_end: '2020-01-09'
        }, 
        {
            id: 33,
            item_name: "Fixed Gear Bike", 
            category: 4, 
            img_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Moyer_Cycles_I.jpg', 
            daily_cost: 30, 
            weekly_cost: 150, 
            owner: 'MichelleBlack4', 
            owner_id: 5, 
            city: 'Los Angeles',
            description: 'Blue fixed gear bike.',
            rental_start: '2020-01-01', 
            rental_end: '2020-01-05'
        }
    ], 
    listed_items: [
        {
            id: 34,
            item_name: "Kayak", 
            catgory: 4, 
            img_url: "https://oceankayak.johnsonoutdoors.com/sites/johnsonoutdoors-store/files/assets/images/11/1/1103997_primary/1103997_primary.jpg", 
            daily_cost: 50, 
            weekly_cost: 250, 
            owner: 'JohnSmith1', 
            owner_id: 1, 
            city: 'Los Angeles',
            description: 'One two-person kayak. Comes with paddle.', 
            rental_start: '', 
            rental_end: ''
        }, 
        {
            id: 35,
            item_name: "Nikon DSLR Camera", 
            catgory: 5, 
            img_url: "https://www.bhphotovideo.com/images/images2500x2500/nikon_d750_dslr_camera_with_1082604.jpg", 
            daily_cost: 40, 
            weekly_cost: 120, 
            owner: 'JohnSmith1', 
            owner_id: 1,
            city: 'Los Angeles', 
            description: 'One Nikon DSLR Camera with strap and bag.', 
            rental_start: '', 
            rental_end: ''
        }
    ]
}]

module.exports = users