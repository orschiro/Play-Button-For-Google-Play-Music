var result = "Play";

var button = document.querySelector('[id="playpausebutton"]')
if (button.getAttribute("aria-disabled") != "true") {
    button.click()
    if (!button.getAttribute("class").includes(" playing"))
        result = "Pause";
}
result;
