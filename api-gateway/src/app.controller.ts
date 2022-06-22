import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateOrderRequest } from './create-order-request.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  auctionEnded(@Body() body: any) {
    this.appService.auctionEnded(body);
  }

  @Post('bid-won')
  bidWon(@Body() body: any) {
    this.appService.bidWon(body);
  }

  @Post('bid-timeout')
  bidTimeout(@Body() body: any) {
    this.appService.bidTimeout(body);
  }
}
