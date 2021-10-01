import React from 'react';
import arise1 from './Images/arise1.png'
import arise2 from './Images/arise2.png'
import arise3 from './Images/arise3.png'
import "./Arise.css"

class Arise extends React.Component {
    render() {
        const information =
        {
            name: "Arise N' Go",
            description: "Identity and website design for a healthy snack alternative, made with popped water lily seeds.",
            image: [arise1, arise2, arise3],
            description2: "Utilizing user research to design a responsive website and branded content for social media, online ad campaigns and email marketing."

        }
        return (
            <div className="container">
                <div className="workIntro">
                    <p className='workTitle'>{information.name}</p>
                    <p className="description">{information.description}</p>
                </div>
                <div className="imageContainer">
                    <img src={information.image[0]} alt="Image with brown, orange, and blue background of Arise and Go's popped water lilly seeds" />
                    <img src={information.image[1]} alt="Image of multiple Arise and Go's popped water lilly packets with a blue background" />
                    <img src={information.image[2]} alt="Image two people high-fiving with popper water lilly seeds with a brown background that reads Happy Snacking(Grignotage Heureux)" />
                </div>
                <p className="description bottomDesc">{information.description2}</p>
            </div>
        )
    }
}
export default Arise