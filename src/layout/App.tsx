import CreateChannelPage from '@/page/CreateChannel'
import CreateMessagePage from '@/page/CreateMessage'
import FeedPage from '@/page/Feed'
import Index from '@/page/Index'
import ListChannelPage from '@/page/ListChannel'
import SearchPage from '@/page/Search'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/createchannel" element={<CreateChannelPage />} />
      <Route path="/listchannel" element={<ListChannelPage />} />
      <Route path="/createmessage" element={<CreateMessagePage />} />
      <Route path="/feed" element={<FeedPage />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  )
}

export default App
