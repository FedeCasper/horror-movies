console.log(beers);

function ordenar (array, propiedad, booleano){
console.log(array);
console.log(propiedad);
console.log(booleano);

let resultado = []

     if(booleano){
          resultado = array.sort((a,b) => {
               if(a[propiedad] > b[propiedad]){
                    return -1
               }else if(b > a){
                    return 1
               }else{
                    return 0
               }
          })
     }else{
          resultado = array.sort((a,b) => {
               if(b[propiedad] > a[propiedad]){
                    return 1
               }else if(b > a){
                    return -1
               }else{
                    return 0
               }
          })
     }
return resultado
}

ordenar(beers, "name", true)