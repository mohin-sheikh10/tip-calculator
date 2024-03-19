const totalBillElement = document.getElementById('totalBill');
const tipsElement = document.getElementById('tips');
const calculateBtn = document.getElementById('calculateBtn');
const summaryContainer = document.getElementById('summaryContainer');
const total = document.getElementById('total');
const tipAmountElement = document.getElementById('tipAmount');
const taxAmountElement = document.getElementById('taxAmount');
const netAmountElement = document.getElementById('netAmount');


const minusBtn = document.getElementById('minusBtn');
const plusBtn = document.getElementById('plusBtn');
let personValue = document.getElementById('personValue');
let person = parseFloat(personValue.innerHTML);

let defaultPerson = 1;

plusBtn.addEventListener('click', function () {
    personValue.innerHTML = person +=1;
})

minusBtn.addEventListener('click', function () {
    if(person <= 1) {
        alert('Please Pay')
        return defaultPerson;
    }
    else {
        personValue.innerHTML = person -=1;
    }
})


calculateBtn.addEventListener('click', function() {
    const totalBill = parseFloat(totalBillElement.value);
    const tips = parseFloat(tipsElement.value);
    if(isNaN(totalBill)) {
        alert("Please Enter Your Total Amount!")
    }
    else {
        total.innerHTML = totalBill;
        const tipAmount = (totalBill / 100) * tips;
        tipAmountElement.innerHTML = tipAmount;
        const taxAmount = (totalBill / 100) * 5;
        taxAmountElement.innerHTML = taxAmount;
        const netAmount = totalBill + tipAmount + taxAmount;
        netAmountElement.innerHTML = netAmount / person;
        summaryContainer.classList.remove('hidden')
    }
    // console.log(tips)
})

