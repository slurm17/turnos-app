import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1'
import DateRangeIcon from '@mui/icons-material/DateRange'
import PersonIcon from '@mui/icons-material/Person'
import { SvgIconComponent } from '@mui/icons-material'
import * as ROUTES from '@/constants/routes'

export const listItemsNav = [
    { text: 'Turnos', icon: DateRangeIcon, navigateTo: ROUTES.REMINDER },
    { text: 'Contactos', icon: PersonIcon, navigateTo: ROUTES.CONTACT_LIST },
    { text: 'Añadir', icon: PersonAddAlt1Icon, navigateTo: ROUTES.CONTACT_ADD },
]

export interface ListItemsNav {
    text: string,
    icon: SvgIconComponent,
    navigateTo: string
}