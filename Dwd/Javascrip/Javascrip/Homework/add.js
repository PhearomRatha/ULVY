const bookList = [];
        
function AddBook() {
    const input = document.getElementById("addBookInput");
    const bookName = input.value.trim();

    if (bookName !== "") {
        bookList.push(bookName);
        updateBookList();

        input.value = "";
    } 
}

function updateBookList() {
    const ul = document.getElementById("bookList");
    ul.innerHTML = ""; 

    bookList.forEach((book, index) => {
        const li = document.createElement("li");
        li.textContent = book;
        
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "delete";
        deleteBtn.onclick = () => removeBook(index);

        li.appendChild(deleteBtn);
        ul.appendChild(li);
    });


    document.getElementById("bookCount").textContent = bookList.length;
    document.getElementById("bookTitles").textContent = bookList.join(", ");
}

function removeBook(index) {
    
    bookList.splice(index, 1);
    updateBookList();
}