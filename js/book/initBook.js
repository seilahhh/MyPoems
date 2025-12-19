/**
 * Initializes a Turn.js book with the correct size and display mode.
 *
 * @param {jQuery} $book - The jQuery object representing the book element.
 * @param {boolean} isMobile - Indicates whether the book should use single-page (mobile) or double-page (desktop) layout.
 */
export function initBook($book, isMobile) {
    $book.turn({
        width: $book.parent().width(),
        height: $book.parent().height(),
        autoCenter: true,
        display: isMobile ? "single" : "double",
    });
}