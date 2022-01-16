import { NPNSChannelInputProps, NPNSChannelProps, NPNSMetadata } from '@/types'
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
