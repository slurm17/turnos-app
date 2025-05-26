import { useContactActions } from '@/hooks/contact'
import { useContactStore } from '@/store'
import { ContactUtils } from '@/utils'

const useContact = () => {
    const contacts  = useContactStore(state => state.contacts)
    const actions = useContactActions()
    const isContactsEmpty = ContactUtils.isContactsEmpty(contacts)

    return { contacts, actions, isContactsEmpty }
}

export default useContact
