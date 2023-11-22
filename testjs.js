const submitPrompt = document.querySelector('#prompt-button');

submitPrompt.addEventListener('click', () => {alert("button working")});

const eraserCheck = document.querySelector("#eraser-check");

eraserCheck.addEventListener('change', () => {
    alert('eraser change registered');
    eraserOn = !eraserOn;
    if (eraserOn === true) {
        previousPenColor = currentPenColor;
        currentPenColor = currentBackgroundColor;
    
    } else {
        currentPenColor = previousPenColor;
    }
});