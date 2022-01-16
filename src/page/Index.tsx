import { HeaderPage } from '@/layout/header'
import { NavPage } from '@/layout/navbar'
import { AppShell } from '@mantine/core'

export default function IndexPage() {
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
      111
    </AppShell>
  )
}
