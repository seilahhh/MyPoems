import poems from "./data/poems.js";
import { initBook } from "./book/initBook.js";
import { isMobileView, handleResize } from "./book/responsive.js";
import { setupNavigation } from "./book/navigation.js";
import { setupBook } from "./book/pages.js";

$(document).ready(function () {
    const $book = $("#book");

    setupBook($book, poems)

    const state = {
        isMobile: isMobileView(),
    };

    initBook($book, state.isMobile);

    setupNavigation($book, $("#next-page"), $("#prev-page"), state);

    $(window).on("resize orientationchange", () => handleResize($book, state));
});
