import { AppError } from '../../helpers/AppError';
import { IUser } from '../user/user.interface';
import { User } from '../user/user.model';
import { ILoginUser } from './auth.interface';
import httpStatusCodes from 'http-status-codes';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../../config';

const register = async (payload: IUser) => {
  const result = await User.create(payload);
  return result;
};

const login = async (payload: ILoginUser) => {
  const { email, password } = payload;

  // Check if user exists
  const user = await User.findOne({ email }).select('+password');
  if (!user) {
    throw new AppError(httpStatusCodes.NOT_FOUND, 'User not found!');
  }

  // Verify password
  const isPasswordValid = await bcrypt.compare(password, user?.password);
  if (!isPasswordValid) {
    throw new AppError(httpStatusCodes.UNAUTHORIZED, 'Invalid credentials!');
  }

  const jwtPayload = {
    email: user?.email,
    role: user?.role,
  };

  // Generate JWT token
  const token = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: '10d',
  });

  const verifiedUser = {
    name: user?.name,
    email: user?.email,
    role: user?.role,
  };

  return { token, verifiedUser };
};

export const AuthService = {
  register,
  login,
};
