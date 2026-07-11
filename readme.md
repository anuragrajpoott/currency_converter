# 💱 My Currency Converter

A simple and responsive currency converter built using **HTML, CSS, and JavaScript**. The application allows users to convert between multiple currencies using real-time exchange rate logic and provides a clean, user-friendly interface.

## 🚀 Features

* Convert between 30+ international currencies
* Responsive and modern UI
* Currency swap functionality
* Decimal amount support
* Input validation
* Clean conversion results
* Fast client-side conversion
* Beginner-friendly code structure

## 📸 Preview

<img src="./screenshots/home.png" alt="Currency Converter UI" width="700"/>

## 🛠️ Tech Stack

* HTML5
* CSS3
* JavaScript (ES6)

## 📂 Project Structure

```text
currency-converter/
│
├── index.html
├── style.css
├── script.js
│
├── assets/
│
└── screenshots/
    └── home.png
```

## ⚙️ How It Works

Exchange rates are stored in a JavaScript object using USD as the base currency.

Conversion Formula:

```javascript
convertedAmount = (amount / rates[fromCurrency]) * rates[toCurrency];
```

Example:

```text
100 USD → INR
100 × 83.42 = 8342 INR
```

## 🏃 Running Locally

1. Clone the repository

```bash
git clone https://github.com/anuragrajpoott/currency_converter.git
```

2. Navigate to the project directory

```bash
cd currency-converter
```

3. Open `index.html` in your browser.

No installation or build steps required.

## 🔮 Future Improvements

* Live exchange rate API integration
* Conversion history using Local Storage
* Dark mode
* Currency search
* Exchange rate trend charts
* PWA support for offline usage

## 🎯 Learning Outcomes

Through this project, I practiced:

* DOM Manipulation
* Event Handling
* Form Validation
* JavaScript Functions
* Responsive UI Design
* Code Refactoring and Organization

## 👨‍💻 Author

Anurag Dangi

GitHub: https://github.com/anuragrajpoott

---

If you found this project helpful, consider giving it a ⭐.
