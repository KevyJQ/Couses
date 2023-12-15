/*
Para ejecutar la siguiente comenado, en mi caso estoy implementando la herramienta "node"

Para correr el siguiente comando hacemos lo siquiente
	1- Habrimos la terminal
	2- Nos vamos a la direccion donde se encuantra nuesto archivo
	3- corremos el siquiente comando $node archivo.js
*/

//Example 1
/*
console.log("Hello world!")	
*/

// ---------------------------------------------------------------------------------
//Example 2
/*
let y var son palabras reservadas que se utiliazan para declarar variables. La principal diferencia entre las 2 es:
	let
		crea una variable de ambito local
	var
		crea una variable de ambito global

*/
/*
let num = 5	//La variable solo es accesible dentro del ambito en el que se declara
var mystr = "John"	//La variable es accesible desde cualquier lugar del script
console.log(num)
console.log(mystr)
*/

// ---------------------------------------------------------------------------------
//Example 3

/*
'const' es una palabra reservada que se ulitiza para declarar constantes.
*/
/*
const pi_val = 3.147	//La constante no se puede reasignar una vez que se ha inicialilzado
console.log(pi_val)
*/

// ---------------------------------------------------------------------------------
//Example 4

/* 
Como podemos ver el orden de como llamemos a la funcion no importa mucho en casos pequeños
*/
/*
printMyInput(9)	//Mandamos a llamar a la funcion printMyInput y le mandamos el valor de 9
//Creamos una funcion que le mandamos como parametro un valor
function printMyInput(user_input){	
	console.log("The parameter passed is " + user_input)
}

printMyInput("Kevy")
*/

// ---------------------------------------------------------------------------------
//Example 5

/*
Operaciones basicas y su funcionamiento
*/
/*
console.log("5 + 3 = ", 5 + 3)
console.log("7 - 3 = ", 7 - 3)
console.log("8 * 2 = ", 8 * 2)
console.log("27 / 3 = ", 27 / 3)
console.log("4 to the power of 3 = ", 4 ** 3)
console.log("19 mod 4 = ", 19 % 4)
*/

// ---------------------------------------------------------------------------------
//Example 6

/*
+ (plus) operator is used to add
- (minus) operator is used to subtract
* (star or asterisk) operator is used to multiply
/ (slash) operator is used to divide
** (double star) operator is used for exponentiation/power
% (percentage) operator is used for modulus operation (the remainder left over after division)

===================================================================================


= operator is used to assign value on the right to the variable on left

+= operator is used to increment the value stored in the left operand by the value of the right operand and store it back to the left operand (the same as writing tmp = tmp + val where tmp is a variable and val is some arbitrary value)

-= operator is used to decrement the value stored in the left operand by the value of the right operand and store it back to the left operand (the same as writing tmp = tmp - val where tmp is a variable and val is some arbitrary value)

*= operator is used to multiply the value stored in the left operand by the value of the right operand and store it back to the left operand (the same as writing tmp = tmp * val where tmp is a variable and val is some arbitrary value)

/= operator is used to divide the value stored in the left operand by the value of the right operand and store it back to the left operand (the same as writing tmp = tmp / val where tmp is a variable and val is some arbitrary value)

**= operator is used to raise the value stored in the left operand to the power value of the right operand and store it back to the left operand (the same as writing tmp = tmp ** val where tmp is a variable and val is some arbitrary value)

%= operator is used to get modulus of the value stored in the left operand by value of the right operand and store it back to the left operand (the same as writing tmp = tmp % val where tmp is a variable and val is some arbitrary value)

===================================================================================

== operator checks if the operand on the left is of equal value to the operand on right
=== operator checks if the operand on the left is of equal value and equal type to the operand on right
!= operator checks if the operand on the left is not of equal value to the operand on right
> operator checks if the operand on the left is greater than that on the right
< operator checks if the operand on the left is lesser than that on the right
>= operator checks if the operand on the left is greater than or equal to that on the right
<= operator checks if the operand on the left is lesser than or equal to that on the right

===================================================================================


&& operator checks if the condition on left and right are true. Returns true only of both conditions are true. Else returns false.
|| operators checked if either the condition on the left is true or right is true. Returns true even if one of the two conditions is true.
! operator checks if the condition is not met.

===================================================================================

*/
/*
console.log("5 + 3 = ", 5 + 3)
console.log("5 + \"3\" = ", 5 + "3")
console.log("5 + 5 + \"3\" = ", 5 + 5 + "3")
console.log("\"3\" + 5 + 5 = ", "3" + 5 + 5)
console.log("5 + 5 + \"3\" + 5 = ", 5 + 5 + "3" + 5)


x = 5
console.log("Old value of x: ", x)
x += 3
console.log("New value of x: ", x)
y = 5
console.log("Old value of y: ", y)
y -= 3
console.log("New value of y: ", y)
a = 6
console.log("Old value of a: ", a)
a *= 3
console.log("New value of a: ", a)
b = 6
console.log("Old value of b: ", b)
b /= 3
console.log("New value of b: ", b)
c = 6
console.log("Old value of c: ", c)
c %= 3
console.log("New value of c: ", c)
d = 6
console.log("Old value of d: ", d)
d **= 3
console.log("New value of d: ", d)


//Checking equality of 5 (number type) and 5 (string type)
console.log("5=='5' ", 5=='5')
console.log("5==='5' ", 5==='5')
console.log("5===5 ", 5===5)
console.log("5 != 5 ", 5 !== 5)
console.log("5 != 6 ", 5 != 6)
console.log("5 != '5' ", 5 !== '5')
console.log("5 > 2 ", 5 > 2)
console.log("5 > 7 ", 5 > 7)
console.log("5 > 5 ", 5 > 5)
console.log("5 < 7 ", 5 < 7)
console.log("5 < 2 ", 5 < 2)
console.log("5 < 5 ", 5 < 5)
console.log("5 >= 5 ", 5 >= 5 )
console.log("5 <= 5 ", 5 <= 5 )


var raining = false
var cloudy = true
console.log("It is raining: ", raining)
console.log("It is cloudy: ", cloudy)
console.log("It is raining AND cloudy: ", raining && cloudy)
console.log("It is raining OR cloudy: ", raining || cloudy)
console.log("It is not raining: ", !raining)
console.log("It is not cloudy: ", !cloudy)
*/

