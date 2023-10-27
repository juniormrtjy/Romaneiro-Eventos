const menu = document.querySelector('.main-header')

document.addEventListener('scroll', () => {
  if (window.scrollY > 600) {
    menu.style.position = 'sticky'
  } else {
    menu.style.position = 'static'
  }
})
