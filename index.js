let errorState = false;

document.getElementById("submit").onclick = function () {
    let value = document.getElementById("display").value;
    
    fetch(`http://api.mathjs.org/v4/?expr=${encodeURIComponent(value)}`)
        .then((response) => {
            if(response.ok){
            return response.text();
            }
            throw new Error("Network response was not ok");    
        })
        .then((data) => {
            
            document.getElementById("display").value = data;
            
        })
        .catch((error) => {
            console.log(error);
            document.getElementById("display").value = "Error";
            errorState = true;
            if(errorState){
                setTimeout(() => {
                    document.getElementById("display").value = "";
                    errorState = false;
                }, 2000);
            }
        });
    // const xhl = new XMLHttpRequest();
    // const requestExpression = `http://api.mathjs.org/v4/?exp=${encodeURIComponent(value)}`;

    // xhl.open("GET", requestExpression, true);
    // xhl.onload = function () {
    //     if(xhl.status === 200 && xhl.readyState === 4){
    //     document.getElementById("display").value = xhl.responseText;
    //     }
    //     else{
    //         document.getElementById("display").value = "Error";
    //         errorState = true;

    //         if (errorState) {
    //             setTimeout(() => {
    //                 document.getElementById("display").value = "";
    //                 errorState = false;
    //             }, 2000);
    //         }
    //     }
    // };
    // xhl.send();
};
document.getElementById("AC").onclick = function () {
    document.getElementById("display").value = "";
};
document.getElementById("DE").onclick = function () {
    let val = document.getElementById("display").value.slice(0, -1);
    document.getElementById("display").value = val;
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
