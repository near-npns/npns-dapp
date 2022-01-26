import CreateChannelPage from '@/page/CreateChannel'
import CreateMessagePage from '@/page/CreateMessage'
import FeedPage from '@/page/Feed'
import ListChannelPage from '@/page/ListChannel'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<FeedPage />} />
      <Route path="/createchannel" element={<CreateChannelPage />} />
      <Route path="/listchannel" element={<ListChannelPage />} />
      <Route path="/createmessage" element={<CreateMessagePage />} />
      <Route path="/feed" element={<FeedPage />} />
    </Routes>
  )
}

export default App
