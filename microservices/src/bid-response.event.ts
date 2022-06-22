export class BidResponseEvent {
  constructor(
    public readonly bidder_code: string,
    public readonly ad_id: string,
    public readonly width: number,
    public readonly height: number,
    public readonly size: string,
    public readonly cpm: number,
    public readonly currency: string,
    public readonly net_revenue: boolean,
    public readonly request_imestamp: number,
    public readonly response_timestamp: number,
    public readonly time_to_respond: number,
    public readonly gpt_code: string, // adUnitCode
    public readonly creative_id: string,
    public readonly media_type: string,
    public readonly adserver_targeting: string,
    public readonly native: string,
    public readonly status: string,
    public readonly status_message: string,
    public readonly ttl: number,
  ) {}

  toString() {
    return JSON.stringify({
      bidder_code: this.bidder_code,
      ad_id: this.ad_id,
      width: this.width,
      height: this.height,
      size: this.size,
      cpm: this.cpm,
      currency: this.currency,
      net_revenue: this.net_revenue,
      request_imestamp: this.request_imestamp,
      response_timestamp: this.response_timestamp,
      time_to_respond: this.time_to_respond,
      gpt_code: this.gpt_code,
      creative_id: this.creative_id,
      media_type: this.media_type,
      adserver_targeting: this.adserver_targeting,
      native: this.native,
      status: this.status,
      status_message: this.status_message,
      ttl: this.ttl,
    });
  }
}
