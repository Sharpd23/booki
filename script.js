// Live Book Search Function
function liveSearch() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    let books = document.getElementById("bookList").getElementsByClassName("review");

    for (let book of books) {
        if (book.innerText.toLowerCase().includes(input)) {
            book.style.display = "block";
        } else {
            book.style.display = "none";
        }
    }
}

// Ensure the DOM is fully loaded before attaching event listeners
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("searchBox").addEventListener("keyup", liveSearch);
});
