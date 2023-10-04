import { UsersServiceClient } from "../../proto/users/users_service_grpc_pb"
import { NewUserRequest } from "../../proto/users/users_service_pb"
import Logger from "../logger"
import { TikTokLiveMessage } from "../types"
import { extractCommandFromMessage } from "../utils/command-from-message"

export class UserCommandsHandler {
  private readonly logger = Logger.child({ class: UserCommandsHandler.name })

  constructor(private readonly usersServiceClient: UsersServiceClient) {}

  public handleNewUser = (message: TikTokLiveMessage) => {
    const { userId, comment, uniqueId, nickname } = message

    const command = extractCommandFromMessage(comment)

    if (command !== "!new") throw new Error("unprocessable message")

    const newUserRequest = new NewUserRequest()
    newUserRequest.setUserId(userId)
    newUserRequest.setUniqueId(uniqueId)
    newUserRequest.setNickname(nickname)

    this.usersServiceClient.newUser(newUserRequest, (err) => {
      if (err) {
        this.logger.error(`Error creating user with id ${userId}`, err)
      } else {
        this.logger.info(`Successfully created user with id ${userId}`)
      }
    })
  }
}
