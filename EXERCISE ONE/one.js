let array1 = [];


function operation() {
    let iO = document.getElementById("inputOne");
    let iT = document.getElementById("inputTwo");
    let dc = document.getElementById("container");

    if ((iO.value >= 0 && iO.value <= 10) && (iO.value != "")) {

        array1.push(iT.value);
        dc.innerHTML = array1;

    } else {
        return alert("ERROR");
    }

}