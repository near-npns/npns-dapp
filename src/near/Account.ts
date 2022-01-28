import * as nearAPI from 'near-api-js'
import { Near } from 'near-api-js'

const { connect, keyStores, WalletConnection } = nearAPI

const config = {
  networkId: 'testnet',
  keyStore: new keyStores.BrowserLocalStorageKeyStore(),
  nodeUrl: 'https://rpc.testnet.near.org',
  walletUrl: 'https://wallet.testnet.near.org',
  helperUrl: 'https://helper.testnet.near.org',
  explorerUrl: 'https://explorer.testnet.near.org',
  headers: {}
}

export const ACCOUNT_MIN_STORAGE_AMOUNT = '0.003'
export const MIN_GAS = '100000000000000'
export const near = new Near(config)

export const wallet = new WalletConnection(near, null)

export const NPNS_CONTRACT_ID = 'npns-test-2.kula.testnet'

export interface AccountStorageView {
  total: string
  available: string
}
