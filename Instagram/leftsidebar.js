import {all_friends,following,unfollow,search,saveToStorage,loadFromStorage} from "./friend.js";

let font_weight_classNow = undefined

function changeFontWeight(){
  if (font_weight_classNow){
    document.querySelector(font_weight_classNow).style.fontWeight = 'bold'
  }
}

function returnFontWeight(){
  if (font_weight_classNow){
    document.querySelector(font_weight_classNow).style.fontWeight = 'normal'
  }
}

document.querySelector('.js-menu-bar').addEventListener('click', () => {
        
  let switches = document.querySelector('.js-switchappearance')
  if (switches.style.opacity  === '1'){
      switches.style.opacity  = '0'
      document.querySelector('.js-menu-bar').style.fontWeight = 'normal'
  }
  else{
      switches.style.opacity  = '1'
      document.querySelector('.js-menu-bar').style.fontWeight = 'bold'
  }
});

let homeHTML
let exploreHTML
let profileHTML
let notificationHTML
let searchHTML

function runFollowFunc(){
  document.querySelectorAll('.js-follow-status').forEach((link)=>{
    link.addEventListener('click', () => {
      let del;
      const status = link.dataset.status;  // Get data-status value 
      if (link.textContent === 'Follow'){ 
        for (let i = 0; i < unfollow.length; i++){
            if (unfollow[i].id === status){
              following.push(unfollow[i])
              del = i
              break
            }
          }
        unfollow.splice(del, 1);
        link.textContent = "Following";
        }
      else{
        for (let i = 0; i < following.length; i++){
          if (following[i].id === status){
            unfollow.push(following[i])
            del = i
            break
          }
        }
        link.textContent = "Follow";
        following.splice(del, 1);
      }
    //console.log(following,del)
    //console.log(unfollow)
    saveToStorage()
    })
  })
}



