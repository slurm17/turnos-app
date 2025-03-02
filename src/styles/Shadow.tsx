import { Box, Button, ListItem, styled } from '@mui/material'

const ShadowStyles = `
    background-color: #fff;
    width: 100%;
    border-radius: 7px;
    box-shadow: 0px 0px 12px -3px rgba(0,0,0,0.34);
`

export const BoxShadow = styled(Box)(
    ShadowStyles
)

export const ListItemShadow = styled(ListItem)(
    `
        ${ShadowStyles}
        padding: 0
    `
)

export const ButtonShadow = styled(Button)(
    ShadowStyles
)


// const ListItemShadow = styled(BoxShadow)`
//     // Mas estilos
// `
// export default function StyledListItemShadow({ children, ...props } : StyledListItemShadow) {
//   return <ListItemShadow {...props}>{children}</ListItemShadow>
// }