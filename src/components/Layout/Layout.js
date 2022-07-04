import React from 'react'
import './Layout.css'

const layout = (props) => {
    return (
        <>
            <div>Toolbar, Sidebar, Backdrop</div>
            <main className="Content">
                {props.children}
            </main>
        </>
    )
}



export default layout;