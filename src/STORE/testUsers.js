const testUsers = [
    {
        id: 1, 
        user_name: 'John Smith', 
        user_email: 'johnsmith@gmail.com', 
        user_password: 'Smithjohn11', 
        user_username: 'JohnSmith1', 
        user_city: 'Los Angeles', 
        profile_img: 'https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png'
    }, 
    {
        id: 2, 
        user_name: 'Charlie French', 
        user_email: 'charliefrench@gmail.com', 
        user_password: 'Frenchcharlie2', 
        user_username: 'CharlieFrench24', 
        user_city: 'Los Angeles', 
        profile_img: 'https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png'
    }, 
    {
        id: 3, 
        user_name: 'Thelma Shaw', 
        user_email: 'thelmashaw@gmail.com', 
        user_password: 'Shawthelma3', 
        user_username: 'ThelmaShaw21', 
        user_city: 'New York', 
        profile_img: 'https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png'
    },
    {
        id: 4, 
        user_name: 'Thelma Shaw', 
        user_email: 'thelmashaw@gmail.com', 
        user_password: 'Shawthelma3', 
        user_username: 'ThelmaShaw21', 
        user_city: 'New York', 
        profile_img: 'https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png'
    },  
    {
        id: 5, 
        user_name: 'Duane Torres', 
        user_email: 'duanetorres@gmail.com', 
        user_password: 'Torresduane4', 
        user_username: 'DuaneTorres64', 
        user_city: 'Chicago', 
        profile_img: 'https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png'
    }, 
    {
        id: 6, 
        user_name: 'Duane Torres', 
        user_email: 'duanetorres@gmail.com', 
        user_password: 'Torresduane4', 
        user_username: 'DuaneTorres64', 
        user_city: 'Chicago', 
        profile_img: 'https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png'
    }, 
    {
        id: 7, 
        user_name: 'Michelle Black', 
        user_email: 'michelleblack@gmail.com', 
        user_password: 'Blackmichelle5', 
        user_username: 'MichelleBlack4', 
        user_city: 'Los Angeles', 
        profile_img: 'https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png'
    }, 
    {
        id: 8, 
        user_name: 'Ed Howard', 
        user_email: 'edhoward@gmail.com', 
        user_password: 'Howarded6', 
        user_username: 'EdHoward83', 
        user_city: 'New York', 
        profile_img: 'https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png'
    },
    {
        id: 9, 
        user_name: 'Keith Jefferson', 
        user_email: 'keithjefferson@gmail.com', 
        user_password: 'Jeffersonkeith7', 
        user_username: 'KeithJefferson23', 
        user_city: 'Chicago', 
        profile_img: 'https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png'
    },
    {
        id: 10, 
        user_name: 'Angela Mack', 
        user_email: 'angelamack@mgail.com', 
        user_password: 'Mackangela8', 
        user_username: 'AngelaMack12', 
        user_city: 'Los Angeles', 
        profile_img: 'https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png'
    },
    {
        id: 11, 
        user_name: 'Nick Holloway', 
        user_email: 'nickholloway@gmail.com', 
        user_password: 'Hollowaynick9', 
        user_username: 'NickHolloway19', 
        user_city: 'New York', 
        profile_img: 'https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png'
    }, 
    {
        id: 12, 
        user_name: 'Lana Schulz', 
        user_email: 'lanaschulz@gmail.com', 
        user_password: 'Shulzlana1', 
        user_username: 'LanaShulz70', 
        user_city: 'Chicago', 
        profile_img: 'https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png'
    }, 
    {
        id: 13, 
        user_name: 'Eric Estrada', 
        user_email: 'ericestrada@gmail.com', 
        user_password: 'Estradaeric2', 
        user_username: 'EricEstrada37', 
        user_city: 'Los Angeles', 
        profile_img: 'https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png'
    },
    {
        id: 14, 
        user_name: 'Luke Marsh', 
        user_email: 'lukemarsh@gmail.com', 
        user_password: 'Marsheric3', 
        user_username: 'LukeMarsh50', 
        user_city: 'New York', 
        profile_img: 'https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png'
    }, 
    {
        id: 15, 
        user_name: 'Christine Steele', 
        user_email: 'christinesteele@gmail.com', 
        user_password: 'Steelechristine4', 
        user_username: 'ChristineSteele84', 
        user_city: 'Chicago', 
        profile_img: 'https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png'
    },  
    {
        id: 16, 
        user_name: 'Gregory Daniels', 
        user_email: 'gregorydaniels@gmail.com', 
        user_password: 'Danielsgregory5', 
        user_username: 'GregoryDaniels96', 
        user_city: 'Los Angeles', 
        profile_img: 'https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png'
    },       
    {
        id: 17, 
        user_name: 'Gregory Daniels', 
        user_email: 'gregorydaniels@gmail.com', 
        user_password: 'Danielsgregory5', 
        user_username: 'GregoryDaniels96', 
        user_city: 'Los Angeles', 
        profile_img: 'https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png'
    },       
    {
        id: 18, 
        user_name: 'Terry Pearson', 
        user_email: 'terrypearson@gmail.com', 
        user_password: 'Pearsonterry6', 
        user_username: 'TerryPearson87', 
        user_city: 'New York', 
        profile_img: 'https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png'
    },                              
]; 

module.exports = testUsers

/* const users = [{
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

module.exports = users */