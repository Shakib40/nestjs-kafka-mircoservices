import { Controller, Post, Body, Inject, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Controller('orders')
export class OrdersController implements OnModuleInit {
  constructor(
    @Inject('ORDER_SERVICE') private readonly kafkaClient: ClientKafka,
  ) {}

  async onModuleInit() {
    this.kafkaClient.subscribeToResponseOf('order.create');
    await this.kafkaClient.connect();
  }

  @Post('create')
  async createOrder(@Body() orderData: any) {
    console.log('Publishing order to Kafka:', orderData);
    return this.kafkaClient.send('order.create', orderData);
  }
}
