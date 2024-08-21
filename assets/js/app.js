'use strict';

function validate() {
    let nodoNumber = document.querySelector('#number');
    let valorNumber = parseInt(nodoNumber.value, 10); // Convierte a entero
    let nodoLetter = document.querySelector('#letter');
    let valorLetter = nodoLetter.value.toUpperCase(); // Convierte a mayúsculas
    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    
    // Imprime valores para depuración
    console.log('Número:', valorNumber);
    console.log('Letra:', valorLetter);
    
    // Validación del número de DNI
    if (isNaN(valorNumber) || valorNumber < 0 || valorNumber > 99999999) {
        console.log('El número proporcionado no es válido.');
        pintaMe('Número no válido');
        return;
    }
    
    // Validación de la letra
    if (valorLetter === '') {
        console.log('La letra del DNI no puede estar vacía.');
        pintaMe('Letra vacía');
        return;
    }
    
    // Cálculo de la letra correcta
    let que_letra_soy = valorNumber % 23;
    let siSoy = letras[que_letra_soy];
    
    // Comparación de la letra proporcionada
    if (valorLetter === siSoy) {
        console.log('DNI correcto');
        //pintaMe('El DNI es correcto');
        pintaMe('DNI correcto para el número ' + valorNumber, 'bi-check-all'); // Ícono de éxito
    } else {
        console.log('DNI incorrecto');
        //pintaMe('DNI incorrecto');
        pintaMe('DNI incorrecto para el número ' + valorNumber, 'bi-ban'); // Ícono de error
    }
    
    function pintaMe(mensaje, icono) {
        document.querySelector('#result').innerHTML = '<span><i class="bi ' + icono + '"></i> ' + mensaje + '</span>';
    }
}
