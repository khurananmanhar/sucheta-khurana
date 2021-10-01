import React from 'react';
import './Nav.css'

class Navbar extends React.Component{
    render(){
        return(
            <div className="container">
                <h2 className="subHeading">Branding and UI Designer, based in Canada.</h2>
                <div className="services">
                    <hr/>
                    <p>Brand Strategy</p>
                    <p>Website Design</p>
                    <p>Graphics</p>
                    <p>Product Photography</p>
                    <p>User Research</p>
                </div>
            </div>
        )
    }
}
export default Navbar