
//משימה 18
// כתבו פונקציה המקבלת שני מספרים a ו- b ומחזירה את הגדול מבינהם. הציגו את התשובה המחוזרת ב alert.

function findBiggerNum() {
    let number1 = parseInt(document.querySelector("#input_biggerNum1").value)
    let number2 = parseInt(document.querySelector("#input_biggerNum2").value)
    alert(Math.max(number1, number2))
}
