import { User } from './user.model';

// all user
const allUsers = async () => {
  const result = await User.find();
  return result;
};

export const UserService = {
  allUsers,
};
