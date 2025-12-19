/**
 * Sets up navigation for the Turn.js book, including next/previous buttons
 * and updating button visibility based on the current page.
 *
 * @param {jQuery} $book - The jQuery object representing the book element.
 * @param {jQuery} nextBtn - The "Next Page" button element.
 * @param {jQuery} prevBtn - The "Previous Page" button element.
 * @param {Object} state - An object containing the current state, including isMobile flag.
 */
export function setupNavigation($book, nextBtn, prevBtn, state) {
    /**
     * Updates the visibility of the navigation buttons based on the current page.
     * Hides "Previous" on the first page and "Next" on the last page.
     */
    function updateButtons() {
        const current = $book.turn("page");
        const total = $book.turn("pages");

        prevBtn.toggle(current > 1);
        nextBtn.toggle(current < total);
    }

    /**
     * Handles the "Next" button click.
     * For mobile, skips 2 pages on certain positions to maintain proper layout.
     */
    function next() {
        const current = $book.turn("page");
        const total = $book.turn("pages");

        if (state.isMobile && (current === 1 || current === total - 2)) {
            $book.turn("page", current + 2);
        } else {
            $book.turn("next");
        }
    }

    /**
     * Handles the "Previous" button click.
     * For mobile, skips 2 pages on certain positions to maintain proper layout.
     */
    function prev() {
        const current = $book.turn("page");
        const total = $book.turn("pages");

        if (state.isMobile && (current === 3 || current === total)) {
            $book.turn("page", current - 2);
        } else {
            $book.turn("previous");
        }
    }

    nextBtn.on("click", next);
    prevBtn.on("click", prev);
    $book.on("turned", updateButtons);

    updateButtons();
}
