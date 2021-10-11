import React from 'react';

import './Sub.css'

class Sub extends React.Component{
    render(){
        return(
            <div className="container">
                <h3 className="subHeading selected">Featured Work</h3>
                <p className="downArrow">˅</p>
            </div>
        )
    }
}
export default Sub