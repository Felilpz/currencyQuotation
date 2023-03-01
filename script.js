// O "fetch" faz uma requisição
// DOLAR

fetch('https://economia.awesomeapi.com.br/json/last/usd-brl').then(
    respostaD => {
        return respostaD.json()
    }
).then(corpo => {
    document.querySelector('.dolar').innerHTML = `Preço do DÓLAR: <span class="marcador">${parseFloat(corpo.USDBRL.bid).toLocaleString('pt-br', { style: 'currency', currency: 'USD' })
        }</span>`

        document.querySelector('.altaD').innerHTML = `${parseFloat(corpo.USDBRL.high).toLocaleString('pt-br', {style: 'currency', currency: 'USD'})}`
        document.querySelector('.baixaD').innerHTML = `${parseFloat(corpo.USDBRL.low).toLocaleString('pt-br', {style: 'currency', currency: 'USD'})}`

        
        const buttonDolar = document.getElementById('buttonConverterD')
        buttonDolar.addEventListener('click', function() {
            let takeIt = Number(document.getElementById('converterD').value)
            let conversaoDolar = takeIt * corpo.USDBRL.bid
            console.log(conversaoDolar.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}))
            
            takeIt.focus()
        })
})

// EURO
fetch('https://economia.awesomeapi.com.br/json/last/eur-brl').then(
    respostaE => {
        return respostaE.json()
    }
).then(corpo => {
    document.querySelector('.euro').innerHTML = `Preço do EURO: <span class="marcador">${parseFloat(corpo.EURBRL.bid).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        }</span>`

        document.querySelector('.altaE').innerHTML = `${parseFloat(corpo.EURBRL.high).toLocaleString('pt-br', {style: 'currency', currency: 'EUR'})}`
        document.querySelector('.baixaE').innerHTML = `${parseFloat(corpo.EURBRL.low).toLocaleString('pt-br', {style: 'currency', currency: 'EUR'})}`
})

// LIBRA
fetch('https://economia.awesomeapi.com.br/json/last/gbp-brl').then(
    respostaL => {
        return respostaL.json()
    }
).then(corpo => {
    document.querySelector('.libra').innerHTML = `Preço da LIBRA: <span class="marcador">${parseFloat(corpo.GBPBRL.bid).toLocaleString('pt-br', { style: 'currency', currency: 'GBP' })}</spn >`

    document.querySelector('.altaL').innerHTML = `${parseFloat(corpo.GBPBRL.high).toLocaleString('pt-br', {style: 'currency', currency: 'GBP'})}`
    document.querySelector('.baixaL').innerHTML = `${parseFloat(corpo.GBPBRL.low).toLocaleString('pt-br', {style: 'currency', currency: 'GBP'})}`
})
