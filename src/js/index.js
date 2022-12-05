import { btns } from "./btns.js";
import { top_nav } from "./top_nav.js";
import { Video } from "./video.js";

$(".count_info .count").countUp();
$('.bg_slider').slick({
  arrows:false,
  dots:false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1
});

if (document.body.getBoundingClientRect().width <= 767) {
  window.addEventListener("scroll", () => {
    const all_grid_items = document.querySelectorAll(
      ".selection_grid .item_wrapper"
    );
    if (all_grid_items[0].getBoundingClientRect().top <= 70) {
      all_grid_items.forEach((item) => {
        if (item.getBoundingClientRect().top <= 70) {
          item.classList.add("active_grid_item");
        }
      });
    }
  });
}

btns();
Video();
top_nav()
