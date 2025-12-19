/**
 * Checks if the current viewport should be considered "mobile".
 * Returns true if the window width is less than 768px, false otherwise.
 */
export function isMobileView() {
    return window.innerWidth < 768;
}

/**
 * Adjusts the Turn.js book display and size when the window is resized
 * or the device orientation changes.
 * 
 * @param {jQuery} $book - The jQuery object representing the book element.
 * @param {Object} state - An object containing the current state, including isMobile flag.
 */
export function handleResize($book, state) {
    const currentlyMobile = isMobileView();

    if (currentlyMobile !== state.isMobile) {
        $book.turn("display", currentlyMobile ? "single" : "double");
        state.isMobile = currentlyMobile;
    }

    $book.turn("size", $book.parent().width(), $book.parent().height());
}
