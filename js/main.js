const mainHeader = document.querySelector('.main-header')
const nav = document.querySelector('.nav')
const openMenu = document.querySelector('.open-menu')
const closeMenu = document.querySelector('.close-menu')

document.addEventListener('scroll', () => {
  if (window.scrollY > 600) {
    mainHeader.style.position = 'sticky'
  } else {
    mainHeader.style.position = 'static'
  }
})

setInterval(() => {
  if (window.innerWidth < 1130) {
    nav.style.display = 'none'
    openMenu.style.display = 'block'
    closeMenu.style.display = 'block'
  } else {
    nav.style.display = 'flex'

    openMenu.style.display = 'none'
    closeMenu.style.display = 'none'
  }
}, 50)

function toggleMenu() {
  nav.classList.toggle('show')
}

const menuBtn = document.querySelectorAll('.toggle')

menuBtn.forEach(link => {
  link.addEventListener('click', toggleMenu)
})
