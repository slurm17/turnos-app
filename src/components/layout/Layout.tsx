import { Outlet } from 'react-router-dom'
import DrawerNav from './components/DrawerNav'
import MyAppBar from './components/MyAppBar'
import BottomNav from './components/BottomNav'
import { listItemsNav } from './constants/listItemsNav'

const Layout = () => {
  return (
    <>
      <DrawerNav listItemsNav={listItemsNav}/>
      <div id='container-main'>
        <MyAppBar/>
        <main>
          <Outlet/>
        </main>
        <BottomNav listItemsNav={listItemsNav}/>
      </div>
    </>
  )
}

export default Layout