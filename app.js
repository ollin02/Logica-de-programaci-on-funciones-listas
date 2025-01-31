let i=0;
//2. Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del desafio';

//3. Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".
function mensajeConsola(){
    console.log(`El botón fue clicado ${i++}, ${(i===1)? 'vez': 'veces'}`);
}

//4. Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".
function preguntaCiudad(){
    let ciudad = prompt('Por favor, me puedes indicar una ciudad de Brasil: ');
    alert(`Estuve en ${ciudad} y me acordé de ti`);
}

//5. Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".
function mensajeAlerta(){
    alert("Yo amo JS");
}

//6. Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.
funtion sumaDosNumeros(){
    let numeroUno = parseInt(prompt("Dijite el primer número"));
    let numeroDos = parseInte(prompt("Dijite segundo número"));

    let resultado = numeroUno + numeroDos;

    alert(`resultado de la suma de ${numeroUno} + ${numeroDos} = ${resultado}`);
}