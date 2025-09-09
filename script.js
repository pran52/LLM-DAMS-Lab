const promptInput = document.getElementById("user-prompt-input");
const nextButton = document.getElementById("next-button");
const llmSelecSect = document.getElementById("llm-selection-section");
const breakLine = document.getElementById("first-seperator");
const submitButton = document.getElementById("submit-button");
const optionChips = document.getElementById("llm-options");

function handleNextButton(){
    if(promptInput.value.trim() == ""){
        alert("Please enter a prompt.");
        return;
    }

    promptInput.setAttribute("disabled", "");
    promptInput.classList.add("filled-text-input");
    nextButton.style.display = "none";
    llmSelecSect.style.display = "flex";
    breakLine.style.display = "block";
    submitButton.style.display = "block";

    llmSelecSect.style.animation = "fade 0.5s linear";


}



nextButton.addEventListener("click", handleNextButton);
optionChips.addEventListener("click", (event) =>{
    if(event.target.type === 'checkbox' || event.target.tagName === 'LABEL'){
        return;
    }

    const checkbox = this.querySelector('input[type="checkbox');
    checkbox.checked = true;
});
