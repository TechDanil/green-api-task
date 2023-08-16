import express from 'express';

import { authenticateUser } from '../../../common/src/middleware/authenticationMiddleware.common';
import { httpRequestController } from '../../../m1-microservice/src/controllers/httpRequestController';

const httpRouter = express.Router();

httpRouter.post(
    '/http-request', 
    (req, res, next) => authenticateUser({ req, res, next }), 
    httpRequestController
);

export default httpRouter ;