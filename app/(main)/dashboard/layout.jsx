import Header from '@/components/custom/Header'
import React from 'react'

const DashBoardLayout = ({children}) => {
  return (
    <div>
        <Header/>
      {children}
    </div>
  )
}

export default DashBoardLayout
