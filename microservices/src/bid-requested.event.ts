export class BidRequestEvent {
  constructor(
    public readonly bid_gpt_codes: string,
    public readonly bidder_code: string,
    public readonly timeout: number,
    public readonly labels: string,
    public readonly auction_id: string,
    public readonly publisher_id: string,
    public readonly event_timestamp: number,
  ) {}

  toString() {
    return JSON.stringify({
      bid_gpt_codes: this.bid_gpt_codes,
      bidder_code: this.bidder_code,
      timeout: this.timeout,
      labels: this.labels,
      auction_id: this.auction_id,
      publisher_id: this.publisher_id,
      event_timestamp: this.event_timestamp,
    });
  }
}
