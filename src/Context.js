import React, { Component } from 'react'
import axios from 'axios'


const Context = React.createContext()

export class Provider extends Component {
    state = {
        dishName: '',
        recipes: [],
        clicked: false
    }
    
    onChange = (e) => {
        const { value,name } = e.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <Context.Provider value={
                                
                                {
                                state: this.state,
                                onChange : this.onChange,
                                isClicked: this.isClicked,
                                onSubmit : (e) => {
                                    e.preventDefault()
                                    this.setState({clicked: true})
                                    const reactID = 'f0924745'
                                    const reactKey = 'b09175f0c930fd24e4e355afa385b033'
                                    axios.get(`https://api.edamam.com/search?q=${this.state.dishName}&app_id=${reactID}&app_key=${reactKey}&from=0&to=30`)
                                    .then(res=>{this.setState({
                                        recipes: res.data.hits
                                    })})
                                    .catch(err=>console.log(err))
                                    this.setState({clicked: false})
                                    }
                                }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer
