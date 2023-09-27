import { WebcastPushConnection } from "tiktok-live-connector"
import { AVAILABLE_COMMANDS } from "./constants"

export interface TikTokLiveMessage {
  comment: string
  userId: string
  secUid: string
  uniqueId: string
  nickname: string
  profilePictureUrl: string
  followRole: 0 | 1 | 2
  userBadges: unknown[]
  userDetails: {
    createTime: string
    bioDescription: string
    profilePictureUrls: string[]
  }
  followInfo: {
    followingCount: number
    followerCount: number
    followStatus: number
    pushStatus: number
  }
  isModerator: boolean
  isNewGifter: boolean
  isSubscriber: boolean
  topGifterRank: null | number
  msgId: string
  createTime: string
}

export interface TikTokLiveRoomInfo {
  AnchorABMap: Record<string, unknown>
  admin_user_ids: number[]
  anchor_scheduled_time_text: string
  anchor_share_text: string
  anchor_tab_type: number
  answering_question_content: string
  app_id: number
  audio_mute: number
  auto_cover: number
  book_end_time: number
  book_time: number
  business_live: number
  challenge_info: string
  client_version: number
  comment_has_text_emoji_emote: number
  comment_name_mode: number
  commerce_info: {
    commerce_permission: number
    oec_live_enter_room_init_data: string
    use_async_load: boolean
  }
  common_label_list: string
  content_tag: string
  cover: {
    avg_color: string
    height: number
    image_type: number
    is_animated: boolean
    open_web_url: string
    uri: string
    url_list: string[]
    width: number
  }
  create_time: number
  deco_list: unknown[]
  with_draw_something: boolean
  with_ktv: boolean
  with_linkmic: boolean
}

export interface TikTokLiveRoom {
  isConnected: boolean
  upgradedToWebsocket: boolean
  roomId: string
  roomInfo: TikTokLiveRoomInfo
  availableGifts: unknown[]
}

export interface Connection {
  conn: WebcastPushConnection
  room: TikTokLiveRoom
}

export type AvailableCommands = (typeof AVAILABLE_COMMANDS)[number]
