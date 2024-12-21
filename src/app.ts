import express from 'express';
import { Application, Request, Response } from 'express';
import cors from 'cors';
import notFound from './middlewares/notFound';
import { BlogRoute } from './module/blog/blog.route';
import globalErrorHandler from './middlewares/globalErrorHandler';
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application route
app.use('/api/blogs', BlogRoute);

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server is running',
  });
});

// error handling
app.use(globalErrorHandler);
app.use(notFound);

export default app;
