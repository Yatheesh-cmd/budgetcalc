function calculateBudget() {
    const salary = parseFloat(document.getElementById("salary").value);
    const expenses = parseFloat(document.getElementById("expenses").value);

    if (isNaN(salary) || isNaN(expenses)) {
        alert("Please enter valid numbers for salary and expenses.");
        return;
    }

    const totalMonthlyExpense = expenses;
    const remainingBalance = salary - expenses;

    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `
        <h2>Result:</h2>
        <p>Total Monthly Expense: ${totalMonthlyExpense}</p>
        <p>Remaining Balance: ${remainingBalance}</p>
    `;
}
