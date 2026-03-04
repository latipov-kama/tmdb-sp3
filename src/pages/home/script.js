import { render } from '../libs/utils.js'
import { movies, TrailersCard, swiper } from '../components/TrailersCard.js'

const swiperWrapper = document.querySelector('.swiper-wrapper')
render(movies, swiperWrapper, TrailersCard)