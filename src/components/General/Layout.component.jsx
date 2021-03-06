import React from 'react'
import CIndex from '../components.index'

const LayoutStyles = 'layout'

const ContentStyles = 'content'

const Layout = ({ children }) => {
  const { Header } = CIndex
  return (
    <div className={`bg-darkBlue-bgMain min-h-screen ${LayoutStyles}`}>
      <Header />
      <div className={ContentStyles}>{children}</div>
    </div>
  )
}

export default Layout
