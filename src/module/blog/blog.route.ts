import express from 'express';
import { BlogController } from './blog.controller';

const router = express.Router();

//create Blog
router.post('/create-blog', BlogController.createBlog);

// single Blog
router.get('/:id', BlogController.singleBlog);

// update Blog
router.patch('/:id', BlogController.updateBlog);

// delete Blog
router.delete('/:id', BlogController.deleteBlog);

// All Blogs

export const BlogRoute = router;
