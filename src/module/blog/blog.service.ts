import { IBlog } from './blog.interface';
import { Blog } from './blog.model';

const createBlog = async (payload: IBlog, author: string) => {
  const result = await (
    await Blog.create({ ...payload, author })
  ).populate('author');
  return result;
};

// all Blog

// Single Blog
const singleBlog = async (id: string) => {
  const result = await Blog.findById(id);
  return result;
};

// update Blog
const updateBlog = async (id: string, payload: IBlog) => {
  const result = await Blog.findByIdAndUpdate(id, payload, { new: true });
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
