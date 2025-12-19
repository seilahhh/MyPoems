import { initBook } from "./book/initBook.js";
import { isMobileView, handleResize } from "./book/responsive.js";
import { setupNavigation } from "./book/navigation.js";

$(document).ready(function () {
    const $book = $("#book");

    const state = {
        isMobile: isMobileView(),
    };

    initBook($book, state.isMobile);

    setupNavigation($book, $("#next-page"), $("#prev-page"), state);

    $(window).on("resize orientationchange", () => handleResize($book, state));
});
