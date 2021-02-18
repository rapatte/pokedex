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
            pokeId.textContent = '#' + data.id.toString().padStart(3, '0');
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
        let pokemon = listItem[i];
        pokemon.addEventListener('click', function () {
            let id = pokemon.textContent.split('.')[0];
            getPokeData(id)
        })
    }
}
afficherData();

function onKonamiCode(cb, cb1) {

    var input = '';
    var code = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba';
    var code1 = 'music'
    document.addEventListener('keydown', function (e) {
        
        input += ("" + e.key);
        // console.log(input);
        if (input == code) {
            return cb();
        }
        if (input == code1) {
            return cb1();
        }
        if (!code.indexOf(input) || !code1.indexOf(input)) return;
        input = ("" + e.key);
    });
}

onKonamiCode(function () {    
    let audio = new Audio('dittoSound.mp3');
    audio.play();
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
            pokeId.textContent = '#' + data.id.toString().padStart(3, '0');
            mainScreen.setAttribute('class', 'main-screen ' + data.types[0].type.name);
            pokeBackImage.src = data.sprites.back_default;
            pokeFrontImage.src = data.sprites.front_default;
            pokeWeight.textContent = data.weight;
            pokeHeight.textContent = data.height;
        })
}, 
function () {    
    let audio1 = new Audio('generiquePokemon.mp3');
    audio1.play();    
}
);





function onKonamiCode2(cb3) {

    let flecheBas = document.querySelector('.d-pad__cell.bottom');
    let flecheHaut = document.querySelector('.d-pad__cell.top');
    let flecheGauche = document.querySelector('.d-pad__cell.left');
    let flecheDroite = document.querySelector('.d-pad__cell.right');
    // let btnA = document.querySelector('.controllers__buttons')
    var input2 = '';
    var code2 = 'hauthautbasbasgauchedroitegauchedroite';
    // btnA.addEventListener('click', function(){
        // input2 += 'a'
        // console.log(input2);
    // })
    flecheDroite.addEventListener('click', function () {
        input2 += 'droite';
        console.log(input2);
    })
    flecheGauche.addEventListener('click', function () {
        input2 += 'gauche';
        console.log(input2);
    })
    flecheBas.addEventListener('click', function () {
        input2 += 'bas';
        console.log(input2);
    })
    flecheHaut.addEventListener('click', function () {
        input2 += 'haut';
        console.log(input2);
    })
    if (input2 == code2) {
        return cb3();
    }
    if (!code2.indexOf(input2))
    input2 = '';
}
onKonamiCode2(function () {
    alert();
})