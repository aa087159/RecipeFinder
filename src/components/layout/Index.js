import React from 'react'
import ShowCase from '../Recipes/ShowCase'
import Recipes from '../Recipes/Recipes'
import Footer from '../Recipes/Footer'

const Index = () => {
    
   return(
        <React.Fragment>
            <ShowCase />
            <Recipes /> 
            <Footer />
        </React.Fragment>
        )
}

export default Index