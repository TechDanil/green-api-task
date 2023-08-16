import express from 'express';
import bodyParser from 'body-parser';
import logger from '../../common/src/services/loggingService';
import dotenv from 'dotenv';

import httpRouter  from './router/router';

import { RabbitMQService } from '../../common/src/services/rabbitMQService.common';

dotenv.config();

const app = express();
const port = process.env.M1_PORT;

app.use(bodyParser.json());

app.use('/', httpRouter);

const startServer = async () => {
    try {
        const rabbitMQService = new RabbitMQService();
        await rabbitMQService.setup();

        app.use('/', httpRouter);

        app.listen(port, () => {
            logger.info(`M1 microservice is running on port ${port}`);
        });
    } catch (error) {
        console.error('Error setting up M1 microservice:', error);
    }
};

startServer();