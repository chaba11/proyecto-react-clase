import { Pokemon } from '../../models/pokemon';
import { API_ROUTES } from '../api-routes';
import { ApiService } from '../api-service';
import { PokemonSerializer } from '../serializers/pokemon-serializer';

export class PokemonController {
  static async getPokemon(name) {
    const response = await ApiService.get(API_ROUTES.POKEMON_NAME(name));
    return new Pokemon(PokemonSerializer.deSerialize(response.data));
  }
}
