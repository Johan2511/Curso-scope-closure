var firsName; // Undefined
firsName = 'Johan';
console.log(firsName);

var lastName = "David"; // Declarar / asignar
lastName = 'Ana'; // reasignar
console.log(lastName);


var secondName = 'David'; //  declarando / asignando
var secondName = 'Ana'; // reasignando
console.log(secondName);


// let
let fruit = 'apple' // declara y asignar
fruit = 'Kiwi' // reasignar
console.log(fruit);

let fruit = 'Banana';
console.log(fruit);


// const
const animal = 'dog'; // declarar y asignar
// animal = 'cat'; // reasignar
const animal = 'snake';
console.log(animal);

const vehiculos = [];
vehiculos.push("carro");
console.log(vehiculos);

vehiculos.pop();

console.log(vehiculos);


/*
* Mis notas:

Declaración de variables: reservar un espacio en memoria para la variable en si.
Re-declaración de variables: volver a declarar una variable previamente existente.
Asignación de variables: darle un valor a dicho espacio de memoria reservado.
Re-asignación de variables: darle un nuevo valor a una variable.
var, es posible realizar solo una declaración, el valor de la variable será undefiend pero no arrojará ningún error.
var, es posible re-declarar y re-asignar valores.
let, es posible re-asignar pero no re-declarar.
const es una de las mejores maneras de manipular variables puesto que tiene reglas mas robustas que var y let
const, no puedes re-asignar ni re-declarar tipos de datos primitivos.
const, puedes re-asignar arreglos y objetos pero no re-declararlos.
const, tampoco puedes solo declararla, necesita una asignación.
*/ 