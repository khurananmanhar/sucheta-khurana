import React from 'react';
import logo from './Images/Maneta Logo.png'
import logoWithMountain from './Images/Maneta Logo with Mountains.png'
import orange from './Images/Orange.png'
import "./Maneta.css"

class Maneta extends React.Component{
    render(){
        const information={
            title:"Maneta Creative Co.",
            description:"A cultivated approach to help small business owners thrive when bootstrapping.",
            logo:logo,
            logoWithMountain:logoWithMountain,
            orange:orange,
            description2:"Brand identity, typography and color palette curation."
        }
        return(
            <div className="container">
                <div className="IntroWithLogo">
                <div className="workIntro move">
                    <p className="workTitle">{information.title}</p>
                    <p className="description">{information.description}</p>
                </div>
                <img src={information.logoWithMountain} alt="Maneta Logo with Mountain Icon"/>
                </div>
                <div className="imageContainer2">
                    <img src={information.logo} alt="Maneta Logo"/>
                    <img src={information.logo} alt="Maneta Logo"/>
                    <img src={information.logo} alt="Maneta Logo"/>
                </div>
                <img src={information.orange} className="orange" alt="Aesthetic Picture of Oranges"/>
                <p className="description bottomDesc2">{information.description2}</p>
            </div>
        )
    }
}
export default Maneta