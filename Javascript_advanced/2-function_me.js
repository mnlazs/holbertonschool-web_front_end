function welcomeMessage(fullName){
  function displayMessage(){
    alert('Welcome ' + fullName + '!');
}
    return displayMessage;
}

  var guillaume = welcomeMessage("Guillaume");
  var alex = welcomeMessage("Alex");
  var fred = welcomeMessage("Fred");
