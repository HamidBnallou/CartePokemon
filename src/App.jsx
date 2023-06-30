import Carte from './assets/components/Gabarit_Carte/Carte';
import Titre from './assets/components/Title_Carte/Titles';
import './App.css';

function App() {
  
  return (
    <>
    <Titre className='title'>List of Pokémon</Titre>

    <section className="wrapper">
      
        <Carte 
            Rond1 
            TitleCard="Sandslash"
            ImgSrcCard="./public/images/Sandslash.png" 
            ImgAltCard="Sandslash"
            ImgLoadingCard="Lazy"
            Title2="Habileté"
            Information="À Alola , Sandslash a une forme régionale de type Glace / Acier . Il évolue d'Alola Sandshrew lorsqu'il est exposé à une pierre de glace ."
          />

        <Carte 
            Rond2
            TitleCard="Sandshrew"
            ImgSrcCard="./public/images/Sandshrew.png" 
            ImgAltCard="Sandshrew"
            ImgLoadingCard="Lazy"
            Title2="Habileté"
            Information="À Alola, Sandshrew a une forme régionale de type Glace/Acier. Il évolue en Alolan Sandslash lorsqu'il est exposé à une pierre de glace."

        />

        <Carte 
            Rond1 
            TitleCard="Raichu"
            ImgSrcCard="./public/images/Raichu.png" 
            ImgAltCard="Raichu"
            ImgLoadingCard="Lazy"
            Title2="Habileté"
            Information="À Alola, Raichu a une forme régionale électrique/psychique de type double. Il évolue de Pikachu lorsqu'il est exposé à une pierre de tonnerre."

        />
        <Carte 
            Rond2
            TitleCard="Pikachu"
            ImgSrcCard="./public/images/Pikachu.png" 
            ImgAltCard="Pikachu"
            ImgLoadingCard="Lazy"
            Title2="Habileté"
            Information="Il évolue de Pichu lorsqu'il est mis à niveau avec une grande amitié et évolue en Raichu lorsqu'il est exposé à une pierre de tonnerre."
        />  
    </section>
    <section className="wrapper">
      
        <Carte 
            Rond2
            TitleCard="Arbok"
            ImgSrcCard="./public/images/Arbok.png" 
            ImgAltCard="Arbok"
            ImgLoadingCard="Lazy"
            Title2="Habileté"
            Information="Il évolue d' Ekans à partir du niveau 22."
          />

        <Carte 
            Rond1
            TitleCard="Ekans"
            ImgSrcCard="./public/images/Ekans.png" 
            ImgAltCard="Ekans"
            ImgLoadingCard="Lazy"
            Title2="Habileté"
            Information="Il évolue vers Arbok à partir du niveau 22."
        />

        <Carte 
            Rond2 
            TitleCard="Gengar"
            ImgSrcCard="./public/images/Gengar.png" 
            ImgAltCard="Gengar"
            ImgLoadingCard="Lazy"
            Title2="Habileté"
            Information="Il évolue de Haunter lorsqu'il est échangé ou lorsqu'il est exposé à un Linking Cord . C'est la forme finale de Gastly ."
        />

        <Carte 
            Rond1
            TitleCard="Gastly"
            ImgSrcCard="./public/images/Gastly.png" 
            ImgAltCard="Gastly"
            ImgLoadingCard="Lazy"
            Title2="Habileté"
            Information="Il évolue en Haunter à partir du niveau 25, qui évolue en Gengar lorsqu'il est échangé ou lorsqu'il est exposé à un Linking Cord ."
        />  

    </section>
    <section className="wrapper">
      
        <Carte 
            Rond1 
            TitleCard="Fearow"
            ImgSrcCard="./public/images/Fearow.png" 
            ImgAltCard="Fearow"
            ImgLoadingCard="Lazy"
            Title2="Habileté"
            Information="Il évolue de Spearow à partir du niveau 20."
          />

        <Carte 
            Rond2
            TitleCard="Spearow"
            ImgSrcCard="./public/images/Spearow.png" 
            ImgAltCard="Spearow"
            ImgLoadingCard="Lazy"
            Title2="Habileté"
            Information="Il évolue vers Fearow à partir du niveau 20."

        />

        <Carte 
            Rond1 
            TitleCard="Electrode"
            ImgSrcCard="./public/images/Electrode.png" 
            ImgAltCard="Electrode"
            ImgLoadingCard="Lazy"
            Title2="Habileté"
            Information=" Il évolue de Hisuian Voltorb lorsqu'il est exposé à une feuille de pierre ."

        />
        <Carte 
            Rond2
            TitleCard="Voltorb"
            ImgSrcCard="./public/images/Voltorb.png" 
            ImgAltCard="Voltorb"
            ImgLoadingCard="Lazy"
            Title2="Habileté"
            Information=" Il évolue en électrode Hisuian lorsqu'il est exposé à une feuille de pierre ."
        />  
    </section>
    </>
  )
}

export default App
