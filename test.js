const textField = document.querySelector(".prompt-text");
const submitPrompt = document.querySelector("#submit-prompt-button");

submitPrompt.addEventListener('click', () => {
    alert('button working');
    if (textField.value !== '') {
        textField.value = '';
    } else {
        alert("empty text field");
    }
});
