// import React from 'react'
// import { Button, ListItemButton, Typography } from '@mui/material'
// import WhatsAppIcon from '@mui/icons-material/WhatsApp'
// import { ListItemShadow } from '@/styles/Shadow'

// // Definimos una interfaz para las props del componente
// interface Reminder {
//   name: string;
//   phone: string;
//   date: string;
// }

// // Interfaz para el manejador de acciones
// interface ActionHandler {
//   handleAction: (phone: string) => void;
// }

// // Implementación concreta del manejador de acciones para WhatsApp
// class WhatsAppActionHandler implements ActionHandler {
//   handleAction(phone: string) {
//     window.open(`https://wa.me/${phone}`)
//   }
// }

// // Componente de presentación (sin lógica de negocio)
// const ReminderCardView: React.FC<Reminder & { onAction: () => void }> = ({
//   name,
//   phone,
//   date,
//   onAction,
// }) => {
//   return (
//     <ListItemShadow>
//       <ListItemButton
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//         }}
//       >
//         <Typography align="left">{name}</Typography>
//         <Typography align="left">{phone}</Typography>
//         <Typography align="left">{date}</Typography>
//         <Button
//           onClick={onAction}
//           size="small"
//           sx={{
//             height: '100%',
//             width: '100%',
//             maxWidth: '200px',
//             color: '#fff',
//             backgroundColor: '#4FCE5D',
//             borderRadius: '4px',
//           }}
//           endIcon={<WhatsAppIcon fontSize="small" />}
//         >
//           Enviar mensaje
//         </Button>
//       </ListItemButton>
//     </ListItemShadow>
//   )
// }

// // Componente contenedor (maneja la lógica de negocio)
// const ReminderCard /*: React.FC<Reminder & { actionHandler: ActionHandler }> */= ({
//   name,
//   phone,
//   date,
//   actionHandler,
// } : Reminder & {actionHandler: ActionHandler}) => {
//   const handleAction = () => {
//     actionHandler.handleAction(phone)
//   }

//   return (
//     <ReminderCardView name={name} phone={phone} date={date} onAction={handleAction} />
//   )
// }

// export default ReminderCard