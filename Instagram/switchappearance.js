let modes = JSON.parse(localStorage.getItem('modes')) || 'light'

function switchappearance(){
    const switches = document.querySelector('.js-toggle')
    const mode = document.querySelector('.js-main') 
    if (modes === 'dark'){
        switches.classList.add('toggleToLeft')
        mode.classList.add('darktheme')
    }
}


document.querySelector('.js-toggle').addEventListener('click', () => {
    const switches = document.querySelector('.js-toggle')
    const mode = document.querySelector('.js-main') 
    if (modes === 'dark'){
        switches.classList.remove('toggleToLeft')
        mode.classList.remove('darktheme')
        modes = 'light'
        localStorage.setItem('modes', JSON.stringify('light'))
    }
    else if (modes === 'light'){
        switches.classList.add('toggleToLeft')
        mode.classList.add('darktheme')
        modes = 'dark'
        localStorage.setItem('modes', JSON.stringify('dark'))
    }
})
switchappearance()