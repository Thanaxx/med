import React from 'react'
import { NewsName } from './MedStyle'

function NewsSample(props) {
    return (
        <>
            <NewsName>
                <img 
                    src={props.image} 
                    alt="news" />
                    <h3>{props.title}</h3>
                    <p>{props.date}</p>
                    <h4>{props.description}</h4>
                    <h4 to="/more">{props.link}</h4>
            </NewsName>
        </>
    )
}

export default NewsSample;
