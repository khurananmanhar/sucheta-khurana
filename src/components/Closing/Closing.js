import React from 'react';
import './Closing.css'

class Closing extends React.Component{
    render(){
        return(
            <div className="container closingContainer">
                <h3 className="closing">Think I’d fit your project? <br/> Get in touch →</h3>
                <div className="contact">
                    <p>Say Hello!</p>
                    <p><a href="mailto:sucheta.khurana@gmail.com">Email,</a> <a href="https://www.instagram.com/sucheta.khurana/" target="_blank" rel="noreferrer">Instagram,</a> <a href="https://www.linkedin.com/in/suchetakhurana/" target="_blank" rel="noreferrer">LinkedIn,</a> <a href="https://twitter.com/sxcheta" target="_blank" rel="noreferrer">Twitter</a></p>
                </div>
            </div>
        )
    }
}
export default Closing