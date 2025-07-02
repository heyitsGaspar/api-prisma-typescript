import { Request, Response, NextFunction , RequestHandler} from 'express'
import { ZodSchema } from 'zod'
import { ValidationError } from '../errors/validationError'

export const validateBody= (schema: ZodSchema): RequestHandler => {
  return (req, res, next) =>{
    const result = schema.safeParse(req.body)
    if (!result.success) {
      res.status(400).json({
        message: 'Error de validación en el cuerpo de la petición',
        errors: result.error.flatten().fieldErrors
      })
      return
    }
    req.body = result.data
    next()
  }
}

export const validatedQuery = (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
  const result = schema.safeParse(req.query)
  if (!result.success) {
    res.status(400).json({
      message: 'Error de validación en query params',
      errors: result.error.flatten().fieldErrors
    })
    return next(new ValidationError(result.error.flatten().fieldErrors))
  }

  req.validatedQueryPagination = result.data;

  next()
}
