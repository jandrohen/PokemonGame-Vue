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

  test('debe de mostrar los componentes de PokemonPicture y PokemonOptions', () => {

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
    const options = wrapper.find('pokemon-options-stub')
    const picture = wrapper.find('pokemon-picture-stub')

    expect(picture.exists()).toBeTruthy()
    expect(options.exists()).toBeTruthy()

    expect(picture.attributes('pokemonid')).toBe('5')
    expect(options.attributes('pokemons')).toBe('')

  });

  test('pruebas con checkAnswer', async () => {
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

    await wrapper.vm.checkAnswer(5)

    expect(wrapper.find('h2').exists()).toBeTruthy()
    expect(wrapper.vm.showPokemon).toBeTruthy()

    expect(wrapper.find('h2').text()).toBe(`¡Correcto! ${pokemons[0].name}`)

    await wrapper.vm.checkAnswer(10)

    expect(wrapper.vm.message).toBe(`¡Incorrecto!, el pokemon era ${pokemons[0].name}`)

  });
});
