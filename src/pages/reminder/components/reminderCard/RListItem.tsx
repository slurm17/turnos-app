import { IconButton, ListItem } from '@mui/material'

interface Props {
    children: React.ReactNode,
    secondaryAction?: React.ReactElement<typeof IconButton> | React.ReactElement<typeof IconButton>[]
}

const RListItem = ({ children, secondaryAction }: Props) => {
  return (
    <ListItem 
      secondaryAction={secondaryAction}
      disablePadding
      sx={{
            marginBottom: '0.5em',
            paddingLeft: 1,
            borderRadius: '4px',
            backgroundColor: 'white',
            boxShadow: '0px 0px 15px 0px rgba(0,0,0,0.1)',
          }}>
      {children}
    </ListItem>
  )
}

export default RListItem