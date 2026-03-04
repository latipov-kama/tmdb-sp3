import Swiper from 'swiper';
import { Scrollbar, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import { render } from '../../libs/render';
import { popularPeople, popularPeoples } from '../../components/popularity';
import { api } from '../../libs/api';
import { Movie } from "../../components/Movie";

const swiper = new Swiper('.trailers__swiper', {
    direction: 'horizontal',
    loop: false,
    modules: [Scrollbar, FreeMode],

    slidesPerView: 4,
    spaceBetween: 20,
    grabCursor: true,

    //   resistanceRatio: 0,

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
});


let mainBox = document.querySelector(".down-box")
let box1 = document.querySelector(".left-box")
let box2 = document.querySelector(".right-boxs")

api.get("/person/popular")
    .then(res => {
        render(res.data.results.slice(0, 2), box1, popularPeople)
        render(res.data.results.slice(2, 6), box2, popularPeoples)
    })


let cardBox = document.querySelector(".card-box")
api.get("movie/popular")
    .then(res => {
        console.log(res.data);
        render(Object.values(res.data.results), cardBox, Movie)
        console.log(Object.values(res.data.results));

    })
