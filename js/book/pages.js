/**
 * Dynamically generates pages for each poem and inserts them
 * into the Turn.js book before the back cover.
 *
 * @param {jQuery} $book - The jQuery object representing the book element.
 * @param {Array} poemas - An array of poem objects with `title` and `text` properties.
 */
export function renderPoems($book, poemas) {
    const backCover = $book.find(".back-cover").last();

    poemas.forEach((poema) => {
        const page = $(`
      <article class="page">
        <h2>${poema.title}</h2>
        <p>${poema.text.trim().replace(/\n/g, "<br>")}</p>
      </article>
    `);

        backCover.before(page);
    });
}
