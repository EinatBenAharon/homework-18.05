window.onload = function () {
    declareEvents()
    checkBookList()
}

//משימה 22
//צרו מערך עם 5 שמות של תלמידים והדפיסו לקונסול את השמות
let kids_ar = ["Osher", "Orel", "Ofir", "Itay", "Eitan"]
console.log(kids_ar)

//משימה 23
//לספרנית בספרייה העירונית יש קושי בניהול הספרים, בואו נעזור לה

let save_ar = []

const checkBookList = function () {
    if (localStorage["books"]) {
        save_ar = JSON.parse(localStorage["books"])
        console.log(save_ar)
        createBookList()
    }
}
const declareEvents = function () {
    let add_btn = document.querySelector("#add_btn");
    add_btn.addEventListener("click", function () {
        let bookObj = {
            book: document.querySelector("#id_bookName").value,
            author: document.querySelector("#id_bookAuthor").value
        }
        document.querySelector("#id_bookName").value = " ";
        document.querySelector("#id_bookAuthor").value = " ";
        save_ar.push(bookObj);
        localStorage.setItem("books", JSON.stringify(save_ar))
        // createBookList()
    })
}

const createBookList = function () {
    let id_ul = document.querySelector("#id_ul");
    id_ul.innerHTML = " ";
    save_ar.forEach(function (item) {
        id_ul.innerHTML += `<li>${item.book} - ${item.author}</li>`
    })
}

function clearBookList() {
    id_ul.innerHTML = ""
    localStorage.clear()
    save_ar = []
    console.log(save_ar)
}