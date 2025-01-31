#  08 Desafío: hora de practicar
<p>En una carrera de desarrollo de software, 
la práctica constante de la lógica de programación desempeña un papel fundamental en la construcción de bases sólidas.</p>
<p>La lógica de programación no solo te permite la creación de algoritmos eficientes y soluciones elegantes, sino que también desarrolla la capacidad de pensar de manera estructurada y analítica. 
Esta habilidad es esencial para enfrentar desafíos complejos y convertir problemas abstractos en implementaciones tangibles.</p>
<p>Con esto en mente, hemos creado una lista de actividades (no obligatorias) centradas en la práctica para mejorar aún más tu experiencia de aprendizaje. ¡Vamos a practicar!</p>

## Desafíos
1. Descarga otro proyecto haciendo clic en este enlace y ábrelo en Visual Studio Code.
2. Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".
```html
   <h1></h1>
```
```javascript
   let titulo = document.querySelector('h1');
   titulo.innerHTML = 'Hora del desafio';
```
3. Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".
```html
   <button onclick="mensajeConsola();" class="button">Console</button>
```
```javascript
   let i=0;
   function mensajeConsola(){
       console.log(`El botón fue clicado ${i++}, ${(i===1)? 'vez': 'veces'}`);
   }
```   
4. Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".
```html
   <button onclick="preguntaCiudad();" class="button">Prompt</button>
```
```javascript
   function preguntaCiudad(){
       let ciudad = prompt('Por favor, me puedes indicar una ciudad de Brasil: ');
       alert(`Estuve en ${ciudad} y me acordé de ti`);
   }   
```
5. Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".
```html
   <button onclick="mensajeAlerta();" class="button">Alert</button>
```
```javascript
   function mensajeAlerta(){
       alert("Yo amo JS");
   } 
```   
6. Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.
```html
   <button onclick="sumaDosNumeros()" class="button">Suma</button>
```
```javascript
   funtion sumaDosNumeros(){
    let numeroUno = parseInt(prompt("Dijite el primer número"));
    let numeroDos = parseInte(prompt("Dijite segundo número"));

    let resultado = numeroUno + numeroDos;

    alert(`resultado de la suma de ${numeroUno} + ${numeroDos} = ${resultado}`);
}
``` 
