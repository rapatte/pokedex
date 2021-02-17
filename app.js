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
var flecheHaut = document.querySelector('d-pad__cell top');

var listSuivante;
var listprecedente;
var id;
var url;



function getPokemon(url) {
    fetch(url)
        .then(pouet => pouet.json())
        .then(data => {
            listPrecedente = data.previous;
            listSuivante = data.next;
            var results = data.results;





            for (let i = 0; i < listItem.length; i++) {

                var listPokedex = listItem[i];
                var listPokemon = results[i];

                url = listPokemon.url;
                var name = capitalize(listPokemon.name);

                //récupération de l'id dans l'url
                const id = url.split('/')[url.split('/').length - 2];



                listPokedex.textContent = `${id}. ${name}`;



            }


        })


}

function getPokeData(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(pouet => pouet.json())
        .then(data => {
            pokeTypeOne.textContent = capitalize(data.types[0].type.name);
            if (data.types[1]) {
                pokeTypeTwo.textContent = capitalize(data.types[1].type.name);
                pokeTypeTwo.classList.remove('hide');
            }
            else {
                pokeTypeTwo.classList.add('hide');
            }
            pokeName.textContent = capitalize(data.name);
            pokeId.textContent = '# ' + data.id.toString().padStart(3, '0');
            mainScreen.setAttribute('class', 'main-screen ' + data.types[0].type.name);
            pokeBackImage.src = data.sprites.back_default;
            pokeFrontImage.src = data.sprites.front_default;
            pokeWeight.textContent = data.weight;
            pokeHeight.textContent = data.height;
        })
}







rightButton.addEventListener('click', function () { if (listSuivante) getPokemon(listSuivante) });

leftButton.addEventListener('click', function () { if (listPrecedente) getPokemon(listPrecedente) });




getPokemon('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20');


function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
}



function afficherData() {


    for (let i = 0; i < listItem.length; i++) {
        let element = listItem[i];
        element.addEventListener('click', function () {
            console.log(element);
            let id = element.textContent.split('.')[0];
            getPokeData(id)
        })
    }
}
afficherData();


//Konami Code

// var allowedKeys = {
//     37: 'left',
//     38: 'up',
//     39: 'right',
//     40: 'down',
//     65: 'a',
//     66: 'b'
//   };


// var konamiCode = ['up', 'up']//, 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

// var konamiCodePosition = 0;

// document.addEventListener('keypress', function(e){
//     var key = allowedKeys[e.keycode];
//     var requiredKey = konamiCode[konamiCodePosition];
//     if (key == requiredKey) {


//         konamiCodePosition++;
//         if (konamiCodePosition == konamiCode.length) {
//             activateSecret();
//             konamiCodePosition = 0;
//           }
//         } else {
//           konamiCodePosition = 0;
//         }
//     }
// );

// function activateSecret(){
//     console.log('pouet');
// }


function onKonamiCode(cb) {

    var input = '';
    var code = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba';
    document.addEventListener('keydown', function (e) {
        input += ("" + e.key);
        if (input == code) {
            return cb();
        }
        if (!code.indexOf(input)) return;
        input = ("" + e.key);
    });
}

onKonamiCode(function () {
    alert('Il ne faut pas se fier aux apparences.')
    fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
        .then(pouet => pouet.json())
        .then(data => {
            pokeTypeOne.textContent = capitalize(data.types[0].type.name);
            if (data.types[1]) {
                pokeTypeTwo.textContent = capitalize(data.types[1].type.name);
                pokeTypeTwo.classList.remove('hide');
            }
            else {
                pokeTypeTwo.classList.add('hide');
            }
            pokeName.textContent = capitalize(data.name);
            pokeId.textContent = '# ' + data.id.toString().padStart(3, '0');
            mainScreen.setAttribute('class', 'main-screen ' + data.types[0].type.name);
            pokeBackImage.src = data.sprites.back_default;
            pokeFrontImage.src = data.sprites.front_default;
            pokeWeight.textContent = data.weight;
            pokeHeight.textContent = data.height;
        })
});