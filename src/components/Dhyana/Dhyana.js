import React from 'react';
import Image1 from './Images/image1.jpg'
import Image2 from './Images/image2.jpg'
import Image3 from './Images/image3.png'
import "../Arise/Arise.css"

class Dhyana extends React.Component {
    render() {
        const information =
        {
            name: "Dhyana Cleaning",
            description: "A radical rebrand for Toronto’s most trusted green-cleaning company.",
            image: [Image1, Image2, Image3],
            description2: "The goal was to build an engaging experience for customers, that was fulfilled by designing high-quality graphics for social media, website updates, and recruitment."

        }
        return (
            <div className="container">
                <div className="workIntro">
                    <p className='workTitle'>{information.name}</p>
                    <p className="description">{information.description}</p>
                </div>
                <div className="imageContainer">
                    <img src={information.image[0]} alt="Image with yellow and white background about Soji Practice and an image of a monk" />
                    <img src={information.image[1]} alt="Image with yellow background and white stars that reads Concious Cleaning and states Dhyana Cleanings mission " />
                    <img src={information.image[2]} alt="Image with brown and white background with and image of someone using a spray bottle. Also shows 5 star comments about Dhyana Cleaning" />
                </div>
                <p className="description bottomDesc">{information.description2}</p>
            </div>
        )
    }
}
export default Dhyana

