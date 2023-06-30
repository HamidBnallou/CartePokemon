import React from 'react';
import { useState } from 'react';
import Titre from '../Title_Carte/Titles';
import Image from '../Img_Carte/Image';
import Information from '../Info_Carte/Info';
import './Carte.css';

const Carte = (props) => {

  const [Afficher, setIsShown] = useState(false);

  const classnamesCarte = ["carte"];

  if(props.Rond1) classnamesCarte.push("CarteRounded1");

  if(props.Rond2) classnamesCarte.push("CarteRounded2");

  if(props.className) classnamesCarte.push("props.className");

  return (

    <article className={classnamesCarte.join(" ")} onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
    <Titre as="h2">{props.TitleCard}</Titre>
    <Image 
        src={props.ImgSrcCard} 
        alt={props.ImgAltCard} 
        loading={props.ImgLoadingCard}
    />
    {Afficher && (
    <div>
          
          <Titre as="h3">{props.Title2}</Titre>      
          <Information>{props.Information}</Information>
    </div>
    )}

    </article>
  )
}

export default Carte;