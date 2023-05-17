
//משימה 7
//נהג מונית שירות מירושלים לתל אביב יוצא לדרך רק אם כל המונית מלאה (12 אנשים)
function taxiGoOut() {
    let peopleWaitTaxi = parseInt(document.querySelector("#input_taxi").value)
    let fullTaxi = 12
    let printTaxi = document.querySelector("#span_taxi")
    if (peopleWaitTaxi < fullTaxi) {
        printTaxi.innerHTML = `The taxi need to be full`
    } else if (peopleWaitTaxi >= fullTaxi) {
        printTaxi.innerHTML = `The taxi leave the station! ${peopleWaitTaxi - fullTaxi} passengers left`
    }
}
