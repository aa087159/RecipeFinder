import React from 'react'
import Recipes from '../Recipes/Recipes'
import Search from '../Recipes/Search'

const Index = () => {
    return (
        <React.Fragment>
            <Search />
            <Recipes />
        </React.Fragment>
    )
}

export default Index