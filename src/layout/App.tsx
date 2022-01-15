import { HeaderPage } from '@/layout/header'
import { AppShell, Navbar } from '@mantine/core'

function App() {
  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} height={500} padding="xs">
          {/* Navbar content */}
        </Navbar>
      }
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

export default App