/*
exp1 && exp2 will not evaluate exp2 if exp1 is false because if even one expression is false with an &&, the entire expression is false

exp1 || exp2 will not evaluate exp2 if exp1 is true because if even one expression is true with an ||, the entire expression is true
*/
/*
var chocolate = true
var candy = false
console.log("There is chocolate: ", chocolate)
console.log("There is candy: ", candy)
console.log("There is candy AND chocolate: ", chocolate && candy, " -- Only candy is evaluated")
console.log("There is chocolate OR candy: ", chocolate || candy, " -- Only chocolate is evaluated")
*/

// ---------------------------------------------------------------------------------
//Example 7

/*
//Accept a input from the user. If it is a number, print the multiplication table for the number. Else print the input and the length of the input.
//let user_input = prompt('Enter a value');
let user_input = 2
//Check if the user did not input anything
if (!user_input) {
    console.log("You did not input anything")
}
//Check if the user input is not a number
else if (isNaN(user_input)) {
    console.log("Your input is ", user_input)
    console.log("The length of your input is ", user_input.length)
} 
//The only option remaining is that the input is a number
else {
    console.log(user_input, " X 1 = ", user_input*1)
    console.log(user_input, " X 2 = ", user_input*2)
    console.log(user_input, " X 3 = ", user_input*3)
    console.log(user_input, " X 4 = ", user_input*4)
    console.log(user_input, " X 5 = ", user_input*5)
    console.log(user_input, " X 6 = ", user_input*6)
    console.log(user_input, " X 7 = ", user_input*7)
    console.log(user_input, " X 8 = ", user_input*8)
    console.log(user_input, " X 9 = ", user_input*9)
    console.log(user_input, " X 10 = ", user_input*10)
}
*/

// ---------------------------------------------------------------------------------
//Example 8

/*
//let user_input = prompt('Enter a number between 1 to 7');
let user_input = 2
//Using logical OR operator to check if the input is a number and it is between 1 to 7
if(isNaN(user_input) || user_input< 1 || user_input>7) {
    console.log("Invalid input")
} else {
    user_input = parseInt(user_input)
    switch(user_input){
        case 1: console.log("Sunday"); break;
        case 2: console.log("Monday"); break;
        case 3: console.log("Tuesday"); break;
        case 4: console.log("Wednesday"); break;
        case 5: console.log("Thursday"); break;
        case 6: console.log("Friday"); break;
        case 7: console.log("Saturday"); break;
        default: console.log("Invalid entry");
    }
}
*/

// ---------------------------------------------------------------------------------
//Example 9

/*
//Accept a input from the user. If it is a number print the multiplication table for the number. 
//let user_input = prompt('Enter a number');
let user_input = 2
//Check if the user input is a number
if(!isNaN(user_input)) {
    //Using for loop for the repetitive statement
    for (let i=0; i<10; i++) {
        console.log(user_input, " X ", i, " = ", user_input*i)
    }
}
*/

// ---------------------------------------------------------------------------------
//Example 10

/*
//The code below is to find the length of the words the user is entering. The loop will go on and on until the user chooses not to continue by pressing 'n'
let do_more = true
while(do_more) {
    //Accept a input from the user. 
    //let user_input = prompt('Enter a word');
    let user_input = "Hello"
    //Check if the user input is not a number and then print the length of the input
    if(isNaN(user_input)) {
        console.log("Length of the word you entered is " + user_input.length)
    } else {
        console.log("You entered a number. Only words are allowed")
    }
    //let should_continue = prompt("Do you want to continue. Press n to stop")
    let should_continue = "n"
    if(should_continue === "n") {
        do_more = false
    }
}
*/

// ---------------------------------------------------------------------------------
//Example 11

/*
let myArray = ["Jack","Jill",4,5,true,"John"]	//Lista o array
console.log(myArray[0]);
console.log(myArray[5]);
*/

// ---------------------------------------------------------------------------------
//Example 12

/*
let myArray = ["Jack","Jill",4,5,true,"John"]
myArray.forEach(element => {
    console.log(element)
})
*/

// ---------------------------------------------------------------------------------
//Example 2

/*
Object.entries: es un metodo estatico del objeto que toma un objeto como argumento y lo devuelve un nuevo arreglo que contiene pares clave - valor (en forma de subarreglos) para las propiedades enumerables del objeto.
En este caso se utiliza el arreglo 'myArray' como el objeto del que se obtendran las entradas.
*/
/*
let myArray = ["Jack","Jill",4,5,true,"John"]
for (const [index, value] of Object.entries(myArray)) {
  console.log(index, " - ", value);
}
*/

// ---------------------------------------------------------------------------------
//Example 2

let myMap = new Map();
//Add a key-value pair to the map, with a key of "name" and a value of "John". 
myMap.set("name", "John")
//Add another key-value pair to the map, with a key of "age" and a value of 22.
myMap.set("age", 22)
myMap.forEach((val,key) => {
    console.log(key, " - ", val)
})