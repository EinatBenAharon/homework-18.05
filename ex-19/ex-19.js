
//משימה 19
//בנו דף עם מחשבון לחישוב טיפ, למשתמש תהיה אפשרות להזין את הסכום לתשלום ואת אחוז הטיפ והדף יציג לו את כמות הטיפ שעליו לשלם ואת הסכום
function calcTip() {
    let sumTip = parseInt(document.querySelector("#input_sumTip").value)
    let totalTip = document.querySelector("#span_totalTip")
    let percentTip = parseInt(document.querySelector("#input_percentTip").value)
    let value = document.querySelector("#value");
    let howMuchTip = (sumTip * percentTip) / 100
    value.textContent = percentTip
    totalTip.innerHTML = howMuchTip
}