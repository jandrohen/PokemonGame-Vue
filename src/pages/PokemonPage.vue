<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>
  <div v-else>
    <h1>¿Quien es este Pokemon?</h1>
    <PokemonPicture :pokemon-id="pokemon.id" :show-pokemon="showPokemon"/>
    <PokemonOptions :pokemons="pokemonArr" @selection-pokemon="checkAnswer"/>
  </div>

</template>

<script>
import PokemonPicture from '@/components/PokemonPicture';
import PokemonOptions from '@/components/PokemonOptions';
import getPokemonOptions from '@/helpers/getPokemonOptions';

console.log(getPokemonOptions());
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
      showPokemon: false
    }
  },
  methods:{
    async mixPokemonArray(){
      this.pokemonArr = await getPokemonOptions();

      const rndInt = Math.floor(Math.random() * this.pokemonArr.length);
      this.pokemon = this.pokemonArr[rndInt];
    },
    checkAnswer(answer){
        this.showPokemon = true;
    }
  },
  mounted() {
    this.mixPokemonArray();
  }

}
</script>
