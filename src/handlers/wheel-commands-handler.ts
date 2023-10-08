import { WheelServiceClient } from "../../proto/games/wheel/wheel_service_grpc_pb"
import {
  JoinWheelRoundRequest,
  WheelItemColor,
  WheelItemColorMap,
} from "../../proto/games/wheel/wheel_service_pb"
import Logger from "../logger"
import { TikTokLiveMessage } from "../types"
import { extractCommandFromMessage } from "../utils/command-from-message"

export class WheelCommandsHandler {
  private readonly logger = Logger.child({ class: WheelCommandsHandler.name })

  constructor(private readonly wheelServiceClient: WheelServiceClient) {}

  public handleJoinWheelRound = (message: TikTokLiveMessage) => {
    const { userId, comment } = message

    const command = extractCommandFromMessage(comment)

    if (command !== "!bet") throw new Error("unprocessable message")

    // @example !bet blue 50.47
    const commandPattern = /^!bet\s+(grey|blue|yellow|red)\s+(\d+(\.\d{1,2})?)$/

    const matches = comment.match(commandPattern)
    if (!matches) throw new Error("invalid command format")

    const [_, pick, bet] = matches

    const joinWheelRoundRequest = new JoinWheelRoundRequest()
    joinWheelRoundRequest.setUserId(userId)
    joinWheelRoundRequest.setPick(
      WheelItemColor[pick.toUpperCase() as keyof WheelItemColorMap]
    )
    joinWheelRoundRequest.setBet(parseFloat(bet))

    this.wheelServiceClient.joinWheelRound(joinWheelRoundRequest, (err) => {
      if (err) {
        this.logger.error(
          `User with id ${userId} failed to join current wheel round`,
          err
        )
      } else {
        this.logger.info(
          `User with id ${userId} successfully joined current wheel round`
        )
      }
    })
  }
}
