// O "fetch" faz uma requisição
// DOLAR
fetch('https://economia.awesomeapi.com.br/json/last/usd-brl').then(
    respostaD => {
        return respostaD.json()
    }
).then(corpo => {
    document.querySelector('.dolar').innerHTML = "Preço do DÓLAR: " + corpo.USDBRL.bid;
})

// EURO
fetch('https://economia.awesomeapi.com.br/json/last/eur-brl').then (
    respostaE => {
        return respostaE.json()
    }
).then(corpo => {
    document.querySelector('.euro').innerHTML = "Preço do EURO: " + corpo.EURBRL.bid;
})

// EURO
fetch('https://economia.awesomeapi.com.br/json/last/gbp-brl').then (
    respostaL => {
        return respostaL.json()
    }
).then(corpo => {
    document.querySelector('.libra').innerHTML = "Preço da LIBRA: " + corpo.GBPBRL.bid;
})