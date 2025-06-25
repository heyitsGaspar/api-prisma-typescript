import { Request, Response, NextFunction } from 'express'
import { ZodSchema } from 'zod'

export const validateBody = (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
  const result = schema.safeParse(req.body)
  if (!result.success) {
    return res.status(400).json({
      message: 'Error de validación',
      errors: result.error.flatten().fieldErrors
    })
  }
  req.body = result.data
  next()
}

export const validateQuery = (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
  const result = schema.safeParse(req.query)
  if (!result.success) {
    return res.status(400).json({
      message: 'Error de validación en query params',
      errors: result.error.flatten().fieldErrors
    })
  }
  req.query = result.data
  next()
}
