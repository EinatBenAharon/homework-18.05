
//משימה 9
//כתבו משפט תנאי שבודק אם המשתנה foo שווה ל- Thursday ,ל-thursday או ל-5 .אם כן יודפס בקונסולה המשפט "!Thursday! Yay
function fooDay() {
    let foo = document.querySelector("#input_foo").value;
    let printFoo = document.querySelector("#span_foo");
    if (foo === "thursday" || foo === "Thursday" || foo == 5) {
        printFoo.innerHTML = "Thursday! Yay!"
    } else {
        printFoo.innerHTML = "It's not Thursday"
    }
}