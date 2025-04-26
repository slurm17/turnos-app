import { SvgIconComponent } from '@mui/icons-material'

export interface ActionData {
    icon : SvgIconComponent,
    name: string,
    handleClick: () => void
}