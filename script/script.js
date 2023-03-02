// O "fetch" faz uma requisição
// DOLAR

fetch('https://economia.awesomeapi.com.br/json/last/usd-brl')
    .then(respostaD => {
        return respostaD.json();
    })
    .then(corpo => {
        document.querySelector('.dolar').innerHTML = `Preço do DÓLAR: <span class="marcador">${parseFloat(corpo.USDBRL.bid).toLocaleString('pt-br', { style: 'currency', currency: 'USD' })}</span>`;
        document.querySelector('.altaD').innerHTML = `${parseFloat(corpo.USDBRL.high).toLocaleString('pt-br', { style: 'currency', currency: 'USD' })}`;
        document.querySelector('.baixaD').innerHTML = `${parseFloat(corpo.USDBRL.low).toLocaleString('pt-br', { style: 'currency', currency: 'USD' })}`;

        const buttonDolar = document.getElementById('buttonConverterD');
        let dolarDiv = document.querySelector('.dolarDiv');
        let resultadoDolar = null;

        buttonDolar.addEventListener('click', function () {
            let takeIt = document.getElementById('converterD').value;
            let takeIt2 = document.getElementById('converterD'); //só pra poder usar o .focus sem acionar o .value

            if (takeIt === '' || isNaN(takeIt)) {
                alert('Insira um valor antes de clicar no botão!');
                return;
            }

            let conversaoDolar2 = takeIt * corpo.USDBRL.bid;
            let conversaoDolar = conversaoDolar2.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

            if (resultadoDolar === null) {
                resultadoDolar = document.createElement('p');
                dolarDiv.appendChild(resultadoDolar);
            }

            resultadoDolar.innerHTML = `DÓLAR CONVERTIDO: <span class="marcador">${conversaoDolar}</span>`;

            takeIt2.focus();


        });
    });



// EURO
fetch('https://economia.awesomeapi.com.br/json/last/eur-brl').then(
    respostaE => {
        return respostaE.json()
    }
).then(corpo => {
    document.querySelector('.euro').innerHTML = `Preço do EURO: <span class="marcador">${parseFloat(corpo.EURBRL.bid).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>`
    document.querySelector('.altaE').innerHTML = `${parseFloat(corpo.EURBRL.high).toLocaleString('pt-br', { style: 'currency', currency: 'EUR' })}`
    document.querySelector('.baixaE').innerHTML = `${parseFloat(corpo.EURBRL.low).toLocaleString('pt-br', { style: 'currency', currency: 'EUR' })}`

    const buttonEuro = document.getElementById('buttonConverterE')
    let euroDiv = document.querySelector('.euroDiv')
    let resultadoEuro = null

    buttonEuro.addEventListener('click', function () {
        let takeIt3 = document.getElementById('converterE').value
        let takeIt4 = document.getElementById('converterE') //só pra poder usar o focus sem acionar o .value

        if (takeIt3 == '' || isNaN(takeIt3)) {
            alert('Insira um valor antes de clicar no botão!');
            return;
        }

        let converterEuro = takeIt3 * corpo.EURBRL.bid
        let converterEuro2 = converterEuro.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
        //    console.log(converterEuro2)

        if(resultadoEuro === null) {
            resultadoEuro = document.createElement('p')
            euroDiv.appendChild(resultadoEuro)
        }

        resultadoEuro.innerHTML = `EURO CONVERTIDO: <span class="marcador">${converterEuro2}</span>`
        takeIt4.focus()
    })
})



// LIBRA
fetch('https://economia.awesomeapi.com.br/json/last/gbp-brl').then(
    respostaL => {
        return respostaL.json()
    }
).then(corpo => {
    document.querySelector('.libra').innerHTML = `Preço da LIBRA: <span class="marcador">${parseFloat(corpo.GBPBRL.bid).toLocaleString('pt-br', { style: 'currency', currency: 'GBP' })}</spn >`

    document.querySelector('.altaL').innerHTML = `${parseFloat(corpo.GBPBRL.high).toLocaleString('pt-br', { style: 'currency', currency: 'GBP' })}`
    document.querySelector('.baixaL').innerHTML = `${parseFloat(corpo.GBPBRL.low).toLocaleString('pt-br', { style: 'currency', currency: 'GBP' })}`

    const buttonLibra = document.getElementById('buttonConverterL')
    let libraDiv = document.querySelector('.libraDiv')
    resultadoLibra = null;

    buttonLibra.addEventListener('click', function() {
        let takeLibra = document.getElementById('converterL').value
        let takeLibra2 = document.getElementById('converterL') //só pra poder usar o focus sem acionar o .value
        
        if(takeLibra == '' || isNaN(takeLibra)) {
            alert('Insira um valor antes de clicar no botão!');
            return;
        }

        let converterLibra = takeLibra * corpo.GBPBRL.bid
        let converterLibra2 = converterLibra.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
        // console.log(converterLibra2)

        if(resultadoLibra === null) {
            resultadoLibra = document.createElement('p')
            libraDiv.appendChild(resultadoLibra)
        }

        resultadoLibra.innerHTML = `LIBBRA CONVERTIDA: <span class="marcador">${converterLibra2}</span>`
        takeLibra2.focus()
    })
})


/*
Melhorias para o código

1. Separar código em mais de um arquivo(ta tudo misturado)
2. Tratamento de erro(se nao conseguir acessar API, o código n vai ser executado)
3. Testes automatizados(acho q o console.log ja serve kkk)
4. Abstração de API(pesquisar um pouco mais)

*/