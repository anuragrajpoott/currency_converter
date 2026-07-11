const rates = {
  AUD: 1.499530299,
  BGN: 1.8159102914,
  BRL: 5.675890728,
  CAD: 1.3674902515,
  CHF: 0.9035601313,
  CNY: 7.26957113,
  CZK: 23.3735231151,
  DKK: 6.9382011568,
  EUR: 0.9301501723,
  GBP: 0.7880001144,
  HKD: 7.8111514875,
  HRK: 6.6708409896,
  HUF: 367.0646784606,
  IDR: 16370.852968544,
  ILS: 3.7653607238,
  INR: 83.4196298669,
  ISK: 138.8359799715,
  JPY: 161.4800511881,
  KRW: 1384.0810167659,
  MXN: 18.2566235269,
  MYR: 4.7171007348,
  NOK: 10.6624718455,
  NZD: 1.6437402813,
  PHP: 58.7880566132,
  PLN: 4.0090407568,
  RON: 4.6283506954,
  RUB: 87.8426943018,
  SEK: 10.5702017728,
  SGD: 1.3556602244,
  THB: 36.7988155002,
  TRY: 32.5235854344,
  USD: 1,
  ZAR: 18.597672041
};

const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const form = document.getElementById("converter-form");
const amountInput = document.getElementById("amount");
const output = document.getElementById("output");
const currencies = Object.keys(rates);

function populateCurrencies() {
  currencies.forEach(currency => {
    const option1 = document.createElement("option");
    option1.value = currency;
    option1.textContent = currency;

    const option2 = option1.cloneNode(true);

    fromCurrency.appendChild(option1);
    toCurrency.appendChild(option2);
  });

  fromCurrency.value = "USD";
  toCurrency.value = "INR";
}

function convertCurrency(amount, from, to) {
  return (amount / rates[from]) * rates[to];
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const amount = Number(amountInput.value);

  if (!amount || amount <= 0) {
    output.textContent = "Please enter a valid amount.";
    return;
  }

  const convertedAmount = convertCurrency(
    amount,
    fromCurrency.value,
    toCurrency.value
  );

  output.textContent = `${amount} ${fromCurrency.value} = ${convertedAmount.toFixed(
    2
  )} ${toCurrency.value}`;
});

populateCurrencies();
