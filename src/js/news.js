import { btns } from "./btns.js";
btns()
    var itemsCount = 200;
    var itemsOnPage = 10;

    var pagination1 = new Pagination({
        container: document.getElementById("pagination-1")
    });
    pagination1.make(itemsCount, itemsOnPage);
