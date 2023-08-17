

function withdrawbtn (){

    const withdrawInputValue = document.getElementById("withdrawInput");
    const withdrawInputValueString = withdrawInputValue.value;
    const withdrawvalue = parseFloat(withdrawInputValueString);
    withdrawInputValue.value = ""

    if(isNaN(withdrawvalue)){
        return alert("please enter number")
    }

    const getwithdrawvalue = document.getElementById("WithdrawDisplay");
    const previousDepositValueString = getwithdrawvalue.innerText;
    const previousWithdrawValue = parseFloat(previousDepositValueString);

    const currentWithdrawBalance = withdrawvalue + previousWithdrawValue;
    
    getwithdrawvalue.innerText = currentWithdrawBalance

    
    const finalTotal = document.getElementById("TotalDisplay");
    const finalTotalString = finalTotal.innerText;
    const getfinalTotal = parseFloat(finalTotalString);
    
    if(getfinalTotal < withdrawvalue){
        return alert("you have not enough money")
    }
    const totalBalance = getfinalTotal - currentWithdrawBalance;

    finalTotal.innerText = totalBalance
}

document.getElementById("withdrawInputBtn").addEventListener('click', withdrawbtn);

document.getElementById("withdrawInput").addEventListener('keyup', function(e){
    if(e.key === "Enter"){
        withdrawbtn()
    }
})