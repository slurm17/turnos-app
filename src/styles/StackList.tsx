import { Stack, StackProps } from '@mui/material'

interface MyStackProps extends StackProps {
    children : React.ReactNode,
}

const StackList = ({ children, ...props } : MyStackProps ) => ( 
  <Stack 
    component={'ul'} 
    spacing={1.5}
    sx={{
            listStyleType: 'none', // Ocultar los bullets
            p: 0,
            m: 0,
        }}
    {...props}
    >
    {children}
  </Stack>
)

export default StackList