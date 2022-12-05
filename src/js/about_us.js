import { Video } from "./video.js";
import { btns } from "./btns.js";
import {top_nav} from './top_nav.js'


top_nav()
btns()
$('.about_item .count span').countUp();
$('.count_info .count ').countUp();

$(document).ready(function(){
    $('.icons_wrapper').slick({
        dots:false,
        arrows:false,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });
  });


Video()
