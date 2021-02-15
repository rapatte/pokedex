//partie gauche
var pokeName = document.querySelector(".poke-name");
var pokeId = document.querySelector(".poke-id");
var pokeFrontImage = document.querySelector(".poke-front-image");
var pokeBackImage = document.querySelector(".poke-back-image")
var pokeTypeOne = document.querySelector(".poke-type-one");
var pokeTypeTwo = document.querySelector(".poke-type-two");
var pokeWeight = document.querySelector(".poke-weight");
var pokeHeight = document.querySelector(".poke-height");
var mainScreen = document.querySelector(".main-screen")
//partie droite
var rightContainerScreen = document.querySelector(".right-container__screen");
var listItem = document.querySelectorAll(".list-item")
var leftButton = document.querySelector('.left-button');
var rightButton = document.querySelector('.right-button');




function getPokemon(url) {
    fetch(url)
        .then(pouet => pouet.json())
        .then(data => {

            var results = data.results;

            console.log(data);
            


            for (let i = 0; i < listItem.length; i++) {

                var listPokedex = listItem[i];
                var listPokemon = results[i];

                var url = listPokemon.url;
                var name = listPokemon.name;

                //récupération de l'id dans l'url
                var id = url.split('/')[url.split('/').length - 2];

                console.log(id);
                
                listPokedex.textContent = `${id}. ${name}`

            }
        })
        
}
getPokemon('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20');