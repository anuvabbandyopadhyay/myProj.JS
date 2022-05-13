const input = require('sync-input');
let ex = ['JPY', 'EUR', 'RUB', 'USD', 'GBP'];
const exchangeRates = {
    USD: 1,
    JPY: 113.5,
    EUR: 0.89,
    RUB: 74.36,
    GBP: 0.75
}

console.log("Welcome to Currency Converter!");
for (let key in exchangeRates) {
    console.log(`1 USD equals  ${exchangeRates[key]} ${key}`);
}


for(i= 0; i< 10 ; i++){
    console.log("What do you want to do?");
console.log("1-Convert currencies 2-Exit program");
let choice = input();
if (choice == 1){
console.log("What do you want to convert?");
let currencyFrom = input("From: ").toUpperCase();
if(!ex.includes(currencyFrom)){
    console.log("Unknown currency");
}else{    
let currency = input("To: ").toUpperCase();
if (!ex.includes(currency)) {
    console.log("Unknown currency");
} else {
    let amount = Number(input("Amount: "));
    if (isNaN(amount)) {
        console.log("The amount has to be a number");
    }else if (amount < 1) {
        console.log("The amount can not be less than 1");
    } else {   
        let result = (amount / exchangeRates[currencyFrom] * exchangeRates[currency] ).toFixed(4);
        console.log(`Result: ${amount} ${currencyFrom} equals ${result} ${currency}`);break;
    }
}
}
}else if( choice == 2){
    console.log("Have a nice day!");break;
}else{
   console.log("Unknown input") ;
}
}
