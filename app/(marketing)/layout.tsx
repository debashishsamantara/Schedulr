import React from 'react'
import NavBar from './_components/NavBar'

const MarketingLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
  return (
    <div className='h-full'>
        <NavBar />
        <div className='h-full pt-40'>
            {children}
        </div>
    </div>
  )
}

export default MarketingLayout