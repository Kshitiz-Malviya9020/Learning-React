import React from 'react'

const container = ({children}) => {
  return (
    <div className='container border border-2 border-gray-300 rounded-lg shadow-lg p-4 mt-4'>
      {children}
    </div>
  )
}

export default container
