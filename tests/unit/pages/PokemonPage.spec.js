import { shallowMount} from '@vue/test-utils'
import PokemonPage from '@/pages/PokemonPage'
import {pokemons} from '../mocks/pokemons.mock';

describe('PokemonPage Component', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(PokemonPage)
  })

  test('debe hacer match con el snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  });

  test('debe de llamar mixPokemonArray al montar', () => {

    const mixPokemonArraySpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArray')
    shallowMount(PokemonPage)

    expect(mixPokemonArraySpy).toHaveBeenCalled()
  });

  test('debe de hace match con el snapshot cuando cargan los pokemons ', () => {

    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArray: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: '',
        }
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  });
});
