// Load App's css (scss)
import '@/assets/css/app.scss'

// Import bootstrap js
import 'bootstrap/dist/js/bootstrap.bundle.min'

// Load Project Images
// import '@/assets/images/card-1.png'
// import '@/assets/images/card-2.png'
// import '@/assets/images/card-3.png'
// import '@/assets/images/favicon.png'
// import '@/assets/images/hero-bg.jpg'
// import '@/assets/images/hero-featured-img.png'
// import '@/assets/images/hero-logo.png'
// import '@/assets/images/main-featured-img.png'
// import '@/assets/images/mws-profile.png'
// import '@/assets/images/pandora-logo.png'

const heroHeader = document.querySelector('.hero-hdr')

heroHeader.addEventListener('mouseover', () => {
    heroHeader.style.color = 'red'
    heroHeader.style.cursor = 'pointer'
})

heroHeader.addEventListener('mouseout', () => {
    heroHeader.style.color = '#27251F'
})