function refresh(){

      changeFontWeight()
      loadFromStorage()

      let storyHTML = ``;
      let rightSideBarHTML = ``;
      let notificationContentHTML = ``;
      let searchContentHTML = ``;

      following.forEach((character) => {

      storyHTML += `
                <div class="friend">
                  <img src=${character.profile_pic} alt="" />
                  <p>${character.name}</p>
                </div>
                `
      })

      unfollow.forEach((unfollowcharacther) => {

      rightSideBarHTML += `<li>
                  <img src="${unfollowcharacther.profile_pic}" alt="" />
                  <div class="content-intro">
                    <p>${unfollowcharacther.id}</p>
                    <p>${unfollowcharacther.name}</p>
                  </div>
                  <p class='js-follow-status' data-status = "${unfollowcharacther.id}">Follow</p>
                </li>
      `
      })

      
      unfollow.forEach((unfollowcharacthers) => {
        notificationContentHTML += `
          <li>
              <img src="${unfollowcharacthers.profile_pic}" alt="" />
              <div class="content-intro">
                <p>${unfollowcharacthers.id}</p>
                <p>${unfollowcharacthers.name}</p>
              </div>
              <button
                class="js-follow-status"
                data-status="${unfollowcharacthers.id}"
              >Follow</button>
              </li>
        `
      })

      search.forEach((infor) => {
        searchContentHTML += ` <li>
                <img src="${infor.profile_pic}" alt="" />
                <div class="content-intro">
                  <p>${infor.id}</p>
                  <p>${infor.name}</p>
                </div>
                <span class="js-clear-search-friend" data-friend="${infor.id}"></span>
              </li>`
      })

      homeHTML = `<section class="main-content">
              
              <div class="story-status">
                  ${storyHTML}
              </div>

              <div class="post-moment">
                <div class="nezuko">
                  <div class="self">
                    <div class="icon">
                      <img src="Images/Nezuko_profile.jpg" alt="" />
                    </div>
                    <p>Nezuko</p>
                    <p>8h</p>
                    <div class="three-dot">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <img src="Images/Nezuko_post.jpg" alt="" />
                  <div class="interact-icon">
                    <img src="Images/heart.png" alt="" />
                    <img src="Images/chat.png" alt="" />
                  </div>
                  <p>50 Likes</p>
                </div>

                <div class="tanjiru">
                  <div class="self">
                    <div class="icon">
                      <img src="Images/Tanjiru_profile.jpg" alt="" />
                    </div>
                    <p>Tanjiru</p>
                    <p>8h</p>
                    <div class="three-dot">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <img src="Images/Tanjiru_post.jpg" alt="" />
                  <div class="interact-icon">
                    <img src="Images/heart.png" alt="" />
                    <img src="Images/chat.png" alt="" />
                  </div>
                  <p>50 Likes</p>
                </div>

                <div class="Daki-Demon">
                  <div class="self">
                    <div class="icon">
                      <img src="Images/Daki_Demon_profile.jpg" alt="" />
                    </div>
                    <p>DakiDemon</p>
                    <p>8h</p>
                    <div class="three-dot">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <img src="Images/Daki_Demon_post.jpg" alt="" />
                  <div class="interact-icon">
                    <img src="Images/heart.png" alt="" />
                    <img src="Images/chat.png" alt="" />
                  </div>
                  <p>50 Likes</p>
                </div>
              </div>
            </section>

            <section class="right-sidebar">
              <div class="profile-self">
                <img src="Images/Profile.jpg" alt="" />
                <div class="content-intro">
                  <p>haha.ha.20</p>
                  <p>Jay Chou</p>
                </div>
              </div>
              <ul>
                <p>Suggested for you</p>
                ${rightSideBarHTML}
              </ul>
              <small>© 2025 From YB</small>
            </section>`

      exploreHTML = `<div class="explore-part">
              <div class="grid grid1">
                <img src="Images/Winter_search.jpg" alt="" />
                <div class="interact">
                  <img src="Images/heart.png" alt="" />
                  <p>2222</p>
                  <img src="Images/chat.png" alt="" />
                  <p>5678</p>
                </div>
              </div>
              <div class="grid grid1">
                <img src="Images/NingNing_search.jpg" alt="" />
                <div class="interact">
                  <img src="Images/heart.png" alt="" />
                  <p>2225</p>
                  <img src="Images/chat.png" alt="" />
                  <p>5679</p>
                </div>
              </div>
              <div class="grid grid2">
                <img src="Images/Karina_search_2.jpg" alt="" />
                <div class="interact">
                  <img src="Images/heart.png" alt="" />
                  <p>999</p>
                  <img src="Images/chat.png" alt="" />
                  <p>234</p>
                </div>
              </div>
              <div class="grid grid3">
                <img src="Images/GroupAespa_search.webp" alt="" />
                <div class="interact">
                  <img src="Images/heart.png" alt="" />
                  <p>890</p>
                  <img src="Images/chat.png" alt="" />
                  <p>999</p>
                </div>
              </div>
              <div class="grid grid1">
                <img src="Images/Hanni.jpg" alt="" />
                <div class="interact">
                  <img src="Images/heart.png" alt="" />
                  <p>123</p>
                  <img src="Images/chat.png" alt="" />
                  <p>456</p>
                </div>
              </div>
              <div class="grid grid1">
                <img src="Images/Minji_search.jpg" alt="" />
                <div class="interact">
                  <img src="Images/heart.png" alt="" />
                  <p>555</p>
                  <img src="Images/chat.png" alt="" />
                  <p>33</p>
                </div>
              </div>
              <div class="grid grid4">
                <img src="Images/NJ_search_2.jpg" alt="" />
                <div class="interact">
                  <img src="Images/heart.png" alt="" />
                  <p>111</p>
                  <img src="Images/chat.png" alt="" />
                  <p>11</p>
                </div>
              </div>
              <div class="grid grid5">
                <img src="Images/GroupNewJeans_search.jpg" alt="" />
                <div class="interact">
                  <img src="Images/heart.png" alt="" />
                  <p>1112</p>
                  <img src="Images/chat.png" alt="" />
                  <p>1115</p>
                </div>
              </div>
              <div class="copyright">
                <small>© 2025 From YB</small>
              </div>
            </div>`

      profileHTML = `<div class="profile-page">
              <div class="profile-part">
                <div class="profile-pic">
                  <img src="Images/Profile.jpg" alt="" />
                </div>
                <div class="intro">
                  <p>haha.ha.20</p>
                  <div class="follow">
                    <p>0 Posts</p>
                    <p>0 Followers</p>

                    <p class="js-following" onclick="showFollowing('.js-following','.js-show-following-part','1','0.5')">${following.length} Following</p>
                  </div>
                  <h4>Jay Chou</h4>
                </div>
              </div>
              <div class="profile-story">
                <div class="first">
                  <div class="second">
                    <img src="Images/plus_sign.png" alt="" />
                  </div>
                </div>
                <h3>New</h3>
              </div>
              <div class="copyright">
                <small>© 2025 From YB</small>
              </div>
            </div>`

      notificationHTML = `<div class="notification">
          <h1>Notification</h1>
          <h2>Suggested for You</h2>
          <ul>
          ${notificationContentHTML}
          </ul>
          </div>`

      searchHTML = `<div class="search">
          <div class="up">
            <h1>Search</h1>
            <input type="text" placeholder="search" class="js-input"/>
          </div>
          <div class="down">
            <div class="search-infor">
              <h2>Recent</h2>
              <p class="clear js-clear-search">Clear all</p>
            </div>
            <ul>
              ${searchContentHTML}
            </ul>
          </div>
        </div>`

      let showFollowingHTML = `
                  <div class="up">
                      <h3>Following</h3>
                      <span
                        class="js-cross-delete-showFollowing"
                        onclick="showFollowing('.js-cross-delete-showFollowing', '.js-show-following-part', '0', '1')"
                      ></span>
                    </div>
                  <ul>
                    
      `

      following.forEach( (character) => {
      showFollowingHTML += `

          <li>
            <img src=${character.profile_pic} alt="" />
            <div class="content-intro">
              <p>${character.id}</p>
              <p>${character.name}</p>
            </div>
            <button class="js-remove-following" data-status=${character.id}>Following</button>
          </li>
        
      `
      })

      document.querySelector('.js-show-following-part').innerHTML = showFollowingHTML + `</ul>`
      document.querySelectorAll('.js-remove-following').forEach((link) => {
        link.addEventListener('click', ()  => {
          let del;
          const status = link.dataset.status;  // Get data-status value 
          if (link.textContent === 'Follow'){ 
            for (let i = 0; i < unfollow.length; i++){
                if (unfollow[i].id === status){
                  following.push(unfollow[i])
                  del = i
                  break
                }
              }
            unfollow.splice(del, 1);
            link.textContent = "Following";
            }
          else{
            for (let i = 0; i < following.length; i++){
              if (following[i].id === status){
                unfollow.push(following[i])
                del = i
                break
              }
            }
            link.textContent = "Follow";
            following.splice(del, 1);
          }
          saveToStorage()
        })
      })
}

