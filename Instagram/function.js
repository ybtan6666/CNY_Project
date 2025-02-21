function showFollowing(funcClass, hiddenClass, opacityS, opacityM){
    let switches = document.querySelector(hiddenClass);
    switches.style.opacity = opacityS;
    document.querySelector(".js-main").style.opacity = opacityM;
}