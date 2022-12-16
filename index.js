document.getElementById('card').style.setProperty('display', 'none', 'important') //altera propriedade de um elemento, podendo esconder e ativar com um botão



function ProcurarPaises() {
    document.getElementById('card').style.setProperty('display', 'block', 'important')
    let pais = document.getElementById('pais').value
    let finalURL = `https://restcountries.com/v3.1/name/${pais}?fullText=true`
    console.log(finalURL)
    fetch(finalURL) //busca informação da URL
        .then(function (response) {  //função que retorna o parâmetro response true ou false (acesso concedido ou negado)
            return response.json()
        })
        .then(function (data) { //traz os dados após acesso

            let bandeira = document.getElementById('bandeira')
            let nome = document.getElementById('nome')
            let capital = document.getElementById('capital')
            let continente = document.getElementById('continente')
            let populacao = document.getElementById('populacao')

            bandeira.src = data[0].flags.svg
            nome.innerHTML = pais[0].toUpperCase() + pais.substring(1) //converte sempre primeira letra para maíscula
            capital.innerHTML = data[0].capital
            continente.innerHTML = data[0].continents[0]
            populacao.innerHTML = data[0].population.toLocaleString('pt-BR') //convertendo para número com separador de milhar

        })

}