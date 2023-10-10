import "dotenv/config"
import TikTokLiveClient from "./clients/tiktok-live-client"
import Logger from "./logger"
import { Listener } from "./interactors/listener"
import { MessagesHandler } from "./handlers/messages-handler"
import { usersServiceClient, wheelServiceClient } from "./clients/grpc-client"
import { UserCommandsHandler } from "./handlers/user-commands-handler"
import { WheelCommandsHandler } from "./handlers/wheel-commands-handler"

const uniqueId = process.env.TIKTOK_USERNAME || ""

const main = async () => {
  const logger = Logger.child({ class: "main" })

  try {
    const connection = await TikTokLiveClient.getConnection(uniqueId)

    const userCommandsHandler = new UserCommandsHandler(usersServiceClient)
    const wheelCommandsHandler = new WheelCommandsHandler(wheelServiceClient)
    const messagesHandler = new MessagesHandler(
      userCommandsHandler,
      wheelCommandsHandler
    )
    const messagesListener = new Listener(connection, messagesHandler)

    messagesListener.listenToMessages()

    logger.info(`Connected to roomId ${connection.room.roomId}`)
  } catch (err) {
    logger.error("Failed to connect", err)
  }
}

main()
