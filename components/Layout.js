import React from 'react'
import { Children } from 'react/cjs/react.production.min'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout({children}) {
  return (
    <div>
          <Navbar />
          {children}
          <Footer />
    </div>
  )
}
