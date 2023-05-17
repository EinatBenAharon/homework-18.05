//משימה 17
//כתבו פונקציה הקולטת מידע מהמשתמש ומדפיסה אותו 10 פעמים בלולאת for.

function userPrompt() {
    let userTxt = prompt("כל דבר צריך להגיד 10 פעמים?")
    for (let j = 0; j < 11; j++)
        document.querySelector("#span_userTxt").innerHTML += userTxt + "<br>"
}