import express from 'express';
import ProductosModel from '../productos-model.mjs';

const { Router } = express;

export default class ProductosController{
    #router = Router();
    #productosModel = new ProductosModel();

    constructor(){
        this.registerRouter();
    }

    getRouter(){
        return this.#router;
    }

    registerRouter(){
        const routerV1 = Router();
        routerV1.get(`/productos`, this.getAllProductos);

        this.#router.use(`/v1`, routerV1);
    }

    async getAllProductos(req, res){
        try{
            this.#productosModel.connect();
            const productos = await this.#productosModel.getAllProductos();
            this.#productosModel.closeConnection();
            res.json(productos);
        } catch (error) {
            console.error(`error: ${error}`);
        } finally {
            this.#productosModel.closeConnection();
        }
    }
}