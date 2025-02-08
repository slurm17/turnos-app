import { styled } from '@mui/material/styles'
import { BoxShadow } from '../Shadow'

interface StyledListItemShadow {
    children : React.ReactNode
}
const ListItemShadow = styled(BoxShadow)`
    // Mas estilos
`
export default function StyledListItemShadow({ children, ...props } : StyledListItemShadow) {
  return <ListItemShadow {...props}>{children}</ListItemShadow>
}