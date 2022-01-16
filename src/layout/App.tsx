import CreateChannelPage from '@/page/CreateChannel'
import IndexPage from '@/page/Index'
import ListChannelPage from '@/page/ListChannel'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/createchannel" element={<CreateChannelPage />} />
      <Route path="/listchannel" element={<ListChannelPage />} />
    </Routes>
  )
}

export default App
