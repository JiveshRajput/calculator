let scr = document.getElementById("screen");
let btn = document.querySelectorAll(".calcBtn");
let screenValue = "";
for (val of btn) {
    val.addEventListener("click", (e) => {
        btnClick = e.target.value;
        if (btnClick == "c") {
            screenValue = "";
            scr.value = screenValue;
        }
        else if (btnClick == "=") {
            scr.value = eval(screenValue);
            screenValue = eval(screenValue);

        }
        else if (btnClick == "b") {
            newScreenValue = "";
            newScreenValue = screenValue.slice(0, -1);
            screenValue = newScreenValue;
            scr.value = screenValue;
        }
        else {
            screenValue += btnClick;
            scr.value = screenValue;
        }
    });
}

