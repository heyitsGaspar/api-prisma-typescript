import express from 'express';
import { productRoutes } from '../src/modules/products/routes/productRoutes';
import { errorHandler } from '../src/shared/middlewares/errorHandler';

const app = express();

app.use(express.json());
app.use('/products', productRoutes);

app.use(errorHandler);

app.get('/', (req, res) => {
  res.json({ message: 'API funcionando con Express, TypeScript y Prisma!' });
});

app.get('/error-test', (req, res, next) => {
  // Lanzamos un error arbitrario para probar middleware de errores
  next(new Error('Error de prueba lanzado'));
});



const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
