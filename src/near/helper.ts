import BN from 'bn.js'
import { utils } from 'near-api-js'

export const toYoctoNear = (amount: number): string =>
  utils.format.parseNearAmount(amount.toString()) || '0'

export const getAmount = (amount: string) => {
  const parsed = utils.format.parseNearAmount(amount)
  const val = parsed ? new BN(parsed) : new BN('0')
  return val
}

export const getGas = (gas: string) =>
  gas ? new BN(gas) : new BN('100000000000000')
