const mainHeader = document.querySelector('.main-header')
const nav = document.querySelector('.nav')
const menu = document.querySelector('.menu')
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
    // menu.style.display = 'none'
    openMenu.style.display = 'block'
  } else {
    menu.style.display = 'flex'

    closeMenu.style.display = 'none'
    openMenu.style.display = 'none'
  }
}, 50)

function menuHidden() {
  nav.classList.remove('show')
}

function menuShow() {
  nav.classList.add('show')
}

const menuClose = document.querySelectorAll('.menu-hidden')

menuClose.forEach(link => {
  link.addEventListener('click', menuHidden)
})

const menuOpen = document.querySelector('.menu-show')

menuOpen.addEventListener('click', menuShow)

// SCROLL REVEAL

ScrollReveal().reveal(
  `
  .hero-text-box,
  .hero-img-box,
  .service-img,
  .service-wrapper,
  .event-wrapper,
  .event-more,
  .testimonial,
  .section-banner .container
`,
  {
    origin: 'top',
    delay: 200,
    distance: '50px',
    duration: 1200,
    interval: 300
  }
)

ScrollReveal().reveal(
  `
  .service-box,
  .event-box
`,
  {
    origin: 'top',
    delay: 400,
    distance: '50px',
    duration: 1000,
    interval: 500
  }
)
