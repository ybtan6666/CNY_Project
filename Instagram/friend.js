export let all_friends = [{
    id: 'Daki_Demon_11',
    name: 'DakiDemon',
    profile_pic: 'Images/Daki_Demon_profile.jpg',
},{
    id: 'Daki_19',
    name: 'Daki',
    profile_pic: 'Images/Daki_profile.jpg',
},{
    
    id: 'Main_1999',
    name: 'MainCharacther',
    profile_pic: 'Images/Main_characther_profile.jpg',
},{
    
    id: 'Mitsuri_1888',
    name: 'Mitsuri',
    profile_pic: "Images/Mitsuri_profile.jpg",
},{
    id: 'Nezuko_9090',
    name: 'Nezuko',
    profile_pic: "Images/Nezuko_profile.jpg",
},{
    id: 'Shinobu_29',
    name: 'Shinobu',
    profile_pic: "Images/Shinobu_Kocho_profile.jpg",
},{
    
    id: 'Tanjiru_1234',
    name: 'Tanjiru',
    profile_pic: "Images/Tanjiru_profile.jpg",
},{
    
    id: 'Yoriichi_2980',
    name: 'Yoriichi',
    profile_pic: "Images/Yoriichi_profile.jpg",
},{
    id: 'Daki_Demon_11',
    name: 'DakiDemon',
    profile_pic: 'Images/Daki_Demon_profile.jpg',
},{
    id: 'Daki_19',
    name: 'Daki',
    profile_pic: 'Images/Daki_profile.jpg',
},{
    
    id: 'Main_1999',
    name: 'MainCharacther',
    profile_pic: 'Images/Main_characther_profile.jpg',
},{
    
    id: 'Mitsuri_1888',
    name: 'Mitsuri',
    profile_pic: "Images/Mitsuri_profile.jpg",
},{
    id: 'Nezuko_9090',
    name: 'Nezuko',
    profile_pic: "Images/Nezuko_profile.jpg",
},{
    id: 'Shinobu_29',
    name: 'Shinobu',
    profile_pic: "Images/Shinobu_Kocho_profile.jpg",
},{
    
    id: 'Tanjiru_1234',
    name: 'Tanjiru',
    profile_pic: "Images/Tanjiru_profile.jpg",
},{
    
    id: 'Yoriichi_2980',
    name: 'Yoriichi',
    profile_pic: "Images/Yoriichi_profile.jpg",
},{
    id: 'yuna.itzy.22',
    name: 'Yuna',
    profile_pic: 'Images/Yuna.jpg',
},{
    id: 'wonhee.illit.88',
    name: 'Wonhee',
    profile_pic: "Images/Wonhee.jpg",
},{
    id: 'jennie.bp.99',
    name: 'Jennie',
    profile_pic: "Images/Jennie.jpg",
},{
    id: 'hanni.nj.11',
    name: 'Hanni',
    profile_pic: "Images/Hanni.jpg",
},{
    id: 'kazuha,lessfim.12',
    name: 'Kazuha',
    profile_pic: "Images/Kazuha.jpg",
}]

export let following = JSON.parse(localStorage.getItem('following')) || [{
    id: 'Daki_Demon_11',
    name: 'DakiDemon',
    profile_pic: 'Images/Daki_Demon_profile.jpg',
},{
    id: 'Daki_19',
    name: 'Daki',
    profile_pic: 'Images/Daki_profile.jpg',
},{
    
    id: 'Main_1999',
    name: 'MainCharacther',
    profile_pic: 'Images/Main_characther_profile.jpg',
},{
    
    id: 'Mitsuri_1888',
    name: 'Mitsuri',
    profile_pic: "Images/Mitsuri_profile.jpg",
},{
    id: 'Nezuko_9090',
    name: 'Nezuko',
    profile_pic: "Images/Nezuko_profile.jpg",
},{
    id: 'Shinobu_29',
    name: 'Shinobu',
    profile_pic: "Images/Shinobu_Kocho_profile.jpg",
},{
    
    id: 'Tanjiru_1234',
    name: 'Tanjiru',
    profile_pic: "Images/Tanjiru_profile.jpg",
},{
    
    id: 'Yoriichi_2980',
    name: 'Yoriichi',
    profile_pic: "Images/Yoriichi_profile.jpg",
}]

export let unfollow = JSON.parse(localStorage.getItem('unfollow')) || [{
    id: 'yuna.itzy.22',
    name: 'Yuna',
    profile_pic: 'Images/Yuna.jpg',
},{
    id: 'wonhee.illit.88',
    name: 'Wonhee',
    profile_pic: "Images/Wonhee.jpg",
},{
    id: 'jennie.bp.99',
    name: 'Jennie',
    profile_pic: "Images/Jennie.jpg",
},{
    id: 'hanni.nj.11',
    name: 'Hanni',
    profile_pic: "Images/Hanni.jpg",
},{
    id: 'kazuha,lessfim.12',
    name: 'Kazuha',
    profile_pic: "Images/Kazuha.jpg",
}]

export let search = JSON.parse(localStorage.getItem('search')) || [{
    id: 'yuna.itzy.22',
    name: 'Yuna',
    profile_pic: 'Images/Yuna.jpg',
},{
    id: 'wonhee.illit.88',
    name: 'Wonhee',
    profile_pic: "Images/Wonhee.jpg",
},{
    id: 'jennie.bp.99',
    name: 'Jennie',
    profile_pic: "Images/Jennie.jpg",
}]

export function saveToStorage(){
    localStorage.setItem('following',JSON.stringify(following))
    localStorage.setItem('unfollow',JSON.stringify(unfollow))
    localStorage.setItem('search',JSON.stringify(search))
}

export function loadFromStorage(){
  following = JSON.parse(localStorage.getItem('following')) || [{
    id: 'Daki_Demon_11',
    name: 'DakiDemon',
    profile_pic: 'Images/Daki_Demon_profile.jpg',
},{
    id: 'Daki_19',
    name: 'Daki',
    profile_pic: 'Images/Daki_profile.jpg',
},{
    
    id: 'Main_1999',
    name: 'MainCharacther',
    profile_pic: 'Images/Main_characther_profile.jpg',
},{
    
    id: 'Mitsuri_1888',
    name: 'Mitsuri',
    profile_pic: "Images/Mitsuri_profile.jpg",
},{
    id: 'Nezuko_9090',
    name: 'Nezuko',
    profile_pic: "Images/Nezuko_profile.jpg",
},{
    id: 'Shinobu_29',
    name: 'Shinobu',
    profile_pic: "Images/Shinobu_Kocho_profile.jpg",
},{
    
    id: 'Tanjiru_1234',
    name: 'Tanjiru',
    profile_pic: "Images/Tanjiru_profile.jpg",
},{
    
    id: 'Yoriichi_2980',
    name: 'Yoriichi',
    profile_pic: "Images/Yoriichi_profile.jpg",
}]

  unfollow = JSON.parse(localStorage.getItem('unfollow')) || [{
    id: 'yuna.itzy.22',
    name: 'Yuna',
    profile_pic: 'Images/Yuna.jpg',
},{
    id: 'wonhee.illit.88',
    name: 'Wonhee',
    profile_pic: "Images/Wonhee.jpg",
},{
    id: 'jennie.bp.99',
    name: 'Jennie',
    profile_pic: "Images/Jennie.jpg",
},{
    id: 'hanni.nj.11',
    name: 'Hanni',
    profile_pic: "Images/Hanni.jpg",
},{
    id: 'kazuha,lessfim.12',
    name: 'Kazuha',
    profile_pic: "Images/Kazuha.jpg",
}]
}