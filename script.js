document.addEventListener("DOMContentLoaded", function () {
    let display = document.getElementById("display");
    let buttons = document.querySelectorAll(".btn");

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            let value = this.getAttribute("data-value");
            if (value === "=") {
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = "Error";
                }
            } else if (value === "C") {
                display.value = "";
            } else {
                display.value += value;
            }
        });
    });
    document.getElementById("toggle-mode").addEventListener("click", function () {
        document.body.classList.toggle("light-mode");
        this.textContent = document.body.classList.contains("light-mode") ? "☀️" : "🌙";
    });
});
