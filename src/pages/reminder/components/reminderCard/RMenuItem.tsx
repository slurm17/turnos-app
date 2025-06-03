import { ListItemIcon, MenuItem } from '@mui/material'

interface Props {
  text: string,
  onClick: () => void,
  icon: React.ElementType
}

const RMenuItem = ({ onClick, icon: Icon, text }: Props) => {
  return (
    <MenuItem onClick={onClick}>
      <ListItemIcon>
        <Icon fontSize="small" />
      </ListItemIcon>
      {text}
    </MenuItem>
  )
}

export default RMenuItem