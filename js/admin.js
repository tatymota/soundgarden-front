function criarTabela(eventos) {
    var table = document.createElement('table');
    for (var i = 0; i < events.length; i++) {
        var row = document.createElement('tr');
        var cell = document.createElement('td');
        cell.textContent = evento[]
        row.appendChild(cell);
        table.appendChild(row);
    }
}


fetch("https://xp41-soundgarden-api.herokuapp.com/events").then(function(response) {
    return response.json();
  }).then(function(eventos) {
    criarTabela(eventos)
  }).catch(function() {
    alert("Falhou");
  });
