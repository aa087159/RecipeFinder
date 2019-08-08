import React, { Component } from 'react'
import axios from 'axios'

const Context = React.createContext()

export class Provider extends Component {
    state = {
        dishName: '',
        recipes: [],
        heart: false,
        showSpinner:false
    }

    onChange = (e) => {
        const { value,name } = e.target
        this.setState({
            [name]: value
        })
    }

    changeIconColor = (e) => {
        this.setState({
            heart: !this.state.heart
        })
        if(this.state.heart){
            e.target.style.color= 'red'
        }
    }

    

    render() {
        return (
            <Context.Provider value={{
                                state: this.state,
                                onChange : this.onChange,
                                onSubmit : (e) => {
                                    e.preventDefault();
                                    const reactID = 'f0924745'
                                    const reactKey = 'b09175f0c930fd24e4e355afa385b033'
                                    this.setState({
                                        showSpinner:true
                                    });
                                    axios.get(`https://api.edamam.com/search?q=${this.state.dishName}&app_id=${reactID}&app_key=${reactKey}&from=0&to=30`)
                                    .then(res=>{this.setState({
                                        recipes: res.data.hits,
                                        showSpinner:false
                                    })})
                                    .catch(err=>console.log(err))
                                },
                                changeIconColor : this.changeIconColor
                                }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer
