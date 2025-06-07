import { Outlet } from 'react-router-dom'

import DrawerNav from './components/DrawerNav'
import MyAppBar from './components/MyAppBar'
import BottomNav from './components/BottomNav'

import { useIsPwaInstalled } from '@/hooks/useIsPwaInstalled'
import { listItemsNav } from '@/constants/listItemsNav'

const Layout = () => {
  const installed = useIsPwaInstalled()
  return (
    <>
      <DrawerNav listItemsNav={listItemsNav}/>
      <div id='container-main'>
        <MyAppBar/>
        <main>
          <Outlet/>
        </main>
        {installed && <BottomNav listItemsNav={listItemsNav}/>}
      </div>
    </>
  )
}

export default Layout