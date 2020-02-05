var getIdade = document.querySelector('input[name="idade"]').value;



function checaIdade(idade) {
    // Retornar uma promise
    idade = getIdade;
    return new Promise(function(resolve, reject){
        
        window.setTimeout(
            function() {
              // Cumprimos a promessa !
              if(idade < 18)
                {
                    reject();
                }
                else
                {
                    resolve();
                }
            }, Math.random() * 2000 + 1000 );    


    });
   }

  

  checaIdade(getIdade)
    .then(function() {
    console.log("Maior que 18");
    })
    .catch(function() {
    console.log("Menor que 18");
    });