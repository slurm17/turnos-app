import { Dialog, styled } from '@mui/material'

export const DialogCustom = styled(Dialog)(({ theme }) => ({
    '& .MuiPaper-root': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        padding: '10px 5px',
        maxWidth: '330px',
        [theme.breakpoints.up('sm')]: {
            maxWidth: theme.breakpoints.values.sm,
            padding: '15px',
        },
    },
  }))