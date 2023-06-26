document.getElementById("submit").onclick = function () {
    let value = document.getElementById("display").value;
    const xhl = new XMLHttpRequest();
    xhl.open("GET", `http://api.mathjs.org/v4/?expr=${value}`, true);
    xhl.onload = function () {
        document.getElementById("display").value = xhl.responseText;
    };
    xhl.send();
};
document.getElementById("AC").onclick = function () {
    document.getElementById("display").value = "";
};
document.getElementById("DE").onclick = function () {
    document.getElementById("display").value = "";
};

document.getElementById("two").onclick = function () {
    document.getElementById("display").value += "2";
};
document.getElementById("three").onclick = function () {
    document.getElementById("display").value += "3";
};
document.getElementById("four").onclick = function () {
    document.getElementById("display").value += "4";
};
document.getElementById("five").onclick = function () {
    document.getElementById("display").value += "5";
};
document.getElementById("six").onclick = function () {
    document.getElementById("display").value += "6";
};
document.getElementById("seven").onclick = function () {
    document.getElementById("display").value += "7";
};
document.getElementById("eight").onclick = function () {
    document.getElementById("display").value += "8";
};
document.getElementById("nine").onclick = function () {
    document.getElementById("display").value += "9";
};
document.getElementById("single-zero").onclick = function () {
    document.getElementById("display").value += "0";
};
document.getElementById("double-zero").onclick = function () {
    document.getElementById("display").value += "00";
};
document.getElementById("period").onclick = function () {
    document.getElementById("display").value += ".";
};
document.getElementById("addition").onclick = function () {
    document.getElementById("display").value += "+";
};
document.getElementById("substract").onclick = function () {
    document.getElementById("display").value += "-";
};
document.getElementById("multiply").onclick = function () {
    document.getElementById("display").value += "*";
};

document.getElementById("divide").onclick = function () {
    document.getElementById("display").value += "/";
    
};
