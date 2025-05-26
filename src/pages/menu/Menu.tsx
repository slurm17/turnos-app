
import DrawerItem from '@/components/layout/components/DrawerItem'
import { listItemsNav } from '@/components/layout/constants/listItemsNav' 

const Menu = () => {

  return (
    <div>
    {listItemsNav.map((item, i) => (
      <>
        <DrawerItem key={i} text={item.text} icon={item.icon} navigateTo={item.navigateTo} />
      </>
    ))}
    </div>
  )
}

export default Menu