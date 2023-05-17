
//משימה 8
//בבית הספר "גני הצבי" יוצאים לטיול שנתי.
// על פי הנחיות משרד החינוך, על כל קבוצה של 30 תלמידים דרוש מאבטח וחובש

function schoolTrip() {
    let numOfKids = parseInt(document.querySelector("#input_numOfKids").value);//מספר תלמידים מהאינפוט
    let securityGuard = 30;//מאבטח 
    let paramedic = 30;//פרמדיק
    let firstAidKit = 50;//ערכת עזרה ראשונה
    let printSchool = document.querySelector("#span_schoolTrip")//הדפסת תוצאה
    let numSecurityGuard = calcTripSecurity(numOfKids, securityGuard);//חישוב מאבטח על כמות הילדים
    let numParamedic = calcParamedic(numOfKids, paramedic);//חישוב פרמדיק על כמות הילדים
    let numFirstAidKit = calcFirstAid(numOfKids, firstAidKit);//חישוב ערכות עזרה ראשונה על כמות הילדים
    printSchool.innerHTML = `For this number of pupils needs ${numSecurityGuard} security guards, ${numParamedic} paramedics and ${numFirstAidKit} first aid kits. Have a joy!`
}
function calcTripSecurity(_numOfKids, _securityGuard) {
    return Math.ceil(_numOfKids / _securityGuard)
}
function calcParamedic(_numOfKids, _paramedic) {
    return Math.ceil(_numOfKids / _paramedic)
}
function calcFirstAid(_numOfKids, _firstAidKit) {
    return Math.ceil(_numOfKids / _firstAidKit)
}