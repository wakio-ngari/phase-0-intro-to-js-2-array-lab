
let cats = ["Milo","Otis","Garfield"];
 console.log(cats);
     

  function destructivelyAppendCat(name){
    cats.push("Ralph");
 }  
 console.log(cats)
  function destructivelyPrependCat(name){
    cats.unshift("Bob");
  }
     
  function destructivelyRemoveLastCat(name){
        cats.pop();
     }
           function destructivelyRemoveFirstCat(name){
              cats.shift();
           }

              function appendCat(name){
                return [...cats,name];
              }
                 function prependCat(name){
                    return[name,...cats];
                 }
                
                  
                 function removeLastCat(name){
                      return cats.slice(0,-1);
               } 
                   function removeFirstCat(){
                    return cats.slice(1);
                   }