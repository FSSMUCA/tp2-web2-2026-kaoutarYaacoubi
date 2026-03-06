let valeurs = [0,1,"","0",null,undefined,NaN,false,[],{}] 
      for (let i = 0 ; i< valeurs.length ; i++)
        {
            let v = valeurs[i] ;
            let text = String (v);
            if (v === "") {
                text = "(chaine vide)"
            }

            if (v) {
                console.log(text + "-> truthy")
            } else {
                console.log(text + "-> falsy")
                
            }
        }