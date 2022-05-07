var x = 11;

var intentos=1;
var y = prompt("Adivina el número. Tienes 5 intentos.");

 do {
    if (y==x) {
      alert("Adivinaste el número. "+ "Tu numero de intentos es : "+ intentos);
      break;
    }
    else if (y > x) {
      alert("Tu número es mayor");
    }
    else {
      alert("Tu número es menor");
    }
   intentos++;
   y = prompt("Ingresa otro número");
 }while ((intentos < 5));
 intentos++;
 if (intentos==6) {
  alert("No lo lograste");
 }

