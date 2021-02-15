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


   


    fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
    .then(pouet => pouet.json())
    .then(data =>{
                
        for ( let i = 0; i < listItem.length; i++){   

                var pokeName = data.results[i].name;
                listItem[i].textContent = pokeName
            
        }
    })

