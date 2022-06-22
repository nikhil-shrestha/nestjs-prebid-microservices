import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  handleBidRequested(body: any) {
    console.log(body);
  }

  handleBidWon(body: any) {
    console.log(body);
  }

  handleBidTimeout(body: any) {
    console.log(body);
  }

  handleAuctionEnded(body: any) {
    console.log(body);
  }
}
