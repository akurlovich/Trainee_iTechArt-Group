import jwt from 'jsonwebtoken';
import { Schema } from 'mongoose';
import TokenModel from '../models/token-model';

class TokenService {
  generateToken(payload: any) {
    const accessToken = jwt.sign(payload, 'secr-ky', {expiresIn: '40m'});
    const refreshToken = jwt.sign(payload, 'secr-ky-r', {expiresIn: '10d'});
    return {
      accessToken,
      refreshToken,
    }
  }
  async saveToken(userID: string, refreshToken: string) {
    const tokenData = await TokenModel.findOne({user: userID});
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }
    const token = await TokenModel.create({user: userID, refreshToken});
    return token;

  }
}

export default new TokenService();