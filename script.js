// Firebase initialization and functions are already handled in index.html
// We can keep this file for other operations like Budget, Transactions, etc.

// Handling budget and transactions logic
let balance = 0;
let monthlyBudget = 0;

function setBudget() {
    const budgetInput = document.getElementById('monthlyBudget').value;
    if (!budgetInput || isNaN(budgetInput) || budgetInput <= 0) {
        alert("Please enter a valid monthly budget.");
        return;
    }
    
    monthlyBudget = parseFloat(budgetInput);
    const weeklyBudget = (monthlyBudget / 4).toFixed(2);
    document.getElementById('weeklyBudget').textContent = weeklyBudget;
}

function addTransaction() {
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const type = document.getElementById('type').value;

    if (!description || isNaN(amount) || amount <= 0) {
        alert('Please enter valid details');
        return;
    }

    const transactionList = document.getElementById('transactions');
    const listItem = document.createElement('li');
    listItem.textContent = `${description}: $${amount} (${type})`;
    
    transactionList.appendChild(listItem);
    
    balance += type === 'income' ? amount : -amount;
    document.getElementById('balance').textContent = balance.toFixed(2);
    
    document.getElementById('description').value = '';
    document.getElementById('amount').value = '';
}

// PMT Calculation function remains the same
function calculatePMT() {
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const annualRate = parseFloat(document.getElementById('loanRate').value) / 100;
    const loanTerm = parseFloat(document.getElementById('loanTerm').value);

    if (!loanAmount || !annualRate || !loanTerm || loanAmount <= 0 || loanTerm <= 0) {
        alert("Please enter valid loan details.");
        return;
    }

    const monthlyRate = annualRate / 12;
    const pmt = (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -loanTerm));
    
    document.getElementById('pmtResult').textContent = pmt.toFixed(2);
}

// Future Value function remains the same
function calculateFV() {
    const savingsInitial = parseFloat(document.getElementById('savingsInitial').value);
    const savingsMonthly = parseFloat(document.getElementById('savingsMonthly').value);
    const annualRate = parseFloat(document.getElementById('savingsRate').value) / 100;
    const savingsTerm = parseFloat(document.getElementById('savingsTerm').value);

    if (!savingsInitial || !savingsMonthly || !annualRate || !savingsTerm || savingsInitial < 0 || savingsMonthly < 0 || savingsTerm <= 0) {
        alert("Please enter valid savings details.");
        return;
    }

    const monthlyRate = annualRate / 12;
    let futureValue = savingsInitial * Math.pow(1 + monthlyRate, savingsTerm);

    for (let i = 1; i <= savingsTerm; i++) {
        futureValue += savingsMonthly * Math.pow(1 + monthlyRate, savingsTerm - i);
    }

    document.getElementById('fvResult').textContent = futureValue.toFixed(2);
}
