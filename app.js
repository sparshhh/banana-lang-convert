var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("output");

console.log(txtInput)

console.log(outputDiv)


btnTranslate.addEventListener("click", function clickEventHandler() {
    console.log("clicked!")
    console.log("input" , txtInput.value)
})

