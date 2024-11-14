let pokemonForm = document.querySelector(".pokemon-form");
let getPokemon = document.getElementById("get-pokemon");
let pokemonDisplay = document.getElementById("pokemon-display"); // Element to display results

// Add event listener to the button
getPokemon.addEventListener("click", () => {
  // Get the selected Pokémon name
  let pokemonSelect = document.getElementById("pokemon-select").value;

  // Fetch data based on selected Pokémon
  let apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonSelect}`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("La solicitud no fue exitosa");
      }
      return response.json();
    })
    .then((data) => {
      // Display Pokémon information
      pokemonDisplay.innerHTML = `
        <h2>${data.name}</h2>
        <img src="${data.sprites.front_default}" alt="${data.name}">
        <p>Species: ${data.species.name}</p>
        <p>Height: ${data.height}</p>
        <p>Weight: ${data.weight}</p>
      `;
    })
    .catch((error) => {
      // Display error message
      pokemonDisplay.innerText =
        "Error: algo salió mal al cargar la información!";
      console.error(error);
    });
});
