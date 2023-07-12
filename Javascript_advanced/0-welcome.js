function welcome(firstName, LastName){ /* Creacion de funcion "welcome" que encierra dos argumentos*/
  var fullName = firstName + " " + LastName; /* creacion de variable "fullName que concatena dos elementos*/

    function displayFullName(){
      alert("Welcome" + fullName + "!");
    }

    displayFullName();
}