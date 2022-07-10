const form = document.getElementById("book-form");
let selectedBook;

loadBookData();
async function loadBookData() {
  let books = await getAllBooks();
  let content = "";
  let table = document.getElementById("book-table");

  let editBtn = document.getElementById("editbtn");
  editBtn.onclick = function () {
    clearForm();
    editBtn.style.display = "none";
  };

  let deleteBtn = document.getElementById("deletebtn");
  deleteBtn.onclick = function () {
    deleteBtn.style.display = "none";
    deleteBook(selectedBook.id);
  };

  for (let book of books) {
    content = "";
    content += `<td> ${book.title} </td>`;
    content += `<td> ${book.isbn} </td>`;
    content += `<td> ${book.pdate} </td>`;
    content += `<td> ${book.author} </td>`;
    content += `<td> &#9998; </td>`;
    let tr = document.createElement("tr");
    tr.addEventListener("click", function () {
      editBtn.style.display = "inline";
      deleteBtn.style.display = "inline";
      selectedBook = book;
      setForm(book);
    });
    tr.innerHTML = content;
    table.appendChild(tr);
  }
}

async function submitBook(e) {
  e.preventDefault();
  const form = document.getElementById("book-form");

  let title = form.elements["title"].value;
  let isbn = form.elements["isbn"].value;
  let pdate = form.elements["pdate"].value;
  let author = form.elements["author"].value;
  let id = form.elements["id"].value;

  let obj = { title, isbn, pdate, author, id };
  await submitData(obj);
  window.location.reload();
}

function setForm(book) {
  form.elements["title"].value = book.title;
  form.elements["isbn"].value = book.isbn;
  form.elements["pdate"].value = book.pdate;
  form.elements["author"].value = book.author;
  form.elements["id"].value = book.id;
}
function clearForm() {
  form.reset();
}

async function getAllBooks() {
  return (await fetch("http://127.0.0.1:3000/api/books")).json();
}

function submitData(book) {
  return fetch("http://127.0.0.1:3000/api/books", {
    method: "POST",
    body: JSON.stringify(book),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
}
function deleteBook(id) {
  return fetch(`http://127.0.0.1:3000/api/books/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
}
