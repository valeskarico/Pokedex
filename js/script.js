
const pokemonSearch = document.getElementById('pokemon-search');
const pokemonSubmit = document.getElementById('pokemon-submit');
const card = document.getElementById('card');
const cardError = document.getElementById('card-error');
const name = document.getElementById('name');
const contentId = document.getElementById('content-id');
const contentHeight = document.getElementById('content-height');
const contentWeight = document.getElementById('content-weight');
const contentType = document.getElementById('content-type');
const pokemonImg = document.getElementById('pokemon-img');

function getPokemonData(pokemonNameOrId) {

  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`;


  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
 
      name.textContent = data.name;
      contentId.textContent = data.id;
      contentHeight.textContent = data.height + ' m';
      contentWeight.textContent = data.weight + ' Kg';
      contentType.textContent = data.types.map(type => type.type.name).join(', ');

      pokemonImg.src = data.sprites.front_default;


      card.style.display = 'block';
      cardError.style.display = 'none';
    })
    .catch(error => {
      console.error('There was an error!', error);


      cardError.style.display = 'block';
      card.style.display = 'none';
    });
}


pokemonSubmit.addEventListener('click', event => {
  event.preventDefault();
  const pokemonNameOrId = pokemonSearch.value.trim().toLowerCase();
  getPokemonData(pokemonNameOrId);
});