function runClearFunc(){
  document.querySelectorAll('.js-clear-search-friend').forEach((link)=>{
    link.addEventListener('click', () => {
      let del;
      const status = link.dataset.friend;  // Get data-status value  
      for (let i = 0; i < search.length; i++){
          if (search[i].id === status){
            del = i
            break
          }
        }
        search.splice(del, 1);
        saveToStorage()
        refresh()
        document.querySelector('.content-part').innerHTML = searchHTML
        runClearFunc() // the address will be changed if refreshing again
    })
  })

  document.querySelector('.js-clear-search').addEventListener('click', () => {
      search.splice(0,search.length)
      saveToStorage()
      refresh()
      document.querySelector('.content-part').innerHTML = searchHTML
  })
}

function runSearchFunc(){
  document.querySelector('.js-input').addEventListener('keydown',(event) => {
    let found = false
    if (event.key === 'Enter'){
      all_friends.forEach((char) => {
        if (char.id === document.querySelector('.js-input').value){
          search.push(char)
          found = true
        }
      })
      if (found){
        saveToStorage()
      refresh()
      document.querySelector('.content-part').innerHTML = searchHTML
      }
      
    }
  })
}

      document.querySelector('.js-home').addEventListener('click', () => {
        
        returnFontWeight()
        font_weight_classNow = '.js-home'
        refresh()
        document.querySelector('.content-part').innerHTML = homeHTML
        runFollowFunc()
        
      })

      document.querySelector('.js-explore').addEventListener('click', () => {
       
        returnFontWeight()
        font_weight_classNow = '.js-explore'
        refresh()
        document.querySelector('.content-part').innerHTML = exploreHTML
      })

      document.querySelector('.js-profile').addEventListener('click', () => {
      
        returnFontWeight()
        font_weight_classNow = '.js-profile'
        refresh()
        document.querySelector('.content-part').innerHTML = profileHTML
       
      })

      document.querySelector('.js-notification').addEventListener('click', () => {
        returnFontWeight()
        font_weight_classNow = '.js-notification'
        refresh()
        document.querySelector('.content-part').innerHTML = notificationHTML
        runFollowFunc()
      })

      document.querySelector('.js-search').addEventListener('click', () => {
        returnFontWeight()
        font_weight_classNow = '.js-search'
        refresh()
        document.querySelector('.content-part').innerHTML = searchHTML
        runClearFunc()
        runSearchFunc()
      })