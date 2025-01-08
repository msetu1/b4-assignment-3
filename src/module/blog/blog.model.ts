import { Schema } from 'mongoose';
import { model } from 'mongoose';
import { IBlog } from './blog.interface';

const blogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: [true, 'title must be needed'] },
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    isPublished: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  },
);

export const Blog = model<IBlog>('Blog', blogSchema);
