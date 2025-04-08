import { IconButton } from '@mui/material'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
interface OnCloseButtonProps {
    handleClickIconButton: () => void;
}
// Necesita que el compoonente padre sea relativo para que el icono se posicione bien
const OnDeleteIconButton = ({ handleClickIconButton }: OnCloseButtonProps) => {
  return (
    <IconButton 
        sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            padding: 0.5
        }}
        onClick={handleClickIconButton}
        >
        <HighlightOffIcon color='error'/>
    </IconButton>
  )
}

export default OnDeleteIconButton