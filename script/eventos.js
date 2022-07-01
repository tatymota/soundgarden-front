function criarTabela(eventos) {
    let body = document.getElementById("card-eventos");
    for (let i = 0; i < eventos.length; i++) {
        let evento = eventos[i];
        let article = document.createElement('article');
        article.setAttribute("class", "evento card p-5 m-3");

        let cellTitulo = document.createElement('h2');
        cellTitulo.textContent = evento['name']+ " - " + evento['scheduled'];
        article.appendChild(cellTitulo);
        
        let cellAtracoes = document.createElement('h4');
        cellAtracoes.textContent = evento['attractions'];
        article.appendChild(cellAtracoes);

        let cellDescricao = document.createElement('p');
        cellDescricao.textContent = evento['description'];
        article.appendChild(cellDescricao);


        let botaoReservarIngresso = document.createElement('a');
        botaoReservarIngresso.textContent = 'Reservar Ingressos';
        botaoReservarIngresso.setAttribute('class', 'btn btn-primary');
        botaoReservarIngresso.setAttribute('href', 'listar-reservas.html');
        article.appendChild(botaoReservarIngresso);

        body.appendChild(article);
    }
}
fetch("https://xp41-soundgarden-api.herokuapp.com/events").then(function(response) {
    return response.json();
  }).then(function(eventos) {
    console.log(eventos);
    criarTabela(eventos)
  }).catch(function(erro) {
      console.log(erro)
    alert("Falhou");
  });