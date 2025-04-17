// Necesita que el compoonente padre sea relativo para que el icono se posicione bien
// El botón se posiciona en la parte superior derecha del componente padre

import { IconButton } from '@mui/material'
import { SvgIconComponent } from '@mui/icons-material'
import { MUIColor } from '@/types/MUIColor'
interface IconButtonCustomProps {
  onClick: () => void
    icon : SvgIconComponent
    color? : MUIColor
}
const AbsoluteIconButton = ({ onClick, icon: Icon, color = 'inherit' }: IconButtonCustomProps) => {
  return (
    <IconButton 
        sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            padding: 0.5
        }}
        onClick={onClick}
        >
        <Icon color={color}/>
    </IconButton>
  )
}

export default AbsoluteIconButton