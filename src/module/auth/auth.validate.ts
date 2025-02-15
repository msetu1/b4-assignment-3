import { z } from 'zod';

const loginValidateSchema = z.object({
  email: z.string({ required_error: 'Email is required !' }).email(),
  password: z.string({ required_error: 'Password is required !' }),
});

export const AuthValidation = {
  loginValidateSchema,
};
