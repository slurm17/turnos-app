import { Box } from '@mui/material'
import { handleFileUpload } from './utils/handleFileUpload'
import { Contact } from '@/types/Contact'
import { useRef } from 'react'
import { ButtonShadow } from '@/styles/Shadow'

interface ContactFileProps {
    addContacts: (contacts : Contact[]) => void
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