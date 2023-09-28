import { Connection } from "../types"

export class Writer {
  constructor(private readonly conn: Connection) {}

  public writeMessage = (message: string) => {
    this.conn.conn.sendMessage(message, "TODO")
  }
}
