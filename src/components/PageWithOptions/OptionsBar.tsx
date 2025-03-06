import { Box, Button } from '@mui/material'
import { Action } from '@/types/Action'

interface OptionsBarProps {
    actions : Action[],
}

const OptionsBar = ({ actions }: OptionsBarProps) => {
  return (
    <Box sx={{
        padding: '0 0 1rem 0', 
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem'
    }}>
        {actions.map(({ name, icon: Icon, handleClick }, i) => (
            <Button 
                onClick={handleClick}
                variant='contained' 
                key={i}
                startIcon={<Icon/>}
            >
                {name}
            </Button>
        ))}
    </Box>
  )
}

export default OptionsBar