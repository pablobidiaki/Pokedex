function convertPokemonToLi(pokemon){
    return`
    <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.nome}</span>
                <div class="detalhes">
                    <ul class="tipos">
                        ${pokemon.types.map((type) => `<li class="elemento">${type}</li>`).join('')}
                    </ul>
                    <img src="${pokemon.photo}" alt="">
                </div>
            </li>
            `
}

const pokemonList = document.getElementById('pokemonList') 

pokeApi.getPokemons().then((pokemons = []) =>{
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')
})