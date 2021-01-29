const btn = document.querySelector('.burger')
const navLinks = document.querySelector('.nav-links')
AOS.init();
btn.addEventListener('click', () => {
    navLinks.classList.toggle('show-nav')
    btn.classList.toggle('toggle')

})

const tl = gsap.timeline({ defaults: { ease: 'power4' } })
const tl2 = gsap.timeline({ defaults: { duration: 1.5, delay: 1 } })

tl.to('.navbar', { opacity: 0, duration: 0 })
tl.to('.text', { y: '0%', duration: 1.2 })
tl.to('.intro', { y: '-100%', duration: 1.2, delay: .7 })
tl.to('.navbar', { opacity: 1, duration: 1 })
tl.to('.hero-heading', { opacity: 1, duration: .5 })
tl.from('.hero-img', { y: '100%', opacity: 0, duration: 1 })
tl2.to('.hero-img img', { y: 15, repeat: -1, yoyo: true, duration: 2 })