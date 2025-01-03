import { Contact } from '@/types/Contact'
import { TextField, Autocomplete } from '@mui/material'
import { useState } from 'react'
// import SearchIcon from '@mui/icons-material/Search'

interface SearchBarProps {
  setContact: (contact: Contact) => void
  contact: Contact
  contacts: Contact[]
  }

const SearchBar = ({ setContact, contact, contacts } : SearchBarProps) => {
  const [inputValue, setInputValue] = useState<string | undefined>('')
  return (
    <Autocomplete
        value={contact}
        options={contacts}
        getOptionLabel={(option) => option.name}
        isOptionEqualToValue={(option, value) => option.name === value.name}
        inputValue={inputValue}
        onChange={(_e, newValue) => {
          newValue && setContact(newValue)
        }}
        onInputChange={(_e, newInputValue) => {
          setInputValue(newInputValue)
        }}
        id="controllable-states-demo"
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Controllable" />}
    />
  )
}

export default SearchBar
