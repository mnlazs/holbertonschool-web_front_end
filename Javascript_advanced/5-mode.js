function changeMode(size, weight, transform, background, color) {
  return function() {
    document.body.style.fontSize = size + "px";
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  }
}

function main() {
  let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  let darkMode = changeMode(9, 'bold', 'capitalize', 'black', 'white');
  let screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  // Creates <p> element in document
  let parrafo = document.createElement("p");

  // Add text to <p> element
  parrafo.textContent = 'Welcome Holberton!';

  // Append it to the document
  document.body.appendChild(parrafo);

  // Add a button for the spooky mode
  let spookyButton = document.createElement("button");
  spookyButton.textContent = 'Spooky';
  spookyButton.addEventListener('click', spooky);
  document.body.appendChild(spookyButton);

  // Add a button for the dark mode
  let darkModeButton = document.createElement("button");
  darkModeButton.textContent = "Modo Oscuro";
  darkModeButton.addEventListener("click", darkMode);
  document.body.appendChild(darkModeButton);

  // Add a button for Scream mode
  let screamModeButton = document.createElement('button');
  screamModeButton.textContent = 'Scream mode';
  screamModeButton.addEventListener('click', screamMode);
  document.body.appendChild(screamModeButton);
}

// Call the main function
main();
