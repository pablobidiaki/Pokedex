const pokemonList = document.getElementById('pokemonList')
const carregarMais = document.getElementById('botao')
const limit = 6
let offset= 0

function carregarPokemons(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemons = []) =>{
        const newHtml = pokemons.map((pokemon) =>`
    <div class="modalContainer">
            <div id="modal">
                <li class="pokemon ${pokemon.type}" onclick="openModal()">
                    <span class="number">#${pokemon.number}</span>
                    <span class="name">${pokemon.nome}</span>
                    <div class="detalhes">
                        <ul class="tipos">
                            ${pokemon.types.map((type) => `<li class="elemento">${type}</li>`).join('')}
                        </ul>
                        <img src="${pokemon.photo}" alt="">
                    </div>
                </li>
            </div>
        </div>
        `).join('')
        pokemonList.innerHTML +=newHtml
    })
}

carregarPokemons(offset, limit)

carregarMais.addEventListener('click',() =>{
    offset += limit  
    carregarPokemons(offset, limit)
})

function openModal(){
    const newHtml = pokemons.map((pokemon) =>`
    alert
        `).join('')
        pokemonList.innerHTML +=newHtml
}