import { Stack } from '@mui/material'

interface MyStackProps {
    children : React.ReactNode
}

const StackList = ({ children } : MyStackProps ) => ( 
    <Stack 
        component={'ul'} 
        spacing={1.5} 
        sx={{
            p: 0,
            m: 0
        }}
    >
        {children}
    </Stack>
)

export default StackList