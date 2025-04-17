import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1'
import DateRangeIcon from '@mui/icons-material/DateRange'
import PersonIcon from '@mui/icons-material/Person'
import ROUTES from '@/constants/routes'

export const listItemsNav = [
    { text: 'Turnos', icon: DateRangeIcon, navigateTo: ROUTES.REMINDER },
    { text: 'Contactos', icon: PersonIcon, navigateTo: ROUTES.CONTACTS },
    { text: 'Añadir', icon: PersonAddAlt1Icon, navigateTo: ROUTES.CONTACT_ADD },
]
