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
});
