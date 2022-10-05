import { Example } from '../../models/example';
import { ExampleSerializer } from '../serializers/example-serializer';
import { ApiService } from '../api-service';
import { API_ROUTES } from '../api-routes';
import StorageHelper from '../../utils/local-storage-helper';

class ExampleController {
  static async getExamples() {
    const response = await ApiService.get(API_ROUTES.EXAMPLE);
    const deSerializedExample = ExampleSerializer.deSerialize(response.data);
    return new Example(deSerializedExample);
  }

  static createExample(example) {
    const serializedExample = ExampleSerializer.serialize(example);
    return ApiService.post(API_ROUTES.EXAMPLE, {
      example: serializedExample,
    });
  }

  static async getPokemon() {
    try {
      const response = await ApiService.get(`${API_ROUTES.POKEMON}/pikachu`, { headers: { Authorization: `Bearer ${StorageHelper.getLocalRefreshToken()}` } });
      return response.data;
    } catch (error) {
      return { error: error.message, status: error.status, code: error.code };
    }
  }
}

export { ExampleController };
