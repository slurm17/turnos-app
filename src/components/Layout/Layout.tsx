import { Outlet } from 'react-router-dom'
import { listItemsNav } from './constants/listItemsNav'
import DrawerNav from './components/DrawerNav'
import BottomNav from './components/BottomNav'
import MyAppBar from './components/MyAppBar'


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