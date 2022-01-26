import { HeaderPage } from '@/layout/header'
import { NavPage } from '@/layout/navbar'
import { AppShell, Card, Group, List, Skeleton, Text } from '@mantine/core'
import { gql, request } from 'graphql-request'
import { useQuery } from 'react-query'

const endpoint = 'https://api.thegraph.com/subgraphs/name/kulame/npns'

export default function FeedPage() {
  const { isLoading, isError, error, data } = useQuery('feeds', async () => {
    return await request(
      endpoint,
      gql`
        query {
          messages(first: 5, orderBy: id, orderDirection: desc) {
            id
            height
            title
            content
          }
        }
      `
    )
  })

  if (isLoading) {
    return <Skeleton height={50} circle mb="xl" />
  }

  if (isError) {
    return <span>Error:{error instanceof Error ? error.message : ''}</span>
  }

  const feeds_view = data.messages.map(
    (feed: Record<string, string>, index: number) => {
      return (
        <List.Item key={index}>
          <Card shadow="sm" padding="lg">
            <Group position="apart">
              <Text weight={500}>{feed.title}</Text>
            </Group>

            <Text>{feed.content}</Text>
          </Card>
        </List.Item>
      )
    }
  )

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
      <List>{feeds_view}</List>
    </AppShell>
  )
}
