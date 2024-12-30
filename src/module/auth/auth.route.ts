import express from 'express';
import { AuthController } from './auth.controller';
import { validateRequest } from '../../middlewares/validateRequest';
import { UserValidation } from '../user/user.validate';
import { AuthValidation } from './auth.validate';

const router = express.Router();

router.post(
  '/register',
  validateRequest(UserValidation.userValidateSchema),
  AuthController.register,
);

router.post(
  '/login',
  validateRequest(AuthValidation.loginValidateSchema),
  AuthController.login,
);

export const AuthRoute = router;
