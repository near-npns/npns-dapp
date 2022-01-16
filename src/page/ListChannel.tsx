import { HeaderPage } from '@/layout/header'
import { NavPage } from '@/layout/navbar'
import { wallet } from '@/near/Account'
import {
  npnsGetChannels,
  npnsSubscribe,
  npnsSubscribes,
  npnsUnSubscribe
} from '@/near/Function'
import { FromIndex } from '@/state'
import { NPNSChannelProps } from '@/types'
import {
  AppShell,
  Card,
  Group,
  List,
  Skeleton,
  Switch,
  Text,
  useMantineTheme
} from '@mantine/core'
import { useMutation, useQuery } from 'react-query'
import { useRecoilState } from 'recoil'

function ChannelList() {
  const [fromIndex, setFromIndex] = useRecoilState(FromIndex)
  const theme = useMantineTheme()
  const {
    isLoading,
    isError,
    error,
    data: channels
  } = useQuery(['channels', fromIndex], () => {
    return npnsGetChannels(fromIndex, 10)
  })

  const { data: subscribes } = useQuery(['subscribes', channels], () => {
    return npnsSubscribes(
      wallet.getAccountId(),
      channels?.map((channel) => channel.id) || []
    )
  })

  const subscribe = useMutation((channel_id: number) =>
    npnsSubscribe(channel_id)
  )

  const unsubscribe = useMutation((channel_id: number) =>
    npnsUnSubscribe(channel_id)
  )

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
      let isSubscribed = false
      if (subscribes) {
        isSubscribed = subscribes[channel.id]
        console.log(isSubscribed)
      }
      return (
        <List.Item key={index}>
          <Card shadow="sm" padding="lg">
            <Group
              position="apart"
              style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
            >
              <Text weight={500}>{channel.channel.name}</Text>
              <Switch
                label="订阅"
                checked={isSubscribed}
                onChange={(event) => {
                  if (event.currentTarget.checked) {
                    subscribe.mutate(channel.id)
                  } else {
                    unsubscribe.mutate(channel.id)
                  }
                }}
              />
            </Group>

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
