const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../database');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.vacunasPath = '/api/vacunas';
        this.usuariosPath = '/api/usuarios';

        // Conectar a base de datos
        this.conectarDB();

        // Middlewares
        this.middlewares();


        // Rutas de mi aplicación
        this.routes();
    }

    async conectarDB() {
        await dbConnection();
    }


    middlewares() {
        this.app.use(express.urlencoded({ extended: false }));
        // CORS
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use(express.json());

        // // Directorio Público
        // this.app.use( express.static('public') );

    }

    routes() {
        this.app.use(this.vacunasPath, require('../routes/vacunas'));
        this.app.use(this.usuariosPath, require('../routes/usuario'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });

    }

}




module.exports = Server;