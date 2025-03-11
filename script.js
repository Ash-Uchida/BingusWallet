let balance = 0;

function addTransaction() {
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const type = document.getElementById('type').value;

    if (!description || isNaN(amount)) {
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

