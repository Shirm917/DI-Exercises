// The program should take the currency which the user currently has and the currency in which they would like to receive, as well as the amount of money. Afterwards, the program will output the correct exchange rate based on the data from the APIs.
// First, you need to fetch all the supported currencies, in order to add the currencies options (ie FROM - To) in the currency converter. Check out this page on Supported Codes Endpoint from the ExchangeRate API documentation.
// To convert from a currency, to another one, you need to fetch conversion rate from the Pair Conversion API endpoint. Check out this page on Pair conversion requests from the ExchangeRate API documentation.


const fromSelect = document.getElementById("fromCurrency");
const toSelect = document.getElementById("toCurrency");
const amount = document.getElementById("currencyAmount");
async function currencyOptions() {
    try {
        const currenciesApi = await fetch("https://v6.exchangerate-api.com/v6/62332e912aa2a58327553759/codes");
        const currenciesArray = await currenciesApi.json();
        appendCurrencies(currenciesArray.supported_codes, fromSelect);
        appendCurrencies(currenciesArray.supported_codes, toSelect);
    } catch(err) {
        alert(err);
    }
}

currencyOptions();

function appendCurrencies(arr, select) {
    arr.forEach(element => {
        const optionElement = document.createElement("option");
        const optionText = document.createTextNode(`${element[0]} - ${element[1]}`);
        optionElement.setAttribute("value", element[0]);
        optionElement.append(optionText);
        select.append(optionElement);
    });
}

function addEventListeners() {
    const currencyForm = document.getElementById("currencyForm");
    currencyForm.addEventListener("submit", exchange);
    const switchBtn = document.getElementById("switch");
    switchBtn.addEventListener("click", switchCurrencies);
}

addEventListeners()

async function exchange(event) {
    try {
        event.preventDefault();
        const fromValue = fromSelect.value;
        const toValue = toSelect.value;
        const currencyChangeApi = await fetch(`https://v6.exchangerate-api.com/v6/62332e912aa2a58327553759/pair/${fromValue}/${toValue}/1`)
        const currencyChangeObj = await currencyChangeApi.json();
        const oneAmount = currencyChangeObj.conversion_result;
        const conversionRate = currencyChangeObj.conversion_rate;
        const amountValue = amount.value;
        const convertedAmount = amountValue * conversionRate; 
        displayAmount(convertedAmount, oneAmount);
    } catch(err) {
        alert(err);
    }
}

function displayAmount(ConversionAmount, defaultAmount) {
    const conversionPara = document.getElementById("conversion");
    const defaultPara = document.getElementById("default");
    conversionPara.textContent = "";
    defaultPara.textContent = "";
    const amountNum = document.createTextNode(`${ConversionAmount} ${toSelect.value}`);
    const defaultText = document.createTextNode(`1 ${fromSelect.value} is ${defaultAmount} ${toSelect.value}`);
    conversionPara.append(amountNum);
    defaultPara.append(defaultText);
}

function switchCurrencies(event) {
    [toSelect.value, fromSelect.value] = [fromSelect.value, toSelect.value];
    exchange(event);
}

