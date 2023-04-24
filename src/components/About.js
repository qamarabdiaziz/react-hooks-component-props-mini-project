import React from "react"



function About(props){
 const imageSrc = props.imageSrc || "https://via.placeholder.com/215";
 const altText = props.altText || "blog logo";

    return(
        <aside>
            <img src={imageSrc}  alt={altText}/>
            <p>{props.aboutText}</p>
        </aside>

    )
}

export default About