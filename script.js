const light = document.querySelector("#light");
const pink = document.querySelector("#pink");
const blue = document.querySelector("#blue");
const green = document.querySelector("#green");
const testButton = document.querySelector("#testButton");
const resetButton = document.querySelector("#resetButton");
const name1 = document.querySelector("#name1");
const name2 = document.querySelector("#name2");
const resultText= document.querySelector("#resultText");
const resultBar1 = document.querySelector("#resultBar1");
const resultBar2 = document.querySelector("#resultBar2");

var themeColor = "", themeGradient = "";
var percent = 0;
var oldName1 = "`", oldName2 = "`";  // blocks re-testing with identical names

light.addEventListener("click", function() {
    themeColor = "rgb(211, 211, 211)";
    themeGradient = "linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(211, 211, 211, 1) 20%, rgba(150, 150, 150, 1) 100%)";
    theme();
});

pink.addEventListener("click", function() {
    themeColor = "rgb(255, 192, 203)";
    themeGradient = "linear-gradient(135deg, rgba(255, 191, 199, 1) 0%, rgba(255, 192, 203, 1) 20%, rgba(212, 159, 167, 1) 100%)";
    theme();
});

blue.addEventListener("click", function() {
    themeColor = "rgb(173, 216, 230)";
    themeGradient = "linear-gradient(135deg, rgba(205, 237, 247, 1) 0%, rgba(173, 216, 230, 1) 20%, rgba(133, 182, 199, 1) 100%)";
    theme();
});

green.addEventListener("click", function() {
    themeColor = "rgb(202, 255, 202)";
    themeGradient = "linear-gradient(135deg, rgba(212, 255, 212, 1) 0%, rgba(202, 255, 202, 1) 20%, rgba(166, 224, 166, 1) 100%)";
    theme();
});

function theme() {
    document.body.style.background = `radial-gradient(${themeColor},rgb(0, 0, 0))`;
    document.body.style.color = themeColor;

    name1.style.background = themeGradient;

    name2.style.background = themeGradient;

    resetButton.style.color = themeColor;

    testButton.style.background = themeGradient;

    resultBar2.style.background = themeGradient;
}

testButton.addEventListener("click", function() {
    if (oldName1 != name1.value || oldName2 != name2.value) {
        if ((name1.value.toLowerCase() == "hack100" && name2.value.toLowerCase() == "100") || (name2.value.toLowerCase() == "hack100" && name1.value.toLowerCase() == "100")) {
            percent = 100;
        }
        else {
            percent = Math.floor(Math.random() * 101);
        }

        if (name1.value == "" || name2.value == "") {
            resultText.style.fontSize = "20px";
            resultText.innerHTML = "NAME 1 and NAME 2 must be completed!";
            resultBar1.style.visibility = "hidden";
            resultBar2.style.visibility = "hidden";
        }
        else {
            resultText.style.fontSize = "50px";
            resultText.innerHTML = `${percent}%`;
            resultBar2.style.width = `${percent}%`;
            resultBar1.style.visibility = "visible";
            resultBar2.style.visibility = "visible";
        }

        oldName1 = name1.value;
        oldName2 = name2.value;
    }
});

resetButton.addEventListener("click", function() {
    resultBar1.style.visibility = "hidden";
    resultBar2.style.visibility = "hidden";
    resultText.innerHTML = "";
    name1.value = "";
    name2.value = "";
    oldName1 = "`";
    oldName2 = "`";
});
