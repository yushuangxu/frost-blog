import React from 'react'
import Header from './Header'

const Layout = (props: { children?: React.ReactNode }) => {
    return <div>
        <Header />
        {props.children}
    </div>
}
export default Layout