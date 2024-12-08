import { Controller, Get } from '@nestjs/common';
import { OrderService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @MessagePattern('order.create')
  async handleOrderCreate(@Payload() message: any) {
    return this.orderService.createOrder(message.value);
  }
}
