function depositAccount(){
    let amountMoney = Number(window.prompt('Type initial amount of money', '1000')),
        numberYears = Number(window.prompt('Type number of years', '1')),
        percentageYear = Number(window.prompt('Type percentage of years', '10')),
        totalProfit = 0,
        totalAmount = 0;

    if( amountMoney >= 1000 && numberYears >= 1 && percentageYear <= 100){

        for (let i = 1; i <= numberYears; i++) {
            let currentPercentage = (amountMoney + totalProfit) / 100 * percentageYear;
            totalProfit += currentPercentage;
        }
        totalAmount = amountMoney + totalProfit;
        alert(`
        Initial amount: ${amountMoney}
        Number of years: ${numberYears}
        Percentage of year: ${percentageYear}
        
        Total profit: ${totalProfit.toFixed(2)}
        Total amount: ${totalAmount.toFixed(2)}
        `)
    } else {
        alert('Invalid input data');
    }
}

depositAccount()