import { ITaskModel } from '../models/ITaskModel.common';
import { QUEUE_NAME } from '../constants/constants.common';
import { AMQP_URL } from '../settings/settings.common';

import amqp from 'amqplib';

class RabbitMQService {
    channel: amqp.Channel | null = null;

    setup = async () => {
        try {
            const connection = await amqp.connect(AMQP_URL);
            this.channel = await connection.createChannel();
            await this.channel.assertQueue(QUEUE_NAME, { durable: true });
        } catch (error) {
            console.error('Error setting up RabbitMQ channel:', error);
            throw error;
        }
    }

    publishTask = async (task: ITaskModel) => {
        try {
            if (!this.channel) {
                throw new Error('RabbitMQ channel is not set up');
            }

            this.channel.sendToQueue(QUEUE_NAME, Buffer.from(JSON.stringify(task)));
        } catch (error) {
            console.error('Error publishing task:', error);
            throw error;
        }
    }

    consumeTask = async (processor: (task: ITaskModel) => Promise<void>) => {
        try {
            if (!this.channel) {
                throw new Error('RabbitMQ channel is not set up.');
            }

            this.channel.consume(QUEUE_NAME, async msg => {
                if (!msg) {
                    return;
                }

                const task: ITaskModel = JSON.parse(msg.content.toString());
                await processor(task);
                this.channel?.ack(msg);
            });
        } catch (error) {
            console.error('Error consuming task:', error);
            throw error;
        }
    }
}

export { RabbitMQService };