import React, { Component,createRef} from 'react'
import { Consumer } from '../../Context'
import Spinner from '../layout/Spinner.js'
import Recipe from './Recipe'
import uuid from 'uuid'


class Recipes extends Component {

    constructor(props){
        super(props);
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.recipesContainer.current){
            nextProps.providerData.onSetRecipeContainer(nextProps.recipesContainer.current);
        }
    }
    render(){
        return (
            <Consumer>
                {value => {
                    let { recipes, clicked, dishName } = value.state
                       if(dishName.length!==0 && clicked===true && recipes.length===0){
                           return <Spinner />
                       }else if(clicked===true && recipes.length!==0){
                           return (
                              
                                    <div className="waterfall mb-4">
                                        {recipes.map(item=>(
                                            <Recipe key={uuid.v4()} recipe={item.recipe} />
                                        ))}
                                    </div>

                           )
                       }
                }}
            </Consumer>
        )
    }
    
}

export default Recipes