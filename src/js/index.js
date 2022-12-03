import { btns } from "./btns.js";
import { Video } from "./video.js";

$(".count_info .count").countUp();

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
