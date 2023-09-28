import { UsersServiceClient } from "../../proto/users/users_service_grpc_pb"
import { ChannelCredentials } from "@grpc/grpc-js"

const engineUrl = process.env.ENGINE_URL || "localhost:50051"
const credentials = ChannelCredentials.createInsecure()

export const usersServiceClient = new UsersServiceClient(engineUrl, credentials)
