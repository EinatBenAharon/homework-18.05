
//משימה 10
//כתבו קוד שמקבל BMI 

function checkBMI() {
    let userHeight = parseInt(document.querySelector("#input_BMIHeight").value);
    let userWeight = parseInt(document.querySelector("#input_BMIWeight").value);
    let printBMI = document.querySelector("#span_BMI")
    let userBMI = userWeight / (userHeight / 100) ** 2
    if (userBMI <= 18) {
        printBMI.innerHTML = `Your BMI ${userBMI.toFixed(2)} is too low`
        printBMI.style.background = "red"
    } else if (userBMI >= 25) {
        printBMI.innerHTML = `Your BMI ${userBMI.toFixed(2)} is too high`
        printBMI.style.background = "red"
    } else {
        printBMI.innerHTML = `Your BMI ${userBMI.toFixed(2)} is normal`
        printBMI.style.background = "green"
    }
}