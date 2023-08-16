import { ITaskModel } from "../../../common/src/models/ITaskModel.common";
import { IHttpRequestModel } from "../../../common/src/models/IHttpRequestModel.common";
import { RabbitMQService } from "../../../common/src/services/rabbitMQService.common";
import { TaskStatus } from "../../../common/src/enums/TaskStatus.common";
import { generateUniqueId } from "../../../common/src/utils/generateUniqueId/generateUniqueId.common";

class TaskService {
    rabbitMQService = new RabbitMQService();

    createTask = async(httpRequest: IHttpRequestModel) => {
        try {
            await this.rabbitMQService.setup()

            const task: ITaskModel = {
                id: generateUniqueId(),
                status: TaskStatus.PENDING,
                httpRequest: httpRequest,
            };

            await this.rabbitMQService.publishTask(task);
            return task;
        } catch(error) {
            console.error("Error in createTask:", error);
            throw error;
        }
    }
}

export { TaskService };