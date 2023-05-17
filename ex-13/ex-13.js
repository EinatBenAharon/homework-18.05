
//משימה 13
// כתבו פונקציה כשלוחצים על הכפתור, עושה display לכפתור אחר

function displayBtn() {
    let displayBtn = document.querySelector("#btn_display");

    if (displayBtn.style.display === "none") {
        displayBtn.style.display = "block"
    } else {
        displayBtn.style.display = "none"
    }
}