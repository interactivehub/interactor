import { UsersServiceClient } from "../../proto/users/users_service_grpc_pb"
import { NewUserRequest } from "../../proto/users/users_service_pb"
import Logger from "../logger"
import { TikTokLiveMessage } from "../types"
import { extractCommandFromMessage } from "../utils/command-from-message"

export class MessagesHandler {
  private readonly logger = Logger.child({ class: MessagesHandler.name })

  constructor(private readonly usersServiceClient: UsersServiceClient) {}

  public handle = (message: TikTokLiveMessage) => {
    const { msgId, comment, userId, uniqueId, nickname } = message

    this.logger.info(`Handling message with id ${msgId}`, message)

    const command = extractCommandFromMessage(comment)

    switch (command) {
      case "!new": {
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
  }
}
