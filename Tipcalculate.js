let billAmountInput = document.getElementById("billAmount");
let percentageTipInput = document.getElementById("percentageTip");
let tipAmountElement = document.getElementById("tipAmount");
let totalAmountElement = document.getElementById("totalAmount");
let errorMessageElement = document.getElementById("errorMessage")

function calculateTip() {

    let billAmountInputValue = billAmountInput.value;
    let percentageTipInputValue = percentageTipInput.value;
    if (billAmountInputValue === "") { //Here, if the bill input value is empty, error message will be displayed
        errorMessageElement.textContent = "Please Enter a Valid Input";
    } else if (percentageTipInputValue === "") { //Here, if the percentage tip input value is empty, error message will be displayed
        errorMessageElement.textContent = "Please Enter a Valid Input";
    } else {
        tipAmountElement.value = parseInt(billAmountInputValue) * (parseInt(percentageTipInputValue) / 100);
        totalAmountElement.value = parseInt(billAmountInputValue) + parseInt(tipAmountElement.value);
        errorMessageElement.textContent = "";
    }
}