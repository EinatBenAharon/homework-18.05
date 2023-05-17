
//משימה 6
//בסוכנות רכב "טויוטה" יש מבצע ! הנחה של 5% הנחה על כל הרכבים, ואפשרות לפריסה של עד 24 תשלומים ללא ריבית

function toyotaSale() {
    let carPrice = parseInt(document.querySelector("#input_carPrice").value);//מחיר הרכב
    let carPayments = parseInt(document.querySelector("#input_carPayments").value);//מספר תשלומים
    let carTotalPrice = document.querySelector("#span_carTotalPrice")//הדפסת תוצאה
    let carPriceAfterSale = calcCarPrice(carPrice, carPayments)//פונקציה לבדיקת מס תשלומים תקין ומחיר לאחר הנחה
    let carMonthPay = calcMonthPay(carPriceAfterSale, carPayments)//פונקציה לבדיקת שווי כל תשלום לאחר הנחה

    carTotalPrice.innerHTML = `The price of the car after sale is ${carPriceAfterSale.toFixed(2)}, and only ${carMonthPay.toFixed(2)} for every month`
}
function calcCarPrice(_carPrice, _carPayments) {
    if (_carPayments < 25) {
        return _carPrice * 0.95
    } else alert("24 payments is the max")
}
function calcMonthPay(_priceAfterSale, _carPayments) {
    return _priceAfterSale / _carPayments
}