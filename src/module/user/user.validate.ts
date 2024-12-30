import { z } from 'zod';

export const userValidateSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email format').min(1, 'Email is required'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
  role: z.enum(['admin', 'user']).optional().default('user'),
  isBlocked: z.boolean().optional().default(false),
});

export const UserValidation = {
  userValidateSchema,
};
