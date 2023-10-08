import { UsersServiceClient } from "../../proto/users/users_service_grpc_pb"
import { NewUserRequest } from "../../proto/users/users_service_pb"
import Logger from "../logger"
import { TikTokLiveMessage } from "../types"
import { extractCommandFromMessage } from "../utils/command-from-message"
import { UserCommandsHandler } from "./user-commands-handler"
import { WheelCommandsHandler } from "./wheel-commands-handler"

export class MessagesHandler {
  private readonly logger = Logger.child({ class: MessagesHandler.name })

  constructor(
    private readonly userCommandsHandler: UserCommandsHandler,
    private readonly wheelCommandsHandler: WheelCommandsHandler
  ) {}

  public handle = (message: TikTokLiveMessage) => {
    const { msgId, comment } = message

    this.logger.info(`Handling message with id ${msgId}`, message)

    const command = extractCommandFromMessage(comment)

    switch (command) {
      case "!new":
        this.userCommandsHandler.handleNewUser(message)
        break
      case "!bet":
        this.wheelCommandsHandler.handleJoinWheelRound(message)
        break
      default:
        this.logger.info(`Unprocessable message with id ${msgId}`)
        break
    }
  }
}
