document.addEventListener("DOMContentLoaded", function () {
    let searchBox = document.getElementById("searchBox");
    let books = document.querySelectorAll("#bookList.review");

    searchBox.addEventListener("input", function () {
        let query = searchBox.value.toLowerCase();

        books.forEach(book => {
            if (book.textContent.toLowerCase().includes(query)) {
                book.style.display = "block";
            } else {
                book.style.display = "none";
            }
        });
    });
});
