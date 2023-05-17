
//משימה 2
//צרו תוכנית המקבלת כמות מספרים ומדפיסה את הממוצע שלהם
function calcAve() {
    let inputAve1, inputAve2, inputAve3, averageOfNum
    inputAve1 = parseInt(document.querySelector("#input_ave_1").value)
    inputAve2 = parseInt(document.querySelector("#input_ave_2").value)
    inputAve3 = parseInt(document.querySelector("#input_ave_3").value)
    averageOfNum = (inputAve1 + inputAve2 + inputAve3) / 3;
    document.querySelector("#span_ave").innerHTML = averageOfNum.toFixed(2)
}