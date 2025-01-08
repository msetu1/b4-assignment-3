import { Request, Response, NextFunction } from 'express';
import catchAsync from '../module/utils/catchAsync';
import { AppError } from '../helpers/AppError';
import httpStatusCodes from 'http-status-codes';
import jwt from 'jsonwebtoken';
import { User } from '../module/user/user.model';
import config from '../config';

export const auth = (roles: string[] = []) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      throw new AppError(
        httpStatusCodes.UNAUTHORIZED,
        'You are not authorized!',
      );
    }

    // Verify the token
    try {
      const decodedToken = jwt.verify(token, config.jwt_access_secret!);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const user = await User.findById((decodedToken as any).id);

      if (!user) {
        throw new AppError(httpStatusCodes.NOT_FOUND, 'User does not exist!');
      }

      // Check if the user is blocked
      if (user.isBlocked) {
        throw new AppError(
          httpStatusCodes.FORBIDDEN,
          'Your account is blocked. Contact support.',
        );
      }

      // Attach user information to the request object
      req.user = user;

      // Check for role-based authorization
      if (roles.length && !roles.includes(user.role)) {
        throw new AppError(
          httpStatusCodes.FORBIDDEN,
          'You do not have permission to perform this action.',
        );
      }

      next();
    } catch (error) {
      console.log(error);
      throw new AppError(
        httpStatusCodes.UNAUTHORIZED,
        'Invalid token! Please log in again.',
      );
    }
  });
};
