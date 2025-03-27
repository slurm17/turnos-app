import { Box, Button, ListItem, styled } from '@mui/material'

const getShadowStyles = () => ({
  backgroundColor: '#fff',
  width: '100%',
  borderRadius: '7px',
  boxShadow: '0px 0px 12px -3px rgba(0,0,0,0.34)',
})

export const BoxShadow = styled(Box)(getShadowStyles)

export const ListItemShadow = styled(ListItem)(() => ({
  ...getShadowStyles(),
  padding: 0,
}))

export const ButtonShadow = styled(Button)(getShadowStyles)