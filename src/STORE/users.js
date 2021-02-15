const users = [
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

module.exports = users; 