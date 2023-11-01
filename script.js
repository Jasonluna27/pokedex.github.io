$(document).ready(function () {
    const cardContainer = document.getElementById("card-container");
    const numberOfPokemon = 10; // Número de cartas que deseas mostrar

    // Realizar una solicitud a la PokeAPI para obtener los primeros N pokemon
    $.get(`https://pokeapi.co/api/v2/pokemon/?limit=${numberOfPokemon}`, function (data) {
        const pokemonList = data.results;

        // Iterar a través de la lista de pokemon y crear una carta para cada uno
        pokemonList.forEach(function (pokemon, index) {
            const card = document.createElement("div");
            card.className = "card";

            // Obtener la información detallada de cada pokemon
            $.get(pokemon.url, function (data) {
                const name = data.name;
                const id = data.id;
                const type = data.types[0].type.name;
                const imageUrl = data.sprites.front_default;

                // Crear el contenido de la carta
                card.innerHTML = `
                    <h2>${name}</h2>
                    <p>Número: ${id}</p>
                    <img src="${imageUrl}" alt="${name}">
                    <div class="types">
                        <div class="type">${type}</div>
                    </div>
                `;

                // Agregar la carta al contenedor
                cardContainer.appendChild(card);

                // Si hemos agregado todas las cartas, muestra el resultado
                if (index === numberOfPokemon ) {
                    // Puedes realizar acciones adicionales aquí si es necesario
                }
            });
        });
    });
});