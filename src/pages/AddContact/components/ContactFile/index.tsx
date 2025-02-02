import { Box, Button } from '@mui/material'
import { handleFileUpload } from './ReadFile'
import { Contact } from '@/types/Contact'
import { useRef } from 'react'

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
        <Button fullWidth variant='contained' onClick={handleFileClick}>Importar archivo .vcf</Button>
    </>
  )
}

export default ContactFile