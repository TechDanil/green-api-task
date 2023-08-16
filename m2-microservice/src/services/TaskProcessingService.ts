import { RabbitMQService } from "../../../common/src/services/rabbitMQService.common";
import { ITaskModel } from "../../../common/src/models/ITaskModel.common";
import { TaskStatus } from "../../../common/src/enums/TaskStatus.common";
import { delayProcessTask } from "../../../m2-microservice/src/utils/delayProcessTask/delayProcessTask";
import { PROCESS_TIME } from "../../../m2-microservice/src/constants/constants";

class TaskProcessingService {
    rabbitMQService = new RabbitMQService();

    processTask = async(taskId: number) => {
        try {
            await this.rabbitMQService.setup();

            const processor = async(task: ITaskModel) => {
                try {
                    if ( task.id === taskId && task.status === TaskStatus.PENDING) {
                        await delayProcessTask(PROCESS_TIME);
                        task.status = TaskStatus.COMPLETED;
                        task.result = { message: 'Task has processed successfully' };
                        this.rabbitMQService.publishTask(task);
                    }
                } catch(error) {
                    console.error('Error processing task:', error);
                }
                
            }

            await this.rabbitMQService.consumeTask(processor);

            return { message: 'Task processing initiated' };
        }catch(error) {
            console.error('Error in processTask:', error);
        }
        

       
    }
}

export { TaskProcessingService };