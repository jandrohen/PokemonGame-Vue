import { shallowMount } from "@vue/test-utils";
import { pokemons } from "../mocks/pokemons.mock";

import PokemonOptions from "@/components/PokemonOptions";

describe("Pokemon ", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props: {
        pokemons: pokemons,
      },
    });
  });

  test("debe hacer match con el snapshot", () => {

    expect(wrapper.html()).toMatchSnapshot();

  });

  test("debe de mostrar las 4 opciones correctamente", () => {
    const liTags = wrapper.findAll("li");
    expect(liTags.length).toBe(4);

    expect(liTags[0].text()).toBe("pikachu");
    expect(liTags[1].text()).toBe("ivysaur");
    expect(liTags[2].text()).toBe("venusaur");
    expect(liTags[3].text()).toBe("charmander");
  });

  test("debe de emitir 'selection' con sus respectivos parámetros al hacer click", () => {

    const [li1,li2,li3, li4] = wrapper.findAll("li");
    li1.trigger("click");
    li2.trigger("click");
    li3.trigger("click");
    li4.trigger("click");

    expect(wrapper.emitted('selectionPokemon').length).toBe(4);
    expect(wrapper.emitted('selectionPokemon')[0] ).toEqual([5]);
    expect(wrapper.emitted('selectionPokemon')[1] ).toEqual([10]);
    expect(wrapper.emitted('selectionPokemon')[2] ).toEqual([15]);
    expect(wrapper.emitted('selectionPokemon')[3] ).toEqual([20]);
  });
});
