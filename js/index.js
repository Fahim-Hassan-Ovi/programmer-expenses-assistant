// globally declare all the value
// getting all the value


// add event listener for calculate button
const calculateButton = document.getElementById('calculate');
calculateButton.addEventListener('click', function () {
   const income = parseFloat(document.getElementById('income').value);
   const software = parseFloat(document.getElementById('software').value);
   const courses = parseFloat(document.getElementById('courses').value);
   const internet = parseFloat(document.getElementById('internet').value);

   // console.log({ income, software, courses, internet });
   // console.table({ income, software, courses, internet });

   const totalExpenses = software + courses + internet;
   const balance = income - totalExpenses;
   //    console.table({totalExpenses, balance});

   const totalExpensesElement = document.getElementById('total-expenses');
   totalExpensesElement.innerHTML = totalExpenses.toFixed(2);
   const balanceElement = document.getElementById('balance');
   balanceElement.innerHTML = balance.toFixed(2);

   const result = document.getElementById('results');
   result.classList.remove('hidden');
});

// add event listener for saving button
const calculateSavingsButton = document.getElementById('calculate-savings');
calculateSavingsButton.addEventListener('click', function () {
   const savingPercentage = parseFloat(document.getElementById('savings').value);
   const income = parseFloat(document.getElementById('income').value);
   const software = parseFloat(document.getElementById('software').value);
   const courses = parseFloat(document.getElementById('courses').value);
   const internet = parseFloat(document.getElementById('internet').value);

   // console.log(savingPercentage);

   const totalExpenses = software + courses + internet;
   const balance = income - totalExpenses;
   const savingAmount = (savingPercentage * balance) / 100;
   const remainingBalance = balance - savingAmount;
   const savingElement = document.getElementById('savings-amount');
   savingElement.innerText = savingAmount.toFixed(2);
   // console.log(savingAmount);
   const remainingElement = document.getElementById('remaining-balance');
   remainingElement.innerText = remainingBalance.toFixed(2);
   // console.log(savingAmount);
})

// history-tab functionality
const historyTab = document.getElementById('history-tab');
const assistantTab = document.getElementById('assistant-tab');
historyTab.addEventListener('click', function () {
   historyTab.classList.add('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');

   historyTab.classList.remove('text-gray-600');

   assistantTab.classList.remove('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');
})