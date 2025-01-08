import express from 'express';
import { BlogController } from './blog.controller';
// import { validateRequest } from '../../middlewares/validateRequest';
// import { BlogValidation } from './blog.validate';
// import { auth } from '../../middlewares/auth';

const router = express.Router();

// Blog  route
router.post('/create-blog', BlogController.createBlog);

// single Blog
router.get('/:id', BlogController.singleBlog);

// update Blog
router.patch('/:id', BlogController.updateBlog);

// delete Blog
router.delete('/:id', BlogController.deleteBlog);

// All Blogs

export const BlogRoute = router;
