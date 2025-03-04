import { SvgIconComponent } from '@mui/icons-material'

export interface Action {
    icon : SvgIconComponent,
    name: string,
    handleClick: () => void
}