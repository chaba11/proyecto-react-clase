import StorageHelper from '../../utils/local-storage-helper';
import { ApiService } from '../api-service';
import { API_ROUTES } from '../api-routes';

class SessionController {
  static async login(username, password) {
    const response = await ApiService.post(API_ROUTES.LOGIN, {
      username,
      password,
    });
    StorageHelper.setUser(response.data);
  }
}

export default SessionController;
