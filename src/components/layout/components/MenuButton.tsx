import MenuIcon from '@mui/icons-material/Menu'
import { IconButton } from '@mui/material'

import { useAppNavigation } from '@/hooks/navigate/useAppNavigation'

const MenuButton = () => {
    const navigate = useAppNavigation()
    return (
        <IconButton
            sx={{ display: { xs: 'flex', sm: 'none' } }}
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={navigate.goToMenu}
        >
                <MenuIcon sx={{ fontSize: '1.8rem' }} />
        </IconButton>
    )
}

export default MenuButton