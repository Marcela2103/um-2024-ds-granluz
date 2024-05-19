import mysql from 'mysql';

export default class ProductosModel {
    constructor(){
        this.connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "vela",
        });
    }

    connect() {
        this.connection.cinnect();
    }

    closeConnection(){
        this.connection.end();
    }
    async getAllProductos(productoId, country){
        const query = 'SELECT id, codigo, nombre FROM productos';
        try{
            const results = await new Promise((resolve, reject) => {
                this.connection.query(query,(erros, results) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(results);
                    }
                });
            });
            return results;
        } catch (error) {
            throw error;
        }
    }
}