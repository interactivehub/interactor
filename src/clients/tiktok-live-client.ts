import { WebcastPushConnection } from "tiktok-live-connector"
import { Connection, TikTokLiveRoom } from "../types"

class TikTokLiveClient {
  private static instance: WebcastPushConnection

  private constructor() {}

  public static getClient(uniqueId: string): WebcastPushConnection {
    if (!TikTokLiveClient.instance) {
      TikTokLiveClient.instance = new WebcastPushConnection(uniqueId)
    }

    return TikTokLiveClient.instance
  }

  public static async getConnection(uniqueId: string): Promise<Connection> {
    const client = TikTokLiveClient.getClient(uniqueId)
    const room: TikTokLiveRoom = await client.connect()

    return {
      conn: client,
      room,
    }
  }
}

export default TikTokLiveClient
