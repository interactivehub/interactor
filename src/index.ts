import "dotenv/config"
import TikTokLiveClient from "./clients/tiktok-live-client"
import Logger from "./logger"
import { Listener } from "./interactors/listener"
import { MessagesHandler } from "./handlers/messages-handler"
import { usersServiceClient } from "./clients/grpc-client"

const uniqueId = process.env.TIKTOK_USERNAME || ""

const main = async () => {
  const logger = Logger.child({ label: "main" })

  try {
    const connection = await TikTokLiveClient.getConnection(uniqueId)
    const messagesHandler = new MessagesHandler(usersServiceClient)
    const messagesListener = new Listener(connection, messagesHandler)

    messagesListener.listenToMessages()

    logger.info(`Connected to roomId ${connection.room.roomId}`)
  } catch (err) {
    logger.error("Failed to connect", err)
  }
}

main()
