//משימה 16
//כתבו פונקציה הקולטת מספר מהמשתמש x ומדפיסה Hello שוב ושוב x פעמים

function helloPrompt() {
    let numHello = prompt("הכנס מספר")
    for (let i = 0; i < numHello; i++)
        document.querySelector("#span_hello").innerHTML += "Hello "
}