
//משימה 11
//כתבו קוד שבודק את המשתנה foo .אם הוא שווה למחרוזת הטקסט " correct am I

function fooCorrect() {
    let foo = document.querySelector("#input_foo").value;
    let printFoo = document.querySelector("#span_foo");
    if (foo === "correct am I") {
        printFoo.innerHTML = "He is correct"
    } else {
        printFoo.innerHTML = "He is NOT correct"
    }
}
