import catchAsync from '../utils/catchAsync';
import { UserService } from './user.service';

// all user
const allUsers = catchAsync(async (req, res) => {
  const result = await UserService.allUsers();

  res.status(200).json({
    success: true,
    message: 'All User retrieved successfully',
    data: result,
  });
});

export const UserController = {
  allUsers,
};
