import { HeaderPage } from '@/layout/header'
import { NavPage } from '@/layout/navbar'
import { npnsGetChannels } from '@/near/Function'
import { FromIndex } from '@/state'
import { NPNSChannelProps } from '@/types'
import { AppShell, Card, List, Skeleton, Text } from '@mantine/core'
import { useQuery } from 'react-query'
import { useRecoilState } from 'recoil'

function ChannelList() {
  const [fromIndex, setFromIndex] = useRecoilState(FromIndex)

  const {
    isLoading,
    isError,
    error,
    data: channels
  } = useQuery(['channels', fromIndex], () => {
    return npnsGetChannels(fromIndex, 10)
  })

  if (isLoading) {
    return <Skeleton height={50} circle mb="xl" />
  }

  if (isError) {
    return <span>Error:{error instanceof Error ? error.message : ''}</span>
  }

  const channels_view = channels!
    .sort((a: NPNSChannelProps, b: NPNSChannelProps) => {
      if (a.id < b.id) {
        return 1
      } else if (a.id > b.id) {
        return -1
      } else {
        return 0
      }
    })
    .map((channel, index) => {
      console.log(channel)
      return (
        <List.Item key={index}>
          <Card shadow="sm" padding="lg">
            <Card.Section>{channel.channel.name}</Card.Section>
            <Text>{channel.channel.description}</Text>
          </Card>
        </List.Item>
      )
    })

  return <List>{channels_view}</List>
}
export default function ListChannelPage() {
  return (
    <AppShell
      padding="md"
      navbar={<NavPage />}
      header={<HeaderPage />}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0]
        }
      })}
    >
      {/* Your application here */}
      <ChannelList />
    </AppShell>
  )
}
