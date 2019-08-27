import React,{createRef} from 'react'
import ShowCase from '../Recipes/ShowCase'
import Recipes from '../Recipes/Recipes'
import Footer from '../Recipes/Footer'
import { Consumer } from '../../Context';

const Index = () => {
    const recipesContainer = React.createRef();
    return(
        <React.Fragment>
            <ShowCase />
            <Consumer>
                {
                    (value)=>{
                        return(
                            <div className="wholeResult" id="search" ref={recipesContainer}>
                                <h1 className="text-center mb-5 mt-5 searchResult">Search Result</h1>
                                <Recipes providerData={value} recipesContainer={recipesContainer}/> 
                            </div>
                        )
                    }
                }
            </Consumer>
            <Footer />
        </React.Fragment>
        )
}

export default Index