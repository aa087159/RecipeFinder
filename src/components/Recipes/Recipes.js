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
                    let { recipes, clicked, dishName } = value.state
                       if(dishName.length!==0 && clicked===true && recipes.length===0){
                           return <Spinner />
                       }else if(clicked===true && recipes.length!==0){
                           return (
                               <div className="wholeResult" id="search">
                                    <h1 className="text-center mb-5 mt-5 searchResult">Search Result</h1>
                                    <div className="waterfall mb-4">
                                        {recipes.map(item=>(
                                            <Recipe key={uuid.v4()} recipe={item.recipe} />
                                        ))}
                                    </div>
                                </div>
                           )
                       }
                }}
            </Consumer>
        )
    }
    
}

export default Recipes