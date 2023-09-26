import { WebcastPushConnection } from "tiktok-live-connector"

const config = {
  username: process.env.TIKTOK_USERNAME || "",
}

class TikTokLiveClient {
  private static instance: WebcastPushConnection

  private constructor() {}

  public static getClient(): WebcastPushConnection {
    if (!TikTokLiveClient.instance) {
      TikTokLiveClient.instance = new WebcastPushConnection(config.username)
    }

    return TikTokLiveClient.instance
  }
}

export default TikTokLiveClient
