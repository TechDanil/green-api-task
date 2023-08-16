import express from 'express';

import { authenticateUser } from '../../../common/src/middleware/authenticationMiddleware.common';
import { taskProcessingController } from '../../../m2-microservice/src/controllers/taskProcessingController';

const router = express.Router();

router.get(
    '/task/:taskId', 
    (req, res, next) => authenticateUser({ req, res, next }), 
    taskProcessingController
);

export default router;