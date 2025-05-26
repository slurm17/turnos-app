import { ContactData } from '@/types/ContactData'

interface Props {
    setOpen: (open: boolean) => void,
    setContact: (contact: ContactData) => void
}

const useContactList = ({ setOpen, setContact }: Props) => {
    const onClickContact = (contact : ContactData) => {
        setContact(contact)
        setOpen(true)
    }
    return { onClickContact }
}

export default useContactList
