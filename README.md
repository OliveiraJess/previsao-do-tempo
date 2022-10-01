<h1  align="center">Previsão do Tempo</h1>
<div align="center">
<img src="https://img.shields.io/static/v1?label=Projeto&message=Javascript&color=f0f221&style=for-the-badge&logo=ghost"/>
  
</br>
</br>

</div>
<div align="center">
<img height="400px" src="https://github.com/OliveiraJess/previsao-do-tempo/blob/main/img/image.png" alt="orleans/sc e orleans/us" />
</div>

</br>

<p align="center">Nesse projeto é possível ver a previsão do tempo com base no país e cidade ou habilitando a geolocalização.</p>


</br>

<h2>🚀 Objetivo</h2>

<p>Feito pra testar meus conhecimentos em consumo de API's.</p>

<h2>🔧 Instalação</h2>

<p>Para utilizar a aplicação você precisa usar o comando: </p>

```
- git clone
```
<h2>⚙️ Utilizando</h2>

<p>Selecione o país (opcional - default US) e digite a cidade (obrigatório) e click no botão ou pressione "Enter".</p>

<p>Você também pode habilitar a geolocalização (opcional)</p>

<p>A API de países (Countrylayer API) utilizada no projeto possui limite de 50 requisições mensais, dessa forma, se você receber os códigos de erro abaixo, o número de requisicões foi atingido.</p>

```
- status 429
- status 104

```
<p>Você pode continuar a busca sem utilizar o país, digitando apenas a cidade, porém caso haja mais de uma cidade com o mesmo haverá incompatibilidade</p>

<p>Outra forma de resolver é entrar no site e realizar o cadastro gratuito para obter uma chave. Essa chave você substitui em:</p>

```
const apiCountry = {
    key: "SUA_CHAVE_AQUI",
    base: "http://api.countrylayer.com/v2/"
};

```

<h2>🚀 Site API's</h2>

<p>Abaixo está o link dos sites utilizados para fazer a requisições as API'S.</p>

<h4>
    <a href="https://countrylayer.com/">🔗 Countrylayer</a>
</h4>

<h4>
    <a href="https://openweathermap.org/">🔗 Open Weather</a>
</h4>



<h2>🤝 Contribuindo </h2>

* Conte a outras pessoas sobre este projeto 📢
* Estrela no projeto ⭐️

<h4 align="center">📌 Finalizado</h4>









