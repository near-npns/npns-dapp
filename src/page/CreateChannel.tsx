import { HeaderPage } from '@/layout/header'
import { NavPage } from '@/layout/navbar'
import { npnsAddChannel } from '@/near/Function'
import { NPNSChannelInputProps } from '@/types'
import {
  AppShell,
  Button,
  InputWrapper,
  SimpleGrid,
  Textarea,
  TextInput
} from '@mantine/core'
import { useState } from 'react'
import { useMutation } from 'react-query'

export default function CreateChannelPage() {
  const [name, setName] = useState('')
  const [icon, setIcon] = useState('')
  const [desc, setDesc] = useState('')

  const add_channel = useMutation((props: NPNSChannelInputProps) =>
    npnsAddChannel(props)
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
      {/* Your application here */}
      <SimpleGrid cols={1}>
        <div>
          <InputWrapper label="name" description="频道名称">
            <TextInput
              value={name}
              onChange={(event) => setName(event.currentTarget.value)}
            />
          </InputWrapper>
        </div>
        <div>
          <InputWrapper label="icon" description="图标地址">
            <TextInput
              value={icon}
              onChange={(event) => setIcon(event.currentTarget.value)}
            />
          </InputWrapper>
        </div>
        <div>
          <InputWrapper label="description" description="频道描述">
            <Textarea
              minRows={3}
              autosize
              value={desc}
              onChange={(event) => setDesc(event.currentTarget.value)}
            />
          </InputWrapper>
        </div>
        <div>
          <Button
            variant="outline"
            onClick={() => {
              const props: NPNSChannelInputProps = {
                name,
                icon,
                description: desc
              }
              console.log(props)
              add_channel.mutate(props)
            }}
          >
            创建
          </Button>
        </div>
      </SimpleGrid>
    </AppShell>
  )
}
