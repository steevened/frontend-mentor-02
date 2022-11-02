const showNav = document.querySelector('.nav')

const toggleMenu = document.querySelector('.mobile')

const closeNav = document.querySelector('.close-nav')

const toggleMenuBar = () => {
  showNav.classList.toggle('moveToLeft')
  document.body.classList.toggle('blur')
}

toggleMenu.addEventListener('click', toggleMenuBar)

closeNav.addEventListener('click', toggleMenuBar)

// if (showNav.classList.contains('moveToLeft')) {

// }
