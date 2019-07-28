import React from 'react'
import gif from './Spinner.gif'

const Spinner = () => {
    return (
        <div className="text-center">
            <img src={gif} alt="Loading" className="img-fluid"/>
        </div>
    )
}

export default Spinner