import React from 'react'

interface Contact {
  id: string;
  name: string;
  phone: string;
}

const decodeQuotedPrintable = (input: string): string => {
  // Convierte las secuencias `=XX` a bytes
  const byteArray = input
    .replace(/=([A-Fa-f0-9]{2})/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)))
    .split('')
    .map((char) => char.charCodeAt(0))
  // Decodifica los bytes como UTF-8
  return new TextDecoder('utf-8').decode(Uint8Array.from(byteArray))
}
// const VcfReader: React.FC = () => {
  // const [contacts, setContacts] = useState<Contact[]>([])
  export const handleFileUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
    setContacts : (contacts : Contact[]) => void
  ) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const text = e.target?.result as string
        const parsedContacts = parseVcf(text)
        setContacts(parsedContacts)
      }
      reader.readAsText(file)
    }
  }

  const parseVcf = (vcfData: string): Contact[] => {
    const vCards = vcfData.split('BEGIN:VCARD').slice(1) // Divide por cada vCard
    const contactList: Contact[] = []
    vCards.forEach((vCard, index) => {
      const nameMatch = vCard.match(/FN;CHARSET=UTF-8;ENCODING=QUOTED-PRINTABLE:(.+)/) || vCard.match(/FN:(.+)/)
      const phoneMatch = vCard.match(/TEL.*:(.+)/)
      const decodedName = nameMatch
        ? decodeQuotedPrintable(nameMatch[1].trim())
        : 'Sin Nombre'
      phoneMatch?.[1]?.trim() && 
      contactList.push({
        id: `${index}`,
        name: decodedName,
        phone: phoneMatch?.[1]?.trim()
      })
    })
    return contactList
  }

  // return (
  //   <div>
  //     <h1>VCF Reader</h1>
  //     <input type="file" accept=".vcf" onChange={handleFileUpload} />
  //     <Autocomplete
  //       options={contacts}
  //       getOptionLabel={(option) => `${option.name} ${option.phone}`}
  //       renderInput={(params) => <TextField {...params} label="Buscar Contacto" />}
  //       isOptionEqualToValue={(option, value) => option.id === value.id}
  //     />
  //   </div>
  // )
// }

// export default VcfReader
