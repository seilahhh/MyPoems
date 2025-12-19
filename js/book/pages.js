/**
 * Sets up the book with an index page and pages for each poem.
 *
 * @param {jQuery} $book - The jQuery object representing the book element.
 * @param {Array} poems - Array of poem objects, each with `title` and `text` properties.
 */
export function setupBook($book, poems) {
    const backCover = $book.find(".back-cover").last();

    /**
     * Generates the first page of the book, the index.
     * Each list item shows the poem title and the page number.
     * Clicking a title navigates to the corresponding page.
     */
    function renderIndex() {
        const $index = $(`
      <article class="page fixed book-index">
        <h2>Índice</h2>
        <ul></ul>
      </article>
    `);

        poems.forEach((poem, i) => {
            const $li = $(
                `<li><a href="#">${poem.title}</a><span class="page-number-index">${
                    i + 4
                }</span></li>`
            );
            $li.on("click", (e) => {
                e.preventDefault();
                $book.turn("page", i + 4); // +1 capa +1 índice → primeira poesia = 3
                console.log(i + 4);
            });
            $index.find("ul").append($li);
        });

        backCover.before($index);
    }

    /**
     * Generates a page for each poem.
     * Each page contains the poem title, text, and page number.
     */
    function renderPoems() {
        poems.forEach((poem, i) => {
            const pageNumber = i + 1;
            const page = $(`
        <article class="page">
          <h2>${poem.title}</h2>
          <p>${poem.text.trim().replace(/\n/g, "<br>")}</p>
          <div class="page-number">${pageNumber}</div>
        </article>
      `);

            backCover.before(page);
        });
    }

    renderIndex();
    renderPoems();
}
