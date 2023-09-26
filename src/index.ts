import "dotenv/config"
import TikTokLiveClient from "./clients/tiktok-client"

const tiktokLiveConnection = TikTokLiveClient.getClient()

// Connect to the chat (await can be used as well)
tiktokLiveConnection
  .connect()
  .then((state) => {
    console.info(`Connected to roomId ${state.roomId}`)
  })
  .catch((err) => {
    console.error("Failed to connect", err)
  })

// Define the events that you want to handle
// In this case we listen to chat messages (comments)
tiktokLiveConnection.on("chat", (data) => {
  console.log(
    `${data.uniqueId} (userId:${data.userId}) writes: ${data.comment}`
  )
})

// And here we receive gifts sent to the streamer
tiktokLiveConnection.on("gift", (data) => {
  console.log(`${data.uniqueId} (userId:${data.userId}) sends ${data.giftId}`)
})

// ...and more events described in the documentation below
