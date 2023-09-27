import { AVAILABLE_COMMANDS } from "../constants"
import { AvailableCommands } from "../types"

export const extractCommandFromMessage = (
  message: string
): AvailableCommands | null => {
  const normalizedMessage = message.trim().toLowerCase()

  for (const command of AVAILABLE_COMMANDS) {
    if (normalizedMessage.startsWith(command)) {
      return command
    }
  }

  return null
}
