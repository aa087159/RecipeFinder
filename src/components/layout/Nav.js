import React, { Component } from 'react'
import { Consumer } from '../../Context'

class Nav extends Component {

   

    render() {
        return (
            <Consumer>
                {value=>{
                    const inputStyle={
                        width: '250px'
                    }

                    return (
                        <div>
                            <nav className="bg-danger text-light row">
                                <div className="col-md-4"></div>
                                <h3 className="col-md-4 text-center navHeader p-3">Recipe Finder</h3>
                                <form className="form-group col-md-4 form-inline pt-3" 
                                  onSubmit={value.onSubmit}
                                   >
                                    <input type="text"
                                        placeholder="Search..."
                                        name="dishName"
                                        value={value.state.dishName}
                                        className="form-control"
                                        onChange={value.onChange}
                                        style={inputStyle}/>
                                    <button type="submit" className="btn btn-dark text-light"><i className="fas fa-search"></i></button>
                                    
                                </form>
                            </nav>
                            
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default Nav
