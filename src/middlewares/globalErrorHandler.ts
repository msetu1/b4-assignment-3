/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import { handleZodError } from '../helpers/handleZodError';
import { handleCastError } from '../helpers/handleCastError';
import { handleValidationError } from '../helpers/handleValidationError';
import { handleDuplicateError } from '../helpers/handleDuplicateError';
import { handleGenericError } from '../helpers/handleGenericError';

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // zod error
  if (err.name && err.name === 'ZodError') {
    handleZodError(err, res);
  }

  // mongoose cast error
  else if (err instanceof mongoose.Error.CastError) {
    handleCastError(err, res);
  }

  // validate error
  else if (err instanceof mongoose.Error.ValidationError) {
    handleValidationError(err, res);
  }

  // duplicate error
  else if (err.code && err.code === 11000) {
    handleDuplicateError(err, res);
  }

  // generic error
  else if (err instanceof Error) {
    handleGenericError(err, res);
  }
};
export default globalErrorHandler;
