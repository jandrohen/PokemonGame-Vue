import pokemonApi from '@/api/PokemonApi';

describe('pokemonApi', () => {

    test('axios debe de estar configurado con el api de pokemon', () => {
        expect(pokemonApi.defaults.baseURL)
            .toBe('https://pokeapi.co/api/v2/pokemon')
    });
});
