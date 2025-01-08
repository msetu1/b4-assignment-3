import { z } from 'zod';
const createBlogValidateSchema = z.object({
  title: z.string(),
  content: z.string(),
  isPublished: z.boolean().optional(),
});
const updateBlogValidateSchema = z.object({
  title: z.string().optional(),
  content: z.string().optional(),
  isPublished: z.boolean().optional(),
});

export const BlogValidation = {
  createBlogValidateSchema,
  updateBlogValidateSchema,
};
