import { HeaderPage } from '@/layout/header'
import { NavPage } from '@/layout/navbar'
import { npnsPublish } from '@/near/Function'
import { NPNSMessageInputProps } from '@/types'
import {
  AppShell,
  Button,
  InputWrapper,
  NumberInput,
  SimpleGrid,
  Textarea,
  TextInput
} from '@mantine/core'
import { useState } from 'react'
import { useMutation } from 'react-query'

export default function CreateMessagePage() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [channelId, setChannelId] = useState(0)

  const add_message = useMutation((props: NPNSMessageInputProps) =>
    npnsPublish(props)
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
      <SimpleGrid cols={1}>
        <div>
          <InputWrapper label="channel_id" description="频道id">
            <NumberInput
              value={channelId}
              onChange={(val) => {
                if (val) {
                  setChannelId(val)
                }
              }}
            />
          </InputWrapper>
        </div>

        <div>
          <InputWrapper label="title" description="标题">
            <TextInput
              value={title}
              onChange={(event) => setTitle(event.currentTarget.value)}
            />
          </InputWrapper>
        </div>

        <div>
          <InputWrapper label="content" description="内容">
            <Textarea
              minRows={3}
              autosize
              value={content}
              onChange={(event) => setContent(event.currentTarget.value)}
            />
          </InputWrapper>
        </div>

        <div>
          <Button
            variant="outline"
            onClick={() => {
              console.log('hello')
              add_message.mutate({ channel_id: channelId, title, content })
            }}
          >
            创建
          </Button>
        </div>
      </SimpleGrid>
    </AppShell>
  )
}
