import UserModel from '../models/user-model';
import bcrypt from 'bcrypt';
import tokenService from './token-service';
import UserDto from '../dtos/user-dto';
import ApiError from '../exceptions/api-error';

class UserService {
  async registration(email: string, password: string) {
    const applicant = await UserModel.findOne({email});
    if (applicant) {
      throw ApiError.BadRequest(`User with ${email} already exists!`)
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await UserModel.create({email, password: hashPassword});
    const userDto = new UserDto(user);
    const tokens = tokenService.generateToken({...userDto});
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    }
  };
  async login(email: string, password: string) {
    const user = await UserModel.findOne({email});
    if (!user) {
      throw ApiError.BadRequest(`User with ${email} not found!`)
    }
    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword) {
      throw ApiError.BadRequest(`User password not valid!`)
    }
    const userDto = new UserDto(user);
    const tokens = tokenService.generateToken({...userDto});
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return {
      ...tokens,
      user: userDto
    }
  }
}

export default new UserService();