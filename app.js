'use strict'
function tryMe(){
    let nodoNumber = document.querySelector( '#number' );
    let valorNumber = nodoNumber.value;
    let nodoLetter = document.querySelector( '#letter' );
    let valorLetter = nodoLetter.value;
    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    console.log('numero de valores en letras', letras.length );
    let que_letra_soy = valorNumber % 23;
    let dni_completo = valorNumber + valorLetter;
    console.log( dni_completo );
    let siSoy = letras[ que_letra_soy ]; // LETRA CORRECTA
    let nodoResult = document.querySelector( '#result' );

    if( valorNumber < 0 ||valorNumber > 99999999 & valorLetter !== ''){
        console.log('el número proporcionado no es válido.');
    }else if( valorLetter === siSoy ){
            console.log('result');
            pintaMe( 'letras[que_letra_soy]' );
    }else{
        pintaMe('Error');
    }
    function pintaMe( letra ){
        nodoResult.innerHTML = '<span>' + letra + '</span>'
        }  
        for( let i = 0; i < letras.length;  i++){    
            if( i === que_letra_soy ){
                // letras[ i ] -> Correcta
                if(  letras[i] === valorLetter ){
                    // ES CORRECTO
                }
            }
            // letras[ i ] = letras[ que_letra_soy];
            console.log(siSoy);
            if( letras[que_letra_soy] === letras[ i ] ){
                console.log('result');
                pintaMe( 'letras[que_letra_soy]' );
            }else{
                pintaMe('Error');
            }
        }
    }    
}
    
    // let numero_dni = ;
    // let DNI = numero_dni + letras[ x ];

/*
No es lo mismo dividir que %:
numero_dni / 23 ≠ numero_dni % 23; 
COCIENTE
 numero_dni % 23; RESTO
*/


// RESTO = que_letra_soy