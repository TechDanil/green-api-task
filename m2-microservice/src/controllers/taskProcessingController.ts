import { Request, Response } from "express";
import { TaskProcessingService } from "../../../m2-microservice/src/services/TaskProcessingService";

import logger from "../../../common/src/services/loggingService";

const taskProcessingController = async (req: Request, res: Response) => {
    try {
        const taskId = +req.params.taskId;

        const taskIdskProcessingService = new TaskProcessingService();
        const result = await taskIdskProcessingService.processTask(taskId);

        logger.info('Processing task', { taskId, result });
       

        return res.status(200).json(result);
    } catch(error) {
        logger.error('Error processing task', { error });
        return res.status(500).json({ error: 'Internal server error' });
    }
}

export { taskProcessingController };