import { Contact } from '@/types/Contact'
import { TextField, Autocomplete } from '@mui/material'
import { useState } from 'react'

interface SearchBarProps {
  setContact: (contact: Contact) => void
  contact: Contact
  contacts: Contact[]
  }

const SearchBar = ({ setContact, contact, contacts } : SearchBarProps) => {
  const [inputValue, setInputValue] = useState<string>('')
  return (
    <Autocomplete
        value={contact}
        disableClearable
        options={contacts}
        getOptionLabel={(option) => `${option.name} ${option.phone}`}
        isOptionEqualToValue={(option, value) => option.phone === value.phone}
        inputValue={inputValue}
        onChange={(_e, newValue) => {
          setContact(newValue)
        }}
        onInputChange={(_e, newInputValue) => {
          setInputValue(newInputValue)
        }}
        id="controllable-states-demo"
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} fullWidth label="Buscar contacto" />}
    />    
  )
}

export default SearchBar
