import { Box, ListItem, styled } from '@mui/material'

const ShadowStyles = `
    background-color: #fff;
    width: 100%;
    border-radius: 7px;
    box-shadow: 0px 0px 12px -3px rgba(0,0,0,0.34);
`

export const BoxShadow = styled(Box)(
    `${ShadowStyles}`
)

export const ListItemShadow = styled(ListItem)(
    `${ShadowStyles}`
)

// En el caso de querer agregar mas estilos

// const ListItemShadow = styled(BoxShadow)`
//     // Mas estilos
// `
// export default function StyledListItemShadow({ children, ...props } : StyledListItemShadow) {
//   return <ListItemShadow {...props}>{children}</ListItemShadow>
// }