import express from 'express';
import logger  from '../../common/src/services/loggingService';
import dotenv from 'dotenv';

import router from './router/router';

import { RabbitMQService } from '../../common/src/services/rabbitMQService.common';

dotenv.config();

const app = express();
const port = process.env.M2_PORT;

app.use('/', router);

const startServer = async () => {
    try {
        const rabbitMQService = new RabbitMQService();
        await rabbitMQService.setup();

        app.use('/', router);

        app.listen(port, () => {
            logger.info(`M2 microservice is running on port ${port}`);
        });
    } catch (error) {
        console.error('Error setting up M2 microservice:', error);
    }
};

startServer();