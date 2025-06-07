import { Box } from '@mui/material'
import { useRef } from 'react'

import { handleFileUpload } from './utils/handleFileUpload'

import { ContactData } from '@/types/ContactData'
import { ButtonShadow } from '@/styles/Shadow'

interface ContactFileProps {
    addContacts: (contacts : ContactData[]) => void
  }

  
const ContactFile = ({ addContacts }: ContactFileProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const handleFileClick = () => {
    fileInputRef.current && fileInputRef.current.click()
  }
  return (
    <>
      <Box 
        sx={{ display: 'none' }}
        component={'input'}
        type='file' 
        ref={fileInputRef}
        accept=".vcf"
        onChange={(e) => handleFileUpload(e,addContacts)}
        />
      <ButtonShadow 
        fullWidth 
        onClick={handleFileClick}>
        Importar archivo .vcf
      </ButtonShadow>
    </>
  )
}

export default ContactFile