import { wallet } from '@/near/Account'
import { Button, Navbar } from '@mantine/core'
import { useNavigate } from 'react-router-dom'

export function NavPage() {
  const navigate = useNavigate()
  return (
    <Navbar
      className="invisible w-0 sm:visible sm:w-32"
      height={600}
      padding="xs"
    >
      {wallet.isSignedIn() ? (
        <Navbar.Section>
          <Button
            className="w-16 sm:w-full"
            variant="outline"
            onClick={() => {
              navigate('/')
            }}
          >
            首页
          </Button>
          <Button
            className="w-16 sm:w-full"
            variant="outline"
            onClick={() => {
              navigate('/feed')
            }}
          >
            信息流
          </Button>
          <Button
            className="w-16 sm:w-full"
            variant="outline"
            onClick={() => {
              navigate('/listchannel')
            }}
          >
            频道列表
          </Button>
          <Button
            className="w-16 sm:w-full"
            variant="outline"
            onClick={() => {
              navigate('/createchannel')
            }}
          >
            创建频道
          </Button>
          <Button
            className="w-16 sm:w-full"
            variant="outline"
            onClick={() => {
              navigate('/createmessage')
            }}
          >
            创建消息
          </Button>
        </Navbar.Section>
      ) : (
        <Navbar.Section>
          <Button
            className="w-2 sm:w-full"
            variant="outline"
            onClick={() => {
              navigate('/feed')
            }}
          >
            信息流
          </Button>
          <Button
            className="w-16 sm:w-full"
            variant="outline"
            onClick={() => {
              navigate('/')
            }}
          >
            首页
          </Button>
        </Navbar.Section>
      )}
    </Navbar>
  )
}
