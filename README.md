API for stock

you can use method POST and add body.req = ${ticker symbols} to get current stock prices

example.

const result = axios.post('/stock', {
    ticker: "AAPL"
  })

Example
use POSTMAN
method POST->BODY->JSON-> {"ticker" : "AAPL"}
http://localhost:8000/stock
