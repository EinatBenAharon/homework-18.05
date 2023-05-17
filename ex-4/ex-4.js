//משימה 4
// כתבו תוכנית הקולטת מספר המייצג שעה בין 5 – 23 

function timeBless() {
    const timeOfTheDay = parseInt(document.querySelector("#input_time").value)
    const blessOfTime = document.querySelector("#span_time")
    if (timeOfTheDay >= 5 && timeOfTheDay <= 11) {
        blessOfTime.innerHTML = "Good Morning!"
    } else if (timeOfTheDay >= 12 && timeOfTheDay <= 17) {
        blessOfTime.innerHTML = "Good Afternoon!"
    } else if (timeOfTheDay >= 18 && timeOfTheDay <= 23) {
        blessOfTime.innerHTML = "Good Night!"
    } else {
        blessOfTime.innerHTML = "You need to sleep now."
    }
}