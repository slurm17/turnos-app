import { useNavigate } from 'react-router-dom'

import routes from '@/constants/routes'

export const useAppNavigation = () => {
  const navigate = useNavigate()

  
  return {
    goToMenu: () => navigate(routes.MENU),
    goToContact: () => navigate(routes.CONTACT),
    goToContactAdd: () => navigate(routes.CONTACT_ADD),
    goToReminder: () => navigate(routes.REMINDER),
  }
}
