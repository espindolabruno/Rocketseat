        var nomes = ['diego','Gabriel','Bruno'];

        var listElement = document.querySelector('#lista');
        var ulElement = document.createElement('ul');
       
        ulElement.setAttribute('type','circle');
        listElement.appendChild(ulElement);
            
            function AtualizaItens()
            {
                for (itens of nomes)
                {
                    var itemElement = document.createElement('li');
                    var itemTexto = document.createTextNode(itens);

                    var linkElement = document.createElement('a');
                    var linkTexto = document.createTextNode(' - Excluir Item');

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
                var item = document.createElement('li');

                item.appendChild(document.createTextNode(nomes[nomes.length-1]));
                ulElement.appendChild(item);

                inputTexto.value ="";
                inputTexto.focus();

            }
