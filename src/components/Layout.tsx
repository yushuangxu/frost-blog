import React from 'react'
import Header from './Header'
import Footer from './Footer'
const Layout = (props: { children?: React.ReactNode }) => {
    return <div>
        
        <Header />
        
        {props.children}
        <Footer />
    </div>
}
export default Layout