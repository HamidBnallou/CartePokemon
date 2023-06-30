import React from 'react';
import './Image.css';

const CarteImage = (props) => {

    const classnames = ["image"];
    if (props.className) classnames.push(props.className);
    
    return (

    <div className={classnames.join(" ")}>
        <img 
            src={props.src} 
            alt={props.alt}
            loading={props.loading} 
        />
    </div>
    )
    
}

export default CarteImage;