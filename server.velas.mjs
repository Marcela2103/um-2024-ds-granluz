import express, { json } from 'express';
import ProductosController from '/features/productos/api/v1/ProductosController';

const app = express();
//Middleware
app.use(json());

//Routes
const productosApiController = new ProductosController();
app.use('/api/', productosApiController.getRouter());


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});