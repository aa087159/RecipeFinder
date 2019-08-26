import React, {createRef} from 'react'
import { Consumer } from '../../Context'

const Nav = () => {


    
        return (
            <Consumer>
                {value=>{
                    const inputStyle={
                        width: '250px'
                    }
                    const ref = createRef();
                    const handleChange = () => 
                        ref.current.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    
                    
                    return (
                        <div>
                            
                            <nav className="bg-danger text-light row fixed-top">
                                <div className="col-md-4"></div>
                                <h3 className="col-md-4 text-center navHeader p-3">Recipe Finder</h3>
                                <form className="form-group col-md-4 form-inline pt-3"
                                  onSubmit={value.onSubmit}
                                  ref={ref}
                                   >
                                    <input type="text"
                                        placeholder="Search..."
                                        name="dishName"
                                        value={value.state.dishName}
                                        className="form-control"
                                        onChange={value.onChange}
                                        style={inputStyle}
                                        required/>
                                    <button type="submit" onClick={handleChange} className="btn btn-dark text-light"><i className="fas fa-search"></i></button>
                                    
                                </form>
                            </nav>
                            
                        </div>
                    )
                }}
            </Consumer>
        )
    
}

export default Nav
