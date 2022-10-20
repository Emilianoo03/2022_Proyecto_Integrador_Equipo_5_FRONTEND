import AuthService from '../services/AuthService';

class AuthController {
  static async login(userData) {
    const response = await AuthService.login(userData);
    return response;
  }

  static async getCurrentUser() {
    const response = await AuthService.getCurrentUser();
    return response;
  }
}

export default AuthController;
