import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('auction_ended')
  handleBidRequested(data: any) {
    this.appService.handleAuctionEnded(data.value);
  }

  @EventPattern('bid_won')
  handleBidWon(data: any) {
    this.appService.handleBidWon(data.value);
  }

  @EventPattern('bid_timeout')
  handleBidTimeout(data: any) {
    this.appService.handleBidTimeout(data.value);
  }
}
