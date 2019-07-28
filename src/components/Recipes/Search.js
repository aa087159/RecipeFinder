import React, { Component } from 'react'
import { Consumer } from '../../Context'


class Search extends Component {
   

    render() {
        return (
            <Consumer>
                {value=>{
                    return (
                        <div className="card">
                            <h5 className="card-header text-center p-5 display-4">Search For Recipes</h5>
                            <div className="card-body">
                                <form className="form-group" 
                                      onSubmit={value.onSubmit}>
                                    <input type="text"
                                        placeholder="Search..."
                                        name="dishName"
                                        value={value.state.dishName}
                                        className="form-control mb-2"
                                        onChange={value.onChange}/>
                                    <button type="submit" 
                                            className="btn btn-block btn-dark text-light" 
                                    >Search
                                    </button>
                                </form>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default Search