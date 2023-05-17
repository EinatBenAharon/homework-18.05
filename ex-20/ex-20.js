
//משימה 20
//בנו דף עם טקסט המכיל בתוכו את המספר 0 ושלושה כפתורים, אחד תפקידו להעלות את המספר ב1 כל פעם שלוחצים עליו, השני להוריד ב1 והשלישי מבצעריסט ומחזיר את המספר ל0
let counter = 0
document.querySelector("#span_counter").innerHTML = counter
function plusCounter() {
    counter++;
    document.querySelector("#span_counter").innerHTML = counter
}
function minusCounter() {
    counter--;
    document.querySelector("#span_counter").innerHTML = counter
}
function resetCounter() {
    counter = 0;
    document.querySelector("#span_counter").innerHTML = counter
}