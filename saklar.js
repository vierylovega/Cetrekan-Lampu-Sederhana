function saklar() {
    let toggle1 = document.getElementById('AcceptConditions1');
    let toggle2 = document.getElementById('AcceptConditions2');
    let toggle3 = document.getElementById('AcceptConditions3');

    let lampu1 = document.getElementById('lampu1');
    let lampu2 = document.getElementById('lampu2');
    let lampu3 = document.getElementById('lampu3');

    if (toggle1.checked) {
        lampu1.src ="assets/images/on.png"
    }
    else {
        lampu1.src = "assets/images/off.png"
    }

    if (toggle2.checked) {
        lampu2.src ="assets/images/on.png"
    }
    else {
        lampu2.src = "assets/images/off.png"
    }

    if (toggle3.checked) {
        lampu3.src ="assets/images/on.png"
    }
    else {
        lampu3.src = "assets/images/off.png"
    }

}