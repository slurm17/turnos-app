import { Outlet } from 'react-router-dom'

import DrawerNav from './components/DrawerNav'
import MyAppBar from './components/MyAppBar'
import BottomNav from './components/BottomNav'
import Main from './components/Main'

import { useIsPwaInstalled } from '@/hooks/useIsPwaInstalled'
import { listItemsNav } from '@/constants/listItemsNav'

const MainLayout = () => {
  const isPwaInstalled = useIsPwaInstalled()
  return (
    <>
      <DrawerNav listItemsNav={listItemsNav}/>
      <div id='container-main'>
        <MyAppBar/>
        <Main isPwaInstalled={isPwaInstalled}>
          <Outlet/>
        </Main>
        {isPwaInstalled && <BottomNav listItemsNav={listItemsNav}/>}
      </div>
    </>
  )
}

export default MainLayout