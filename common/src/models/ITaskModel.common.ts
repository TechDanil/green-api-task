import { TaskStatus } from "../enums/TaskStatus.common";
import { IHttpRequestModel } from "./IHttpRequestModel.common";

interface ITaskModel {
    id: number;
    status: TaskStatus;
    httpRequest: IHttpRequestModel;
    result?: any;
}

export { ITaskModel };