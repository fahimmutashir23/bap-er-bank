
function depositbtn (){

    const inputValue = getInputValue("dipositInput");

    if(isNaN(inputValue)){
        return alert("please enter number")
    }

    const previousDepositValue = document.getElementById('diposistDisplay');
    const previousDepositValueString = previousDepositValue.innerText;
    const previousDeposit = parseFloat(previousDepositValueString);

    const curentDeposit = previousDeposit + inputValue;

    previousDepositValue.innerText = curentDeposit

    // total balance section

    const previousTotalBalance = document.getElementById('TotalDisplay');
    const previousTotalBalanceString = previousTotalBalance.innerText;
    const previousTotal = parseFloat(previousTotalBalanceString);

    const currentTotalBalance = previousTotal + inputValue;

    previousTotalBalance.innerText = currentTotalBalance
}

document.getElementById("dipositInputBtn").addEventListener('click', depositbtn);

document.getElementById("dipositInput").addEventListener('keyup', function(e){
    if(e.key === "Enter"){
        depositbtn()
    }
})