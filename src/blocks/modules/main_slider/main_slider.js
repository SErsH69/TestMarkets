import $ from 'jquery';
import 'slick-carousel';

const MainSlider = class MainSlider {
    constructor() { }
    
    initSlider() {
        document.addEventListener('DOMContentLoaded', () => {
            $('.js_slide').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
                autoplay: true,
                autoplaySpeed: 2000,
                variableWidth: true,
                responsive: [
                    {
                        breakpoint: 1023,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 680,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 500,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            });
        });
    }
    
    init() {
        this.initSlider();
    }
}

export default MainSlider;
