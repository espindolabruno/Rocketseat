var repositorios = [];

 
 function buscaRepo()
 {
    
    loadSemGraca();
     repositorios =[];
    var nome = document.querySelector('input[name="repo"]').value
    console.log(nome)

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
            alert(nome+ ' não pode ser encontrado');
            apagaLoad();
        })
        
    }, Math.random() * 3000 + 1000 );
        
        
}

function escreveNaTela()
{
    var onde = document.querySelector('#isItLoaded');
    var ul = document.createElement('ul');
    onde.appendChild(ul);


    onde.innerHTML ="";

    for (i in repositorios)
    {

        var lista = document.createElement('li');
        var itemTexto = document.createTextNode(repositorios[i]);

        onde.appendChild(lista);
        lista.appendChild(itemTexto);

    }
}

function showLoading()
{
    var paiDoLoad = document.querySelector('#loading');
    var itensCarregados = document.querySelector('#isItLoaded');

    paiDoLoad.style.display ='';
    paiDoLoad.innerHTML ="";

    itensCarregados.style.display = 'none';
    

    window.setTimeout(
        function() 
        {
            var itemTexto = document.createTextNode('load');
            paiDoLoad.appendChild(itemTexto);

        },2000)

        window.setTimeout(
            function() 
            {
                var itemTexto1 = document.createTextNode('ing');
                paiDoLoad.appendChild(itemTexto1)
            },2500)

            window.setTimeout(
                function() 
                {
                    var itemTexto2 = document.createTextNode('...');
                    paiDoLoad.appendChild(itemTexto2);
                },3000)

                window.setTimeout(
                    function() 
                    {
                        paiDoLoad.style.display ='none';
                        itensCarregados.style.display = 'inline-block';
                    },3500)
                

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
    var texto = document.createTextNode('');

    loaded.innerHTML="";

    loaded.appendChild(texto); 

}