import React from 'react'

// children props and passing default props
// for dynamic bg change use {} and back ticks template literal
const Card = ({children, bg='bg-gray-100'}) => {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md`}>
        {children}
    </div>
  )
}

export default Card