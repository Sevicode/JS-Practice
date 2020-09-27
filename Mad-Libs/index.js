//Step1: find the element we want the event on
let button = document.getElementById('button')

//Step2: Define the event listener function

let onButtonClick = function () {
    event.preventDefault()
    let inputAdjective = document.getElementById("field1").value;
    document.getElementById('words').textContent = inputAdjective;
    document.getElementById("awesomeFormName").elements[0].value = null;
    
}
//step3: Attach the event listener to the element

button.addEventListener("click", onButtonClick);
