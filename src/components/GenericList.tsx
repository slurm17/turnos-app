// import { StackList } from '@/styles/StackList'
// import React from 'react'

// interface GenericListProps<T> {
//     items: T[]
//     CardComponent: React.ComponentType<{item: T, onClick : () => void}>
//     handleOnClick?: () => void
// }

// const GenericList = <T,>({ items, CardComponent, handleOnClick = () => {} }: GenericListProps<T>) => {
//     return (
//         <StackList>
//             {items.map((item, i) => (
//                 <CardComponent key={i} item={item} onClick={handleOnClick} />
//             ))}
//         </StackList>
//     )
// }

// export default GenericList