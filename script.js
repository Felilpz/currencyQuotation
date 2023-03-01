// O "fetch" faz uma requisição
// DOLAR

fetch('https://economia.awesomeapi.com.br/json/last/usd-brl').then(
    respostaD => {
        return respostaD.json()
    }
).then(corpo => {
    document.querySelector('.dolar').innerHTML = `Preço do DÓLAR: <span class="marcador">${parseFloat(corpo.USDBRL.bid).toLocaleString('pt-br', { style: 'currency', currency: 'USD' })
        }</span>`


})

// EURO
fetch('https://economia.awesomeapi.com.br/json/last/eur-brl').then(
    respostaE => {
        return respostaE.json()
    }
).then(corpo => {
    document.querySelector('.euro').innerHTML = `Preço do EURO: <span class="marcador">${parseFloat(corpo.EURBRL.bid).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        }</span>`
})

// EURO
fetch('https://economia.awesomeapi.com.br/json/last/gbp-brl').then(
    respostaL => {
        return respostaL.json()
    }
).then(corpo => {
    document.querySelector('.libra').innerHTML = `Preço da LIBRA: <span class="marcador">${parseFloat(corpo.GBPBRL.bid).toLocaleString('pt-br', { style: 'currency', currency: 'GBP' })
    ´

    document.querySelector('.altaL').innerHTML = `Alta: <span class="marcador">${}</span>`

})