# Project Title

Technical assignment using Finnhub API's to search and retreive company details and show stock market prices in candlestick diagram.

## Description

This application makes search of a company, by typing company symbol e.g. AAPL.
Select date range using date inputs, for required timeframe of company stock prices.
"Search" button becomes available once all form fields are filled.

- App uses API's
  https://finnhub.io/docs/api/company-profile2 - to get company profile data.
  https://finnhub.io/docs/api/stock-candles - to get company stock prices history.

- App uses React Plotly.js to display candlechart.

- App makes backend call on each search and logs search query data.

### Installing

Prerequisites: Git and Node.js

```
# Clone this repository
$ git clone https://github.com/GytAndr/Tech-assignment.git

FOR BACKEND

  # Go into the repository
  $ cd BACKEND

  # Install dependencies
  $ npm install

  # Start Node server locally
  $ npm start

FOR FRONTEND

  # Go into the repository
  $ cd FRONTEND

  # Install dependencies
  $ npm install

  # Configure .env file by adding your Finnhub API key
  VITE_FINNHUB_API_KEY=yourAPIkey

  # Build
  $ npm run build

  ## Execute app
  # to run prod version
  $ npm run preview
  
  # to run dev version
  $ npm run dev
```

**NOTE**

**In order to test backend locally Cross-Origin Resource Sharing (CORS) needs to be disabled on client side, otherwise POST request will be blocked by browser.
One of ways how to disable it is to install Moesif Origin & CORS Changer plugin on Chrome/Chromium browsers**
