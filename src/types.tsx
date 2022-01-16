export interface NPNSMetadata {
  headcount: number
  last_channel_id: number
}

export interface NPNSChannelProps {
  id: number
  channel: NPNSChannel
}

export interface NPNSSubscribes {
  id: number
  isSubscribed: boolean
}
export interface NPNSChannel {
  name: string
  icon: string
  description: string
  amount: BigInt
  created_at: BigInt
  updated_at: BigInt
}

export interface NPNSChannelInputProps {
  name: string
  icon: string
  description: string
}
