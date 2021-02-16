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
                var name = listPokemon.name;

                //récupération de l'id dans l'url
                const id = url.split('/')[url.split('/').length - 2];

                

                listPokedex.textContent = `${id}. ${name}`;
                
                

            }
            
            
        })
        

}

function getPokeData (id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(pouet => pouet.json())
    .then(data => {
        // console.log(data.types[0].type.name);
        pokeTypeOne.textContent = data.types[0].type.name;
        if(data.types[1]){
            pokeTypeTwo.textContent = data.types[1].type.name;
        }
        else {
            pokeTypeTwo.classList.add('hide');
        }
        pokeName.textContent = data.name;
        pokeId.textContent = '# ' + data.id;
        mainScreen.setAttribute('class', 'main-screen ' + data.types[0].type.name);
        pokeBackImage.src = data.sprites.back_default;
        pokeFrontImage.src = data.sprites.front_default;
        pokeWeight.textContent = data.weight;
        pokeHeight.textContent = data.height;


        
        
    })
}



mainScreen.classList.remove('hide');



rightButton.addEventListener('click', function() {if(listSuivante)getPokemon(listSuivante)});

leftButton.addEventListener('click', function() {if(listPrecedente)getPokemon(listPrecedente)});




getPokemon('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20');



function afficherData (){
    let liste = document.querySelectorAll('.list-item')
    for (let i = 0; i < liste.length; i++) {
        let element = liste[i];
        element.addEventListener('click',function (){
            console.log(element);
            let id = element.textContent.split('.')[0];
            getPokeData(id) 
        })        
    }
}
afficherData();
