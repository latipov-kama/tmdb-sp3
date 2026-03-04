import Swiper from 'swiper'
import { Scrollbar, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/free-mode'

export const movies = [
    { title: 'Fear', img: '/public/images/fear.jpg' },
    { title: 'Star Wars', img: '/public/images/star-wars.webp' },
    { title: 'Fight Club', img: '/public/images/fight-club.jpg' },
    { title: 'Inglourious Basterds', img: '/public/images/Inglourious-Basterds.jpg' },
    { title: 'Rush Hour', img: '/public/images/rush-hour.webp' },
]

export function TrailersCard(movie) {
    const slide = document.createElement('div')
    slide.classList.add('swiper-slide')

    const img = document.createElement('img')
    img.src = movie.img
    img.alt = movie.title

    const title = document.createElement('p')
    title.classList.add('swiper-slide__title')
    title.textContent = movie.title

    slide.append(img, title)

    return slide
}

export const swiper = new Swiper('.trailers__swiper', {
    direction: 'horizontal',
    loop: false,
    modules: [Scrollbar, FreeMode],

    slidesPerView: 4,
    spaceBetween: 20,
    grabCursor: true,

    freeMode: {
        enabled: true,
        momentum: true,
        momentumRatio: 0,
        momentumVelocityRatio: 0,
        momentumBounce: false,
    },

    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
})