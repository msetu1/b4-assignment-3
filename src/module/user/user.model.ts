import { Schema } from 'mongoose';
import { IUser } from './user.interface';
import { model } from 'mongoose';

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    isBlocked: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

export const User = model<IUser>('User', userSchema);
