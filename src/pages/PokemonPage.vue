<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>
  <div v-else>
    <h1>¿Quien es este Pokemon?</h1>
    <PokemonPicture :pokemon-id="pokemon.id" :show-pokemon="showPokemon"/>
    <PokemonOptions :pokemons="pokemonArr" @selection-pokemon="checkAnswer"/>

    <template v-if="showAnswer">
      <h2 class="fade-in">{{message}}</h2>
      <button class="fade-in" @click="newGame">
        Nuevo Juego
      </button>
    </template>

  </div>

</template>

<script>
import PokemonPicture from '@/components/PokemonPicture';
import PokemonOptions from '@/components/PokemonOptions';
import getPokemonOptions from '@/helpers/getPokemonOptions';

export default {
  name: "PokemonPage",
  components: {
    PokemonPicture,
    PokemonOptions
  },
  data(){
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: ''
    }
  },
  methods:{
    async mixPokemonArray(){
      this.pokemonArr = await getPokemonOptions();

      const rndInt = Math.floor(Math.random() * this.pokemonArr.length);
      this.pokemon = this.pokemonArr[rndInt];
    },
    checkAnswer(selectedId){
       this.showPokemon = true;
       this.showAnswer = true;
      (selectedId === this.pokemon.id) ? this.message = `¡Correcto! ${this.pokemon.name}` : this.message = `¡Incorrecto!, el pokemon era ${this.pokemon.name}`;
    },
    newGame(){
      this.showAnswer = false;
      this.showPokemon = false;
      this.pokemonArr = [];
      this.pokemon = null;
      this.message = '';
      this.mixPokemonArray();
    }
  },
  mounted() {
    this.mixPokemonArray();
  }

}
</script>
