import catchAsync from '../utils/catchAsync';
import { AuthService } from './auth.service';

const register = catchAsync(async (req, res) => {
  const result = await AuthService.register(req.body);

  res.status(201).json({
    success: true,
    message: 'User registered successfully',
    data: result,
  });
});

const login = catchAsync(async (req, res) => {
  const result = await AuthService.login(req.body);

  res.status(200).json({
    success: true,
    message: 'Login successful',
    token: result?.token,
    data: result?.verifiedUser,
  });
});

export const AuthController = {
  register,
  login,
};
