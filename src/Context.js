import React, { Component } from 'react'
import axios from 'axios'


const Context = React.createContext()

export class Provider extends Component {
    state = {
        dishName: '',
        recipes: [],
        clicked: false,
        recipeContainer:null
    }
    
    onChange = (e) => {
        const { value,name } = e.target
        this.setState({
            [name]: value
        })
    }
    setRecipeContainer(targetElement){
        this.state.recipeContainer = targetElement;
    }
    scrollToElement(targetElement){
        let offsetTop = targetElement.offsetTop;
        window.scrollTo(0,offsetTop - 100);
    }

    render() {
        return (
            <Context.Provider value={
                                
                                {
                                state: this.state,
                                onChange : this.onChange,
                                isClicked: this.isClicked,
                                onSetRecipeContainer:this.setRecipeContainer,
                                onScrollToElement:this.scrollToElement,
                                onSubmit : (e) => {
                                    e.preventDefault()
                                    this.setState({clicked: true})
                                    const reactID = 'f0924745'
                                    const reactKey = 'b09175f0c930fd24e4e355afa385b033'
                                    axios.get(`https://api.edamam.com/search?q=${this.state.dishName}&app_id=${reactID}&app_key=${reactKey}&from=0&to=30`)
                                    .then(res=>{this.setState({
                                        recipes: res.data.hits
                                    },()=>{
                                        this.scrollToElement(this.state.recipeContainer);
                                    })})
                                    .catch(err=>console.log(err))
                                    }
                                }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer
