var repositorios = [];

 
 function buscaRepo()
 {
     loadSemGraca();
     repositorios =[];
    var nome = document.querySelector('input[name="repo"]').value

    window.setTimeout(
        function() 
        {
            axios.get('https://api.github.com/users/'+nome+'/repos')
        .then(function(response) 
        {
            for (i in response.data)
            {
            repositorios.push(response.data[i].name);
            //console.log(repositorios[i]);
            }
            escreveNaTela();
            apagaLoad();
        })
        .catch(function(error) 
        {
            alert(nome+' Não pode ser encontrado');
            apagaLoad();
        })
        }, Math.random() * 2000 + 1000 );
}

function escreveNaTela()
{
    var onde = document.querySelector('#listaRepo');
    var ul = document.createElement('ul');
    onde.appendChild(ul);

    onde.style.backgroundColor = 'cornflowerblue';
    onde.innerHTML ="";

    for (i in repositorios)
    {

        var lista = document.createElement('li');
        var itemTexto = document.createTextNode(repositorios[i]);

       
        onde.appendChild(lista);
        lista.appendChild(itemTexto);

    }

}

function loadSemGraca()
{
    var loaded = document.querySelector('#Content');
    var texto = document.createTextNode('Carregando...');

    loaded.innerHTML="";

    loaded.appendChild(texto);
    

}

function apagaLoad()
{
    var loaded = document.querySelector('#Content');
    var texto = document.createTextNode('Concluído');

    loaded.innerHTML="";

    loaded.appendChild(texto); 

}