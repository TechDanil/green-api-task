import { TaskService } from '../../../m1-microservice/src/services/TaskService';
import { IHttpRequestModel } from '../../../common/src/models/IHttpRequestModel.common';

import { Request, Response } from 'express';

import logger  from '../../../common/src/services/loggingService';

const httpRequestController = async (req: Request, res: Response) => {
    try {
        const httpRequest: IHttpRequestModel = {
            url: req.body.url,
            method: req.body.method,
            headers: req.body.headers,
            body: req.body.body,
        };
    
        const taskService = new TaskService();
        const task = await taskService.createTask(httpRequest);

        logger.info('Task created', { taskId: task.id });
    
        return res.status(200).json(task);
    } catch(error) {
        logger.error('Error in HTTP request controller', { error });
        return res.status(500).json({ error: 'Internal server error' });
    }
    
}

export { httpRequestController };