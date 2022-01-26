import {
  NPNSChannelInputProps,
  NPNSChannelProps,
  NPNSMessageInputProps,
  NPNSMetadata
} from '@/types'
import { FinalExecutionOutcome } from 'near-api-js/lib/providers'
import { MIN_GAS, NPNS_CONTRACT_ID, wallet } from './Account'
import { getAmount, getGas } from './helper'
import { NearFunctionCallOptions, NearViewFunctionOptions } from './near'
export const ONE_YOCTO_NEAR = '0.000000000000000000000001'
export const ONE_NEAR = '1'
export const ONE_MORE_DEPOSIT_AMOUNT = '0.01'

export const ViewFunction = ({ methodName, args }: NearViewFunctionOptions) => {
  //console.log(`call ${methodName} with args: ${JSON.stringify(args)}`);
  return wallet.account().viewFunction(NPNS_CONTRACT_ID, methodName, args)
}

export const FunctionCall = ({
  methodName,
  args,
  gas,
  amount
}: NearFunctionCallOptions) => {
  return wallet.account().functionCall({
    contractId: NPNS_CONTRACT_ID,
    methodName: methodName,
    args: args,
    gas: getGas(gas),
    attachedDeposit: getAmount(amount)
  })
}

export const daoGetMetaData = (): Promise<NPNSMetadata> => {
  return ViewFunction({ methodName: 'metadata', args: {} })
}

export const npnsGetChannels = (
  from: number,
  limit: number
): Promise<NPNSChannelProps[]> => {
  return ViewFunction({
    methodName: 'channels',
    args: { from: from, limit: limit }
  })
}

export const npnsAddChannel = (
  props: NPNSChannelInputProps
): Promise<FinalExecutionOutcome> => {
  return FunctionCall({
    methodName: 'add_channel',
    args: { channel: props },
    gas: MIN_GAS,
    amount: ONE_NEAR
  })
}

export const npnsSubscribes = (
  member: string,
  channel_ids: number[]
): Promise<Record<number, boolean>> => {
  return ViewFunction({
    methodName: 'subscribes',
    args: { member: member, channel_ids: channel_ids }
  })
}

export const npnsSubscribe = (
  channel_id: number
): Promise<FinalExecutionOutcome> => {
  return FunctionCall({
    methodName: 'subscribe',
    args: { channel_id: channel_id },
    gas: MIN_GAS,
    amount: ONE_YOCTO_NEAR
  })
}

export const npnsUnSubscribe = (
  channel_id: number
): Promise<FinalExecutionOutcome> => {
  return FunctionCall({
    methodName: 'unsubscribe',
    args: { channel_id: channel_id },
    gas: MIN_GAS,
    amount: ONE_YOCTO_NEAR
  })
}

export const npnsIsRegistered = (member: string): Promise<boolean> => {
  return ViewFunction({
    methodName: 'is_registered',
    args: { member: member }
  })
}

export const npnsRegister = (): Promise<FinalExecutionOutcome> => {
  return FunctionCall({
    methodName: 'register',
    args: {},
    gas: MIN_GAS,
    amount: ONE_YOCTO_NEAR
  })
}

export const npnsPublish = (
  props: NPNSMessageInputProps
): Promise<FinalExecutionOutcome> => {
  return FunctionCall({
    methodName: 'publish',
    args: {
      channel_id: props.channel_id,
      message: {
        title: props.title,
        content: props.content,
        kind: { type: 'Text' }
      }
    },
    gas: MIN_GAS,
    amount: '0.1'
  })
}
