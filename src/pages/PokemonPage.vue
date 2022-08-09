<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>
  <div v-else>
    <h1>¿Quien es este Pokemon?</h1>
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon"/>
    <PokemonOptions :pokemons="pokemonArr"/>
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
    }
  },
  mounted() {
    this.mixPokemonArray();
  }

}
</script>
