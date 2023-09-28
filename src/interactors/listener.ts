import Logger from "../logger"
import { Connection, TikTokLiveMessage } from "../types"
import { MessagesHandler } from "../handlers/messages-handler"

export class Listener {
  private readonly logger = Logger.child({ class: Listener.name })

  constructor(
    private readonly conn: Connection,
    private readonly messagesHandler: MessagesHandler
  ) {}

  public listenToAllEvents = () => {
    this.listenToMessages()
  }

  public listenToMessages = () => {
    const { conn, room } = this.conn

    this.logger.info(`Listening to messages for roomId ${room.roomId}`)

    conn.on("chat", (message: TikTokLiveMessage) => {
      this.messagesHandler.handle(message)
    })
  }
}
