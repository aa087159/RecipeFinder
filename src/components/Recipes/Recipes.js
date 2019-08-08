import React, { Component } from 'react'
import { Consumer } from '../../Context'
import Spinner from '../layout/Spinner.js'
import Recipe from './Recipe'
import uuid from 'uuid'


class Recipes extends Component {

    

    render(){
        return (
            <Consumer>
                {value => {
                    const { recipes,showSpinner } = value.state
                        return (
                            <div>
                                {
                                    showSpinner &&
                                    <Spinner />
                                }
                                {
                                    recipes && recipes.length>0 &&
                                    <React.Fragment>
                                        <h3 className="text-center m-4">Search Results</h3>
                                        <div className="waterfall">
                                            {recipes.map(item=>(
                                                <Recipe key={uuid.v4()} recipe={item.recipe} />
                                            ))}
                                        </div>
                                    </React.Fragment>
                                }
                            </div>
                        )
                }}
            </Consumer>
        )
    }
    
}

export default Recipes