import React from 'react'
import { Consumer } from '../../Context'

const Footer = () => {
    return (
        <Consumer>
            {value=>{
                let { recipes } = value.state
                if(recipes.length!==0){
                    return(
                        <div className="footer">
                            <div className="overlay2"></div>
                            <h1 className="footerBack">Recipe Finder</h1>
                            <div className="row footerText">
                                <ul>
                                    <li>Lorem ipsum dolor.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                </ul>
                                <ul>
                                    <li>Lorem ipsum dolor.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                </ul>
                            </div>
                            
                        </div>
                    )
                }
            }}
        </Consumer>
    )
}

export default Footer