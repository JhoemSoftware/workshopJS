const   imgPokemonUno = document.querySelector(".pokemon-1__img"),
        hpPokemonUno = document.querySelector(".pokemon-1__hp"),
        namePokemonUno = document.querySelector(".pokemon-1__name"),
        attackPokemonUno = document.querySelector(".pokemon-1__attack"),
        defensePokemonUno = document.querySelector(".pokemon-1__defense"),
        typePokemonUno = document.querySelector(".pokemon-1__type"),
        imgPokemonDos = document.querySelector(".pokemon-2__img"),
        hpPokemonDos = document.querySelector(".pokemon-2__hp"),
        namePokemonDos = document.querySelector(".pokemon-2__name"),
        attackPokemonDos = document.querySelector(".pokemon-2__attack"),
        defensePokemonDos = document.querySelector(".pokemon-2__defense"),
        typePokemonDos = document.querySelector(".pokemon-2__type"),
        botones = document.querySelectorAll(".button");

let pokemonUnoID = 0,
    pokemonDosID = 0;

const getRandomNumber = (numMin, numMax) => {
  return Math.floor(Math.random() * (numMax - numMin + 1) + numMin);
};

pokemonUnoID = getRandomNumber(1,150);
pokemonDosID = getRandomNumber(1,150);

do {
    pokemonDosID = getRandomNumber(1,150);
} while(pokemonUnoID === pokemonDosID)

const getPokemon = async (pokeID) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeID}`);
  const data = await response.json();
  return data;
}

const createPokemons = (id1, id2) => {
    getPokemon(id1)
        .then((data)=>{
            console.log(data)
            namePokemonUno.innerText = data.name
            imgPokemonUno.src = data.sprites.other.home['front_default']
            hpPokemonUno.innerText = data.stats[0].base_stat
            attackPokemonUno.innerText = data.stats[1].base_stat
            defensePokemonUno.innerText = data.stats[2].base_stat
            typePokemonUno.innerText = data.types.map((objet) => objet.type.name)
        })
        .catch(console.log("El pokemon no existe"));
    
    getPokemon(id2)
        .then((data)=>{
            console.log(data)
            namePokemonDos.innerText = data.name
            imgPokemonDos.src = data.sprites.other.home['front_default']
            hpPokemonDos.innerText = data.stats[0].base_stat
            attackPokemonDos.innerText = data.stats[1].base_stat
            defensePokemonDos.innerText = data.stats[2].base_stat
            typePokemonDos.innerText = data.types.map((objet) => objet.type.name)
        })
        .catch(console.log("El pokemon no existe"));
} 

createPokemons(pokemonUnoID,pokemonDosID)


// 6?????? - Vamos a crear los pokemons en la funci??n createPokemons.
// Primero Haz varias pruebas a las API para examinar bien qu?? devuelve, esa data
// ser?? necesaria para popular nuestros elementos HTML
// ???? Pista: - Crea una funci??n as??ncrona que reciba los 2 ID de los pokemon, es decir los n??meros que obtenemos de llamar la funci??n random
//           - Haz una llamada a la API por cada pokemon, guarda los datos que te devuelve en dos variables: pokemon1 y pokemon2
//           - Toma los elementos HTML que seleccionamos m??s arriba y utiliza su propiendad innerHTML para a??adir la info que necesitamos de la API




// ???? Bonus! - Vamos a crear la funci??n fightPokemons que permitir?? que los pokemons interact??en y peleen

  // 1. Seleccionar los datos que ahora tenemos en el HTML y que trajimos desde la API: para ambos pokemon: HP, attack, defense y name.


  // 2. Crear una funci??n que calcule el da??o hecho a cada pokemon. Necesitamos el poder del atacante y la defensa y los HP del que defiende
  // - Calcular el da??o restando el ataque de la defensa, con esto definimos si el pokemon sufri?? da??o.
  // - Calcular los nuevos HP: Si la defensa es menor a 0, significa que el ataque logr?? perforarla e hizo da??o, en este caso vamos a restar el da??o de los HP, si no, la HP debe quedar igual pues no hubo da????o
  // En esta funci??n vamos a devolver la nueva HP del pokemon atacado y adem??s el da?????? que sufri??. - Luego vamos a necesitar estos datos -


  // 3. Narrar la batalla ;). Para esto vamos a usar el elemento modal__text, aqu?? vamos a ir llenando su innerHTML.
  // Empecemos con el Pokemon 1.



  // Ahora calculemos el da??o que le hizo a pokemon2 y cu??nta vida le queda, usemos la funci??n de calcular da??o



  // Vamos a narrar qu?? pas?? en este ataque.Si el pokemon 1 tiene un ataque mayor a la denfesa del pokemon 2, debemos narrar que logra perforar su defensa
  // y describir cu??nto da??o recibi?? y cu??les son ahora sus puntos de vida
  // Si el ataque del pokemon 1 no es mayor que la denfesa del pokemon 2, significa que no logra perforarla y por lo tanto no hay da??o.


  // Ahora el Pokemon2, mismo procedimiento.


  // Definamos el ganador que ser??a el m??s da??o haya hecho al otro pokemon.
  // Recordemos que los puntos de da??o son negativos!!
  // - Si el da??o recibido por pokemon 2 es menor al de pokemon 1, (es decir un mayor n??mero negativo), significa que pokemon 1 hizo m??s da??o, por lo tanto es el gandor!
  // - En caso de que sea menor el da??o de pokemon 1, significa que pokemon 2 es el gandor
  // - El ??ltimo caso posible es que ambos hayan recibido el mismo da??o, en ese caso ser??a un empate.



// 7?????? - Vamos a practicar eventos en JS, de esta manera vamos a poder controlar cu??ndo traer pokemons desde la interfaz
// Nuestra funci??n fetch va a traer pokemons cada que el c??digo es ejecutado, es decir cuando la p??gina se recarga
// Vamos a a??adir un bot??n que recargue la p??gina en cada click, as?? podemos obtener nuevos pokemons random cada vez.
// ???? Pista: - Seleccionar el elmento HTML del bot??n
//           - Llamar a la funci??n createPokemons solo cuando se d?? click a ese bot??n (lee sobre eventListeners https://www.w3schools.com/js/js_htmldom_eventlistener.asp )
// ????????????????? En nuestra app tenemos 3 botones. El de Catch!, Fight! y el que OK! que aparece en el modal cuando pelean los pokemons
// Cada bot??n tendr?? atado un eventListener que vamos a construir juntos ??????