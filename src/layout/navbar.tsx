import { Button, Navbar } from '@mantine/core'
import { useNavigate } from 'react-router-dom'

export function NavPage() {
  const navigate = useNavigate()
  return (
    <Navbar height={600} padding="xs" width={{ base: 120 }}>
      <Navbar.Section>
        <Button
          variant="outline"
          onClick={() => {
            navigate('/createchannel')
          }}
        >
          创建频道
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            navigate('/listchannel')
          }}
        >
          频道列表
        </Button>
      </Navbar.Section>
    </Navbar>
  )
}
