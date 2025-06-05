// Call the welcome message when the page loads
window.onload = function() {
    document.getElementById("result").innerHTML = "<h2>Welcome to the Currency Converter!</h2><p>Please enter your conversion details below.</p>";
};
function converter() {
    const currencies = {
        USD: 1.0,
        JPY: 113.5,
        EUR: 0.89,
        RUB: 74.36,
        GBP: 0.75
    };

    // Get user input from HTML elements
    let currency_from = document.getElementById("currencyFrom").value.toUpperCase();
    let currency_to = document.getElementById("currencyTo").value.toUpperCase();
    let amount = parseFloat(document.getElementById("amount").value);
    let resultDiv = document.getElementById("result");

    // Check if the currencies are valid
    if (currencies[currency_to] && currencies[currency_from]) {
        let conv = (amount * currencies[currency_to]) / currencies[currency_from];
        resultDiv.innerHTML = `Converted Amount: ${conv.toFixed(2)} ${currency_to}`;
    } else {
        resultDiv.innerHTML = "Currency not found!";
    }
}
