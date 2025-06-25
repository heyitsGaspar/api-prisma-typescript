import express from 'express';
import {productRoutes} from '../src/modules/products/routes/productRoutes';

const app = express();


app.use(express.json());
app.use('/products', productRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'API funcionando con Express, TypeScript y Prisma!' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
