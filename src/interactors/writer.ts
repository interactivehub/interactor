import Logger from "../logger"
import { Connection } from "../types"

export class Writer {
  private readonly logger = Logger.child({ label: Writer.name })

  constructor(private readonly conn: Connection) {}

  public writeMessage = (message: string) => {
    this.conn.conn.sendMessage(message, "TODO")
  }
}
