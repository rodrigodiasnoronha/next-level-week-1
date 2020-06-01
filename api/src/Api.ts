import 'dotenv/config';
import express, { json, urlencoded } from 'express';
import routes from './routes';

class Api {
    public server = express();

    constructor() {
        this.database();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(json());
        this.server.use(urlencoded({ extended: true }));
    }

    routes() {
        this.server.use(routes);
    }

    database() {}
}

export default Api;
