import { MenuItem } from '@mui/material'
import Menu from '@mui/material/Menu'
interface RMenuProps {
    open: boolean,
    anchorEl: null | HTMLElement,
    handleClose: () => void,
    children: React.ReactElement<typeof MenuItem> | React.ReactElement<typeof MenuItem>[];
}

export default function RMenu({ open, anchorEl, handleClose, children }:RMenuProps) {
  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
      {children}
    </Menu>
  )
}
