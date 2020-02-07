        

        var listElement = document.querySelector('#lista');
        var ulElement = document.createElement('ul');
       
        ulElement.setAttribute('type','circle');
        listElement.appendChild(ulElement);
            

        var nomes = JSON.parse(localStorage.getItem('salvar_itens')) || [];

            function AtualizaItens()
            {   

                listElement.innerHTML ="";
                for (itens of nomes)
                {
                    var itemElement = document.createElement('li');
                    var itemTexto = document.createTextNode(itens);

                    var linkElement = document.createElement('a');
                    var linkTexto = document.createTextNode(' - Excluir Item');
                    
                    var pos = nomes.indexOf(itens);
                    linkElement.setAttribute('href', '#');
                    linkElement.setAttribute('onclick', 'apagaItem('+pos+')');
                    
                    linkElement.appendChild(linkTexto);
                    itemElement.appendChild(itemTexto);
                    itemElement.appendChild(linkElement);

                    listElement.appendChild(itemElement);
                    
                }
            }

    AtualizaItens();    

            function Adicionar()
            {

                var inputTexto = document.querySelector('input[name="nome"]');
                var texto = inputTexto.value;
                nomes.push(texto);

                AtualizaItens();
                save();

                inputTexto.value ="";
                inputTexto.focus();

            }


    function apagaItem(posicao)
    {

        nomes.splice(posicao, 1);
        AtualizaItens();
        save();
    }

    function save()
    {
        localStorage.setItem('salvar_itens', JSON.stringify(nomes));

    }