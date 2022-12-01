/* DATENSTRUKTUREN */

/* Primitives */

// let a; // (var) definition oder Deklaration


// Wertzuweisung / Assignment

// a = 2; // datentyp number
//Datentyp anzeigen lassen-> "typeof"

// a = true; // boolean (true, false)
// a = "Hallo"; // string


// untypisierte -> JS,    typisiert->Java!!!! Definition!!



// console.log(typeof);
// console.log(a);




/* Arrays */
// Navigation über INDEX

// let arr;
// arr = new Array();   // Möglichkeit
// arr = [false,true,true,false];
// console.log(arr);
// console.log(arr[0]);
// console.log([length]); //Array Länge "length"
// console.log(arr[arr.length-1])

/* Array-Info, nicht Klausurrelevant*/
// let arr = [];
// console.log(arr);
// arr.push("a");
// console.log(arr);
// arr.push("b");
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.pop();
// console.log(arr);


// Index beginnt bei "0"-> erste Element!!



// number,boolean,string (wichtig!!)


/* Daten-Objekte */
// Navigation über Bezeichner (keys)

// let obj = {x:"Hi", y:20};
// console.log(obj);
// console.log(obj.x);
// console.log(obj.y);

// let obj = {
//         val0: 10,
//         sub1:{
//             val1: "hi",
//             val2: 2
//             }
//     };

// console.log(obj);
// console.log(obj.val0);
// console.log(obj.sub1.val2);
// console.log(obj.sub1.val1);
// console.log(obj.sub1);

// {{{{{}}}}} -> nested object -< Datenobjekt!!!
// for(i=0; i<arr.length; i++) {};

 /*DOM*/
// DOM --> Modell der HTML-Struktur
// DOM --> Document Object Model
// DOM nach dem Parsen / Laden der HTML-Seite

// console.log(document);
// console.log(document.body);
// console.log(document.body.children);
// console.log(document.body.children[0]);
// console.log(document.body.children[0].innerHTML);
// document.body.children[0].innerText = "Hi";
// console.log(document.getElementById("test"));
// document.getElementById("test").innerHTML = "Hallo Text!"




/* ENTSCHEIDUNGSSTRUKTUREN | CONTROL FLOW*/

// let cond;

// cond = true;
// cond = (6 > 4);
// cond = (6 < 4);
// cond = (4 == 4); // Test auf Wert
// cond = (4 === "4"); // Test auf Wert UND Typ



// if (cond) {
//     console.log("Aussage wahr");
// } else {
//     console.log("Aussage falsch");
// }


// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

//   https://github.com/01-PP/03_Entscheidungsstrukturen




/* FUNKTIONEN */

// 1. Kapselung
// test(); // Funktion aufrufen (), -->aufrufen!!
// function test() { // Fkt.-Rumpf | body
//     console.log("Testausgabe");
// }

// 2. return
//  console.log(test2());
//  function test2() { // do something ...
//     return "Testausgabe 2"; // Lieferung an die Stelle des calls
//     console.log("Noch eine Ausgabe"); // nach return Abbruch!
//  }


// 3. Parameter 
//  console.log(test3("Robert")); // Argument(e)
//  function test3(firstName) // Parameter
//  { // do something ...
//     return "Hallo, " + firstName; 
// }

// 4. Fkt-Call aus Funktionen
// console.log(test4("Robert")); // Argument(e)

// function test4(firstName) // Parameter
// { 
//    return grussformel() + firstName; 
//    // return firstName + grussformel() ; 
// }

// function grussformel() {
//    // return "Hallo, ";
//     return "Hola, ";
// }

// rechner();



