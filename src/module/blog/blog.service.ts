import { IBlog } from './blog.interface';
import { Blog } from './blog.model';

// create Blog Service section
const createBlog = async (playLoad: IBlog): Promise<IBlog> => {
  const result = await Blog.create(playLoad);
  return result;
};

// all Blog

// Single Blog
const singleBlog = async (id: string) => {
  const result = await Blog.findById(id);
  return result;
};

// update Blog
const updateBlog = async (id: string, playLoad: IBlog) => {
  const result = await Blog.findByIdAndUpdate(id, playLoad, { new: true });
  return result;
};

// delete Blog
const deleteBlog = async (id: string) => {
  const result = await Blog.findByIdAndDelete(id);
  return result;
};

export const BlogService = {
  createBlog,
  singleBlog,
  updateBlog,
  deleteBlog,
};
