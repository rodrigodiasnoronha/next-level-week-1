import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
    response.json({ app: true });
});

export default routes;
