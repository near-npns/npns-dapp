import { HeaderPage } from '@/layout/header'
import { NavPage } from '@/layout/navbar'
import {
  AppShell,
  Button,
  Input,
  InputWrapper,
  SimpleGrid,
  Textarea
} from '@mantine/core'

export default function CreateChannelPage() {
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
            <Input />
          </InputWrapper>
        </div>
        <div>
          <InputWrapper label="icon" description="图标地址">
            <Input />
          </InputWrapper>
        </div>
        <div>
          <InputWrapper label="description" description="频道描述">
            <Textarea minRows={3} autosize />
          </InputWrapper>
        </div>
        <div>
          <Button variant="outline">创建</Button>
        </div>
      </SimpleGrid>
    </AppShell>
  )
}
