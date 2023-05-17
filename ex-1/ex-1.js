
//משימה 1
// כתבו תוכנית הקולטת מספר מהמשתמש ובדקו האם הוא זוגי או לא
function oddOrEven() {
    const oddEvenNum = document.querySelector("#input_odd_even").value
    if (oddEvenNum % 2 === 0) {
        document.querySelector("#span_odd_even").innerHTML = " an even number"
    } else {
        document.querySelector("#span_odd_even").innerHTML = " an odd number"
    }
}