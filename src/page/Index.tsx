import { HeaderPage } from '@/layout/header'
import { NavPage } from '@/layout/navbar'
import { AppShell } from '@mantine/core'
import { AiTwotoneFire } from 'react-icons/ai'
import { BiLayerPlus } from 'react-icons/bi'
import { FcViewDetails } from 'react-icons/fc'
import imgUrlhead from '/head.jpg'

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
      <div className="flex flex-col p-2 m-1 divide-y divide-gray-500">
        <div className="flex flex-row-2 divide-x divide-gray-300 p-2 m-2">
          <div className="flex flex-col w-2/3 bg-slate-200 rounded-l">
            <div className="flex flex-row items-baseline p-2 m-2">
              <div className="w-12">
                <img width={36} height={36} src={imgUrlhead} />
              </div>
              <div className="text-base text-left items-baseline w-1/3">
                name
              </div>
            </div>
            <div className="text-xl text-gray-700 p-2 m-2">
              In 3000 ad, demons invaded the earth. You will lead a modern force
              to fight against demons, including aircraft armor, tanks, aircraft
              forces, and bomber support. Demons have a powerful magical
              civilization. A magical dragon has the destructive power to
              destroy the whole city.
            </div>
            <div className="flex flex-row items-baseline">
              <div className="text-base text-left p-3 m-1 items-baseline text-gray-500 w-40">
                4分钟前
              </div>
              <div className="underline text-base text-left items-baseline text-gray-400">
                原文链接
              </div>
            </div>
          </div>
          <div className="flex flex-col w-1/3 bg-slate-200 rounded-r">
            <div className="flex flex-row items-center">
              <div className="flex flex-row w-2/3 bg-sky-300 text-gray-700 rounded-r-lg p-3 m-6 h-10 items-center">
                <div>
                  <BiLayerPlus />
                </div>
                <div className="text-2xl">斗士 Fighter</div>
              </div>
              <div className="items-center w-24 bg-yellow-400 rounded-full p-3 m-3 h-10 text-center text-sm text-gray-500">
                已订阅
              </div>
            </div>
            <div className="w-4/5 text-gray-700 m-4 p-4">一款角色扮演游戏</div>
            <div className="flex flex-row items-center">
              <div className="flex flex-row w-1/2  text-gray-700  p-2 m-2 h-10 items-center">
                <div>
                  <FcViewDetails />
                </div>
                <div>2345条</div>
              </div>
              <div className="flex flex-row w-1/2 text-gray-700  p-2 m-2 h-10">
                <div>
                  <AiTwotoneFire />
                </div>
                <div>45度</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  )
}
