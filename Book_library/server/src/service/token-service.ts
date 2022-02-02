import jwt from 'jsonwebtoken';
import config from '../common/config';
import TokenModel from '../models/token-model';

class TokenService {
  generateToken(payload: any) {
    const accessToken = jwt.sign(payload, config.JWT_ACCESS_SECRET_KEY, {expiresIn: '40m'});
    const refreshToken = jwt.sign(payload, config.JWT_REFRESH_SECRET_KEY, {expiresIn: '10d'});
    return {
      accessToken,
      refreshToken,
    }
  };
  validateAccessToken(token: string) {
    try {
      const data = jwt.verify(token, config.JWT_ACCESS_SECRET_KEY);
      return data;
    } catch (error) {
      return null;
    }
  };
  validateRefreshToken(token: string) {
    try {
      return jwt.verify(token, config.JWT_REFRESH_SECRET_KEY);

    } catch (error) {
      return null;
    }
  };
  async saveToken(userID: string, refreshToken: string) {
    const tokenData = await TokenModel.findOne({user: userID});
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }
    const token = await TokenModel.create({user: userID, refreshToken});
    return token;
  };
  async removeToken(refreshToken: string) {
    return await TokenModel.deleteOne({refreshToken});
  };
  async findToken(refreshToken: string) {
    return await TokenModel.findOne({refreshToken});
  }
}

export default new TokenService();