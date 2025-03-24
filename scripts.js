const key = '2674e364e56ec7c70b82de1b113acca8'


function colocarDadosNaTela(dados) {
    document.querySelector('.time-city').innerHTML ="Tempo em " + dados.name
    document.querySelector('.temperature').innerHTML = Math.floor(dados.main.temp) + '°C'
    document.querySelector('.climate').innerHTML = dados.weather[0].description
    document.querySelector('.moisture').innerHTML ="Umidade: " + dados.main.humidity + "%"
    document.querySelector('img').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`


}



async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( Resposta => Resposta.json())

    colocarDadosNaTela(dados)

}



function cliqueiNoBotao() {
    const cidade = document.querySelector('.input-city').value

    buscarCidade(cidade)

    document.querySelector('.input-city').value = ""
    
}

function cliqueiEnter(event) {
    if (event.key === "Enter") {
        const cidade = document.querySelector('.input-city').value;

        buscarCidade(cidade);
    }
}


