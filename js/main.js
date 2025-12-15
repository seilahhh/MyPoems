$(document).ready(function () {
    const $book = $("#book");
    const nextButton = $("#next-page");
    const previousButton = $("#prev-page");

    // Check if the viewport is mobile
    const isMobileView = () => window.innerWidth < 768;

    let isMobile = isMobileView();

    // Init the book
    const initBook = () => {
        $book.turn({
            width: $book.parent().width(),
            height: $book.parent().height(),
            autoCenter: true,
            display: isMobile ? "single" : "double",
            duration: 0,
        });
    };

    initBook();

    // Adjust book size
    const ajustarOrientacao = () => {
        const currentlyMobile = isMobileView();

        if (currentlyMobile !== isMobile) {
            $book.turn("display", currentlyMobile ? "single" : "double");
            isMobile = currentlyMobile;
        }

        $book.turn("size", $book.parent().width(), $book.parent().height());
    };

    $(window).on("resize orientationchange", ajustarOrientacao);

    // Block touch interactions on mobile
    $book.on("start", function (event, pageObject, corner) {
        const blockedCorners = ["tl", "tr", "bl", "br", "r", "l"];
        if (blockedCorners.includes(corner)) event.preventDefault();
    });

    $book.on("turned", function (event, pageObject, corner) {
        updateNavigationButtons();
    });

    // Show/hide navigation buttons
    function updateNavigationButtons() {
        const currentPage = $book.turn("page");
        const totalPages = $book.turn("pages");

        previousButton.toggle(currentPage > 1);
        nextButton.toggle(currentPage < totalPages);
    }

    updateNavigationButtons();

    // Navigate to the next page
    const goNext = () => {
        const currentPage = $book.turn("page");
        const totalPages = $book.turn("pages");

        if (isMobile && (currentPage === 1 || currentPage === totalPages - 2)) {
            $book.turn("page", currentPage + 2);
        } else {
            $book.turn("next");
        }
    };

    // Navigate to the previous page
    const goPrev = () => {
        const currentPage = $book.turn("page");
        const totalPages = $book.turn("pages");

        if (isMobile && (currentPage === 3 || currentPage === totalPages)) {
            $book.turn("page", currentPage - 2);
        } else {
            $book.turn("previous");
        }
    };

    nextButton.on("click", goNext);
    previousButton.on("click", goPrev);
});
