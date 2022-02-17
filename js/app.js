/*--------- function multiple calling------- */
    function getInputValue(InputId){
        const InputField=document.getElementById(InputId);
        const InputFieldAmount=parseFloat(InputField.value);
        return InputFieldAmount; 
    }
    function getTotalExpenses(expensesId){
        const totalExpenses=document.getElementById(expensesId);
        const totalExpensesText=totalExpenses.innerText;
        const previousTotalExpensesAmount= parseFloat(totalExpensesText);
        const  newExpensesTotal= getInputValue("food-input")+ getInputValue("rent-input")+ getInputValue("clothes-input");
        const expensesTotal= newExpensesTotal + previousTotalExpensesAmount;
        totalExpenses.innerText=expensesTotal;
        return totalExpenses;
    }
    function getBalance(balanceId,totalExpensesAmount){
        const balance=document.getElementById(balanceId);
        const previousBalanceText=balance.innerText;
        const previousBalanceAmount= parseFloat(previousBalanceText);
        const balanceTotalAmount=previousBalanceAmount + getInputValue("income-input");
        const restBalanceTotal=balanceTotalAmount - totalExpensesAmount ;
        balance.innerText=restBalanceTotal;
        return balance;
    }
    
    document.getElementById("calculate-button").addEventListener("click",function(){
       const incomeInputFieldValue= getInputValue("income-input");
       const foodInputFieldValue= getInputValue("food-input");
       const rentInputFieldValue= getInputValue("rent-input");
       const clothesInputFieldValue= getInputValue("clothes-input");
       const totalExpenses= getTotalExpenses("total-expenses");
       const totalExpensesAmount= parseFloat(totalExpenses.innerText); 
       const balance= getBalance("balance",totalExpensesAmount);
        });
        
    
    
    
        function getSavingAmount(saveInput){
            const saveInputField=document.getElementById(saveInput);
            const saveInputValue= parseFloat(saveInputField.value);
            const saving=document.getElementById("saving-amount");
            const previousSavingAmount=parseFloat(saving.innerText);
            const newSavingAmount= getInputValue("income-input") * saveInputValue/100;
            const totalSavingAmount= previousSavingAmount + newSavingAmount;
            saving.innerText=totalSavingAmount;
            return saving;
        }
        document.getElementById("save-button").addEventListener("click",function(){
            const remainingBalance=document.getElementById("remaining-balance");
            const previousRemainingBalance= parseFloat(remainingBalance.innerText);
           const savingAmountElement=getSavingAmount("save-input");
           const  savingAmountTotal= parseFloat(savingAmountElement.innerText);
    
          const pExpenses=document.getElementById('total-expenses');
          const pExpensesText=pExpenses.innerText;
          const pExpensesAmount= parseFloat(pExpensesText);
          const  pexpensesTotal= getInputValue("food-input")+ getInputValue("rent-input")+ getInputValue("clothes-input");
          const expensesTotal= pExpensesAmount + pexpensesTotal;
          
          const pbalance=document.getElementById('balance');
          const pbalanceText=pbalance.innerText;
          const pBalanceAmount= parseFloat(pbalanceText);
          const balanceTotallAmount=pBalanceAmount + getInputValue("income-input");
          const restBalanceTotall=balanceTotallAmount - expensesTotal ;
        
    
            const newRemainingBalance= restBalanceTotall- savingAmountTotal ; 
            const totalRemainingBalance=previousRemainingBalance + newRemainingBalance ;
            remainingBalance.innerText=totalRemainingBalance; 
            });
            
    

