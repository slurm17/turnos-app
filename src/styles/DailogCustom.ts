import { Dialog, styled } from '@mui/material'

export const DialogCustom = styled(Dialog)(() => ({
    '& .MuiPaper-root': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        padding: '15px 5px',
    },
  }))