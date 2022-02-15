import { HeaderPage } from '@/layout/header'
import { NavPage } from '@/layout/navbar'
import {
  AppShell,
  Divider,
  Skeleton,
  Space,
  Text,
  Timeline
} from '@mantine/core'
import purify from 'dompurify'
import { gql, request } from 'graphql-request'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { BiChevronRight } from 'react-icons/bi'
import { BsEmojiHeartEyes } from 'react-icons/bs'
import { FiRefreshCcw } from 'react-icons/fi'
import { GiAbstract010, GiBalaclava } from 'react-icons/gi'
import { useQuery } from 'react-query'
import imgUrl1 from '/1.jpeg'
import imgUrl2 from '/2.jpeg'
import imgUrl3 from '/3.jpeg'
import imgUrl4 from '/4.jpeg'
import imgUrl5 from '/5.jpeg'
import imgUrl6 from '/6.jpeg'
import imgUrlhead from '/head.jpg'

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
        <Timeline.Item
          className="w-full md:w-3/4"
          title={feed.title}
          key={index}
        >
          <Space w="md" />
          <Text>
            <div
              dangerouslySetInnerHTML={{
                __html: purify.sanitize(feed.content)
              }}
            />
          </Text>
          <Space />
          <Divider />
        </Timeline.Item>
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
      <div className="flex flex-col divide-y divide-gray-500">
        <div className="flex flex-row bg-gray-100">
          <div className="flex flex-col bg-gray-100 w-2/3">
            <div className="w-full">
              <img src={imgUrl1} />
            </div>
            <div className="m-4">新闻标题</div>
          </div>
          <div className="w-1/3 items-center">
            <div className="w-full">
              <img width={200} height={150} src={imgUrl2} />
            </div>
            <div className="flex flex-col  h-20">
              <div className="h-10">最新折扣！</div>
              <div className="flex flex-row h-10">
                <div className="w-1/2 text-center">Phasmophobia</div>
                <div className="w-1/2 text-left">sony 出品</div>
              </div>
            </div>
            <div className="items-center">
              <button className="rounded-lg p-2 m-3 bg-orange-500 hover:bg-orange-600 sm:bg-green-500 sm:hover:bg-green-600">
                足球游戏
              </button>
              <button className="rounded-lg p-2 m-3 bg-orange-500 hover:bg-orange-600 sm:bg-green-500 sm:hover:bg-green-600">
                xbox游戏
              </button>
              <button className="rounded-lg p-2 m-3 bg-orange-500 hover:bg-orange-600 sm:bg-green-500 sm:hover:bg-green-600">
                3D
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-row bg-gray-100 h-10">
            <div className="flex flex-row w-4/5 text-left items-center">
              <div className="w-12 text-right m-2">视频</div>
              <div>
                <BiChevronRight />
              </div>
            </div>
            <div className="flex flex-row bg-gray-100 w-1/5 text-right items-center">
              <div className="w-16 text-right m-2">换一批</div>
              <div>
                <FiRefreshCcw />
              </div>
            </div>
          </div>
          <div className="flex flex-row bg-blue-100 items-center">
            <div className="flex flex-col bg-blue-200 w-1/3 rounded-xl p-1 m-1">
              <div>
                <div className="w-full">
                  <img width={200} height={150} src={imgUrl3} />
                </div>
                <div>【攻略】【B站】</div>
                <div className="flex flex-row h-10 text-left">
                  <div className="w-6">
                    <GiAbstract010 />
                  </div>
                  <div>塞尔达荒野之息全部套装</div>
                </div>
                <div className="flex flex-row h-10 text-right">
                  <div className="w-6">
                    <GiBalaclava />
                  </div>
                  <div>阿蕉塞尔达大魔王</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-blue-200 w-1/3 rounded-xl p-1 m-1">
              <div>
                <div className="w-full">
                  <img width={200} height={150} src={imgUrl3} />
                </div>
                <div>【攻略】【B站】</div>
                <div className="flex flex-row h-10 text-left">
                  <div className="w-6">
                    <GiAbstract010 />
                  </div>
                  <div>塞尔达荒野之息全部套装</div>
                </div>
                <div className="flex flex-row h-10 text-right">
                  <div className="w-6">
                    <GiBalaclava />
                  </div>
                  <div>阿蕉塞尔达大魔王</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-blue-200 w-1/3 rounded-xl p-1 m-1">
              <div>
                <div className="w-full">
                  <img width={200} height={150} src={imgUrl3} />
                </div>
                <div>【攻略】【B站】</div>
                <div className="flex flex-row h-10 text-left">
                  <div className="w-6">
                    <GiAbstract010 />
                  </div>
                  <div>塞尔达荒野之息全部套装</div>
                </div>
                <div className="flex flex-row h-10 text-right">
                  <div className="w-6">
                    <GiBalaclava />
                  </div>
                  <div>阿蕉塞尔达大魔王</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-row bg-gray-100 h-10">
            <div className="flex flex-row w-4/5 text-left items-center">
              <div className="w-16 text-right m-2">热门评论</div>
              <div>
                <BiChevronRight />
              </div>
            </div>
            <div className="flex flex-row bg-gray-100 w-1/5 text-right items-center">
              <div className="w-16 text-right m-2">换一批</div>
              <div>
                <FiRefreshCcw />
              </div>
            </div>
          </div>
          <div className="flex flex-row ">
            <div className="flex flex-col bg-blue-200 w-1/3 rounded-xl p-1 m-1">
              <div>
                <div className="w-full align-middle">
                  <img width={200} height={150} src={imgUrl3} />
                </div>
                <div className="flex flex-row">
                  <div className="w-1/2 h-10 items-center">[游戏名] </div>
                  <div className="w-1/2">2022-2-9 17:23:44</div>
                </div>
                <div className="flex flex-row h-10 text-left items-center">
                  <div className="w-12">
                    <img width={36} height={36} src={imgUrlhead} />
                  </div>
                  <div className="flex flex-col w-48">
                    <div>[username]</div>
                    <div>470小时玩家</div>
                  </div>
                  <div className="w-24">评论：</div>
                  <div className="items-center  p-2 m-3">
                    <BsEmojiHeartEyes />
                  </div>
                </div>
                <div className="flex flex-row h-20 text-left text-2xl  p-2 m-3">
                  A Very good base defense game
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-blue-200 w-1/3 rounded-xl p-1 m-1">
              <div>
                <div className="w-full align-middle">
                  <img width={200} height={150} src={imgUrl3} />
                </div>
                <div className="flex flex-row">
                  <div className="w-1/2 h-10 items-center">[游戏名] </div>
                  <div className="w-1/2">2022-2-9 17:23:44</div>
                </div>
                <div className="flex flex-row h-10 text-left items-center">
                  <div className="w-12">
                    <img width={36} height={36} src={imgUrlhead} />
                  </div>
                  <div className="flex flex-col w-48">
                    <div>[username]</div>
                    <div>470小时玩家</div>
                  </div>
                  <div className="w-24">评论：</div>
                  <div className="items-center  p-2 m-3">
                    <BsEmojiHeartEyes />
                  </div>
                </div>
                <div className="flex flex-row h-20 text-left text-2xl  p-2 m-3">
                  A Very good base defense game
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-blue-200 w-1/3 rounded-xl p-1 m-1">
              <div>
                <div className="w-full align-middle">
                  <img width={200} height={150} src={imgUrl3} />
                </div>
                <div className="flex flex-row">
                  <div className="w-1/2 h-10 items-center">[游戏名] </div>
                  <div className="w-1/2">2022-2-9 17:23:44</div>
                </div>
                <div className="flex flex-row h-10 text-left items-center">
                  <div className="w-12">
                    <img width={36} height={36} src={imgUrlhead} />
                  </div>
                  <div className="flex flex-col w-48">
                    <div>[username]</div>
                    <div>470小时玩家</div>
                  </div>
                  <div className="w-24">评论：</div>
                  <div className="items-center  p-2 m-3">
                    <BsEmojiHeartEyes />
                  </div>
                </div>
                <div className="flex flex-row h-20 text-left text-2xl  p-2 m-3">
                  A Very good base defense game
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-row bg-gray-100 h-10">
            <div className="flex flex-row w-4/5 text-left items-center">
              <div className="w-12 text-right m-2">问答</div>
              <div>
                <BiChevronRight />
              </div>
            </div>
            <div className="flex flex-row bg-gray-100 w-1/5 text-right items-center ">
              <div className="w-16 text-right m-2">换一批</div>
              <div>
                <FiRefreshCcw />
              </div>
            </div>
          </div>
          <div className="flex flex-row divide-y bg-gray-300 divide-gray-500 w-full ">
            <div className="w-12 items-center">
              <img width={160} height={160} src={imgUrl3} />
            </div>
            <div className="flex flex-col">
              <div className="text-base">
                【steam游戏】【双人成行】【攻略】【知乎】
              </div>
              <div className="text-xl">
                游戏《双人成行》Steam 是不是只用一个人买然后可以两人玩？
              </div>
              <div className="flex flex-row items-center">
                <div className="text-xl">[name]</div>
                <div className="text-base">
                  回答：一人购买两人享受！没买的那个人需要在Steam下载It takes
                  two friends pass…
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row divide-y bg-gray-300 divide-gray-500 w-full">
            <div className="w-12">
              <img width={160} height={160} src={imgUrl3} />
            </div>
            <div className="flex flex-col">
              <div className="text-base">
                【steam游戏】【双人成行】【攻略】【知乎】
              </div>
              <div className="text-xl">
                游戏《双人成行》Steam 是不是只用一个人买然后可以两人玩？
              </div>
              <div className="flex flex-row items-center">
                <div className="text-xl">[name]</div>
                <div className="text-base">
                  回答：一人购买两人享受！没买的那个人需要在Steam下载It takes
                  two friends pass…
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row divide-y bg-gray-300 divide-gray-500 w-full">
            <div className="w-12">
              <img width={160} height={160} src={imgUrl3} />
            </div>
            <div className="flex flex-col">
              <div className="text-base">
                【steam游戏】【双人成行】【攻略】【知乎】
              </div>
              <div className="text-xl">
                游戏《双人成行》Steam 是不是只用一个人买然后可以两人玩？
              </div>
              <div className="flex flex-row items-center">
                <div className="text-xl">[name]</div>
                <div className="text-base">
                  回答：一人购买两人享受！没买的那个人需要在Steam下载It takes
                  two friends pass…
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  divide-y divide-gray-500">
          <div className="flex flex-row bg-gray-100 h-10">
            <div className="flex flex-row w-4/5 text-left items-center">
              <div className="w-12 text-right m-2">发售</div>
              <div>
                <BiChevronRight />
              </div>
            </div>
            <div className="flex flex-row bg-gray-100 w-1/5 text-right items-center ">
              <div className="w-16 text-right m-2">换一批</div>
              <div>
                <FiRefreshCcw />
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="w-1/3 flex flex-col rounded-xl p-1 m-1 bg-gray-200">
              <div>
                <img width={200} height={150} src={imgUrl3} />
              </div>
              <div className="text-xl">仙剑奇侠传音乐原声带1月3日起发售</div>
              <div className="flex flex-row items-center">
                <div className="w-1/2">
                  <button className="rounded-lg p-2 m-3 bg-orange-500 hover:bg-orange-600 sm:bg-green-500 sm:hover:bg-green-600">
                    音乐原声带
                  </button>
                </div>
                <div className="w-1/4">
                  <AiOutlineDollarCircle />
                </div>
                <div className="w-1/4 text-xl text-red-600 text-left">
                  499.98
                </div>
              </div>
            </div>
            <div className="w-1/3 flex flex-col  p-1 m-1 bg-gray-200">
              <div>
                <img width={200} height={150} src={imgUrl4} />
              </div>
              <div className="text-xl">仙剑奇侠传音乐原声带1月3日起发售</div>
              <div className="flex flex-row items-center">
                <div className="w-1/2">
                  <button className="rounded-lg p-2 m-3 bg-orange-500 hover:bg-orange-600 sm:bg-green-500 sm:hover:bg-green-600">
                    音乐原声带
                  </button>
                </div>
                <div className="w-1/4">
                  <AiOutlineDollarCircle />
                </div>
                <div className="w-1/4 text-xl text-red-600 text-left">
                  499.98
                </div>
              </div>
            </div>{' '}
            <div className="w-1/3 flex flex-col p-1 m-1 bg-gray-200">
              <div>
                <img width={200} height={150} src={imgUrl5} />
              </div>
              <div className="text-xl">仙剑奇侠传音乐原声带1月3日起发售</div>
              <div className="flex flex-row items-center">
                <div className="w-1/2">
                  <button className="rounded-lg p-2 m-3 bg-orange-500 hover:bg-orange-600 sm:bg-green-500 sm:hover:bg-green-600">
                    音乐原声带
                  </button>
                </div>
                <div className="w-1/4">
                  <AiOutlineDollarCircle />
                </div>
                <div className="w-1/4 text-xl text-red-600 text-left">
                  499.98
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  divide-y divide-gray-500">
          <div className="flex flex-row bg-gray-100 h-10">
            <div className="flex flex-row w-4/5 text-left items-center">
              <div className="w-12 text-right m-2">评测</div>
              <div>
                <BiChevronRight />
              </div>
            </div>
            <div className="flex flex-row bg-gray-100 w-1/5 text-right items-center ">
              <div className="w-16 text-right m-2">换一批</div>
              <div>
                <FiRefreshCcw />
              </div>
            </div>
          </div>
          <div className="flex flex-col divide-y divide-yellow-500">
            <div className="flex flex-row">
              <div className="w-1/5">
                <img width={200} height={150} src={imgUrl6} />
              </div>
              <div className="flex flex-col w-3/5">
                <div className="text-xl h-10 items-center">
                  《师父》游民评测8.5分 严师出高徒
                </div>
                <div className="text-base h-20 items-center">
                  《师父》在场景风格与动作设计方面有着亮眼之处，硬核的战斗更
                  诠释了什么叫“严师出高徒”。
                </div>
              </div>
              <div className="w-1/5 text-8xl">8.5</div>
            </div>
            <div className="flex flex-row">
              <div className="w-1/5">
                <img width={200} height={150} src={imgUrl6} />
              </div>
              <div className="flex flex-col w-3/5">
                <div className="text-xl h-10 items-center">
                  《师父》游民评测8.5分 严师出高徒
                </div>
                <div className="text-base h-20 items-center">
                  《师父》在场景风格与动作设计方面有着亮眼之处，硬核的战斗更
                  诠释了什么叫“严师出高徒”。
                </div>
              </div>
              <div className="w-1/5 text-8xl">8.5</div>
            </div>
            <div className="flex flex-row">
              <div className="w-1/5">
                <img width={200} height={150} src={imgUrl6} />
              </div>
              <div className="flex flex-col w-3/5">
                <div className="text-xl h-10 items-center">
                  《师父》游民评测8.5分 严师出高徒
                </div>
                <div className="text-base h-20 items-center">
                  《师父》在场景风格与动作设计方面有着亮眼之处，硬核的战斗更
                  诠释了什么叫“严师出高徒”。
                </div>
              </div>
              <div className="w-1/5 text-8xl">8.5</div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  )
}
