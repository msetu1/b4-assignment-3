import catchAsync from '../utils/catchAsync';
import { BlogService } from './blog.service';

//create Blog Controller section
const createBlog = catchAsync(async (req, res) => {
  const result = await BlogService.createBlog(req.body);
  res.status(201).json({
    success: true,
    message: 'Blog created successfully',
    data: result,
  });
});

// all Blog

// Single Blog
const singleBlog = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BlogService.singleBlog(id);
  res.status(200).json({
    success: true,
    message: 'Single Blog retrieved successfully',
    data: result,
  });
});

// update Blog
const updateBlog = catchAsync(async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const result = await BlogService.updateBlog(id, body);
  res.status(200).json({
    success: true,
    message: ' Blog updated successfully',
    data: result,
  });
});

// delete Blog
const deleteBlog = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BlogService.deleteBlog(id);
  res.status(200).json({
    success: true,
    message: 'Blog deleted successfully',
    data: result,
  });
});

export const BlogController = {
  createBlog,
  singleBlog,
  updateBlog,
  deleteBlog,
};
