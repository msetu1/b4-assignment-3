// import { IUser } from './user.interface';
import { User } from './user.model';

// create user Service section
// const createUser = async (playLoad: IUser): Promise<IUser> => {
//   playLoad.role = 'admin';
//   const result = await User.create(playLoad);
//   return result;
// };

// all user
const allUsers = async () => {
  const result = await User.find();
  return result;
};

export const UserService = {
  allUsers,
};
