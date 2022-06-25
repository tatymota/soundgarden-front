let botaoCriarEvento = document.getElementById("botao-criar-evento"); // acesso ao botão "criar evento" pelo ID
let formulario = document.getElementById("formulario-cadastro-evento"); // acesso ao formulário pelo ID

function cadastrarEvento(){
    let payload = { //JSON com as informações necessárias para criar o evento
        name:formulario[0].value,
        poster:formulario[1].value,
        attractions:formulario[2].value.split(","), // utilizado o split para separar a string com "," e transformando em array
        description:formulario[3].value,
        scheduled:new Date(formulario[4].value).toISOString(), //conversão do formato da data para ISO
        number_tickets:formulario[5].value,
    }
    let request = new XMLHttpRequest(); // request para envio do POST para o endpoint (https://stackoverflow.com/questions/6396101/pure-javascript-send-post-data-without-a-form)
    request.open("POST", "https://xp41-soundgarden-api.herokuapp.com/events", true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(payload));
}


botaoCriarEvento.addEventListener("click", cadastrarEvento, false); //adicionando callback ao evento de click