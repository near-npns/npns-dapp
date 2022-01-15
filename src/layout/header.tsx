import { NPNS_CONTRACT_ID, wallet } from '@/near/Account'
import { Button, Header } from '@mantine/core'
export function HeaderPage() {
  return (
    <Header
      className="container flex flex-col flex-wrap items-center p-5 mx-auto text-gray-600 md:flex-row"
      height={80}
      padding="xs"
    >
      <a className="flex items-center mb-4 font-medium text-gray-900 md:mb-0">
        <span className="ml-3 text-xl">pnps</span>
      </a>
      <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
        <a className="mr-5 hover:text-gray-900">a</a>
        <a className="mr-5 hover:text-gray-900">b</a>
        <a className="mr-5 hover:text-gray-900">c</a>
        <a className="mr-5 hover:text-gray-900">d</a>
      </nav>
      {wallet.isSignedIn() ? (
        wallet.getAccountId()
      ) : (
        <Button
          variant="outline"
          onClick={() => {
            wallet.requestSignIn(NPNS_CONTRACT_ID)
          }}
        >
          连接钱包
        </Button>
      )}
    </Header>
  )
}
