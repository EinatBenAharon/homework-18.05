
//משימה 5
//כתוב תוכנית עבור משרדי "הרכבת הקלה" בירושלים לחישוב כדאיות ורווח מהפעלת הרכבת

function calcTrain() {
    let price = 6.60;
    let numOfCarTrain = parseInt(document.querySelector("#input_carNum").value);
    let hourOfDay = parseInt(document.querySelector("#input_hour").value);
    let driverSalary = parseInt(document.querySelector("#input_salary").value);

    let capacity = trainCapacity(hourOfDay); //פונקציה לחשוב קיבולת לפי השעה ביום
    let passenger = calcPassenger(capacity, numOfCarTrain); // פונקציה לחישוב כמות נוסעים לפי קיבולת ומס קרונות
    let totalCost = totalMoney(passenger, price); // פונקציה לחישוב הכנסה מהנוסעים
    let sumOfMoney = calcVat(totalCost); // פונקציה לחישוב הכנסה מהנוסעים לאחר ניכוי מעמ 
    sumOfMoney = calcDriverSalary(sumOfMoney, driverSalary); //פונקציה לחישוב הכנסה לאחר הורדת משכורת של הנהג ושמירה במשתנה סופי 
    let printHowMuch = document.querySelector("#span_train")

    let color = "red"
    if (sumOfMoney > 0) {
        color = "green"
    }

    printHowMuch.style.background = color
    printHowMuch.innerHTML = `${sumOfMoney.toFixed(2)}`;
}

function trainCapacity(hourOfDay) {
    if (hourOfDay >= 5 && hourOfDay < 12) {
        return 1;
    } else if (hourOfDay >= 12 && hourOfDay < 17) {
        return 0.9;
    } else if (hourOfDay >= 17 && hourOfDay < 23) {
        return 0.7;
    } else {
        return 0;
    }
}
function calcPassenger(_capacity, _numOfCarTrain) {
    return _numOfCarTrain * 120 * _capacity;
}
function totalMoney(_passenger, _price) {
    return _passenger * _price;
}
function calcVat(_totalCost) {
    return _totalCost / 1.17;
}
function calcDriverSalary(_sumOfMoney, _driverSalary) {
    return _sumOfMoney - _driverSalary;
}


