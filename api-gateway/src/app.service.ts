import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { CreateOrderRequest } from './create-order-request.dto';
import { OrderCreatedEvent } from './order-created.event';

@Injectable()
export class AppService {
  constructor(
    @Inject('PREBID_SERVICE') private readonly prebidClient: ClientKafka,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  createOrder({ userId, price }: CreateOrderRequest) {
    this.prebidClient.emit(
      'order_created',
      new OrderCreatedEvent('123', userId, price),
    );
  }

  auctionEnded(body: any) {
    this.prebidClient.emit('auction_ended', body);
  }

  bidWon(body: any) {
    this.prebidClient.emit('bid_won', body);
  }

  bidTimeout(body: any) {
    this.prebidClient.emit('bid_timeout', body);
  }
}
