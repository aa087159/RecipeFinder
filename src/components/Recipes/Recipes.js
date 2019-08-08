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
                    const { recipes, clicked, dishName } = value.state
                       if(dishName.length!==0 && clicked===true && recipes.length===0  ){
                           return <Spinner />
                       }else
                           return (
                               <div>
                                    
                                    <div className="waterfall">
                                        {recipes.map(item=>(
                                            <Recipe key={uuid.v4()} recipe={item.recipe} />
                                        ))}
                                    </div>
                                </div>
                           )
                       
                           
                       
                   
                }}
            </Consumer>
        )
    }
    
}

export default Recipes