import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderService {
  async createOrder(data: any) {
    return { status: 'success', orderId: Math.floor(Math.random() * 1000) };
  }
}
