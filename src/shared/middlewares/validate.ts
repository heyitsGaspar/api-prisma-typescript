import { Request, Response, NextFunction , RequestHandler} from 'express'
import { ZodSchema } from 'zod'
import { ValidationError } from '../errors/validationError'

export const validateBody= (schema: ZodSchema): RequestHandler => {
  return (req, res, next) =>{
    const result = schema.safeParse(req.body)
    if (!result.success) {
      return next(new ValidationError(result.error.flatten().fieldErrors))
    }
    req.body = result.data
    next()
  }
}

export const validatedQuery = (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
  const result = schema.safeParse(req.query)
  if (!result.success) {
    return next(new ValidationError(result.error.flatten().fieldErrors))
  }

  req.validatedQueryPagination = result.data;

  next()
}
