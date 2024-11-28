import { useState, useEffect } from 'react';
import { Slider } from '@mui/material';
import './App.css';

//Gestion de l'affichage de la valeur du slider au hover sur le selecteur
function valuetext(value) {
  return `${value}`;
}

function App() {
  const [fontSize, setFontSize] = useState(16);
  const [fontSizeChildren, setFontSizeChildren] = useState(1);
  const [fontSizeParent, setFontSizeParent] = useState(1.4);

  //Mise à jour de la taille de la police générale
  useEffect(() => {   
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);
  
  
  //Mise à jour de la taille générale de la police
  const handleSliderChange = (event, newValue) => {
    setFontSize(newValue);  
  };

  //Mise à jour de la taille de la police du texte parnet
   const handleSliderParentChange = (event, newValue) => {
    setFontSizeParent(newValue);
  };
  
  //Mise à jour de la taille de la police du texte enfant
  const handleSliderChildrenChange = (event, newValue) => {
    setFontSizeChildren(newValue);
  };

  return (

    <div className='ecran'>
       <div className='general'>
      <h2 className='texteGeneral'>Texte avec la police générale de la page ({fontSize}px)</h2>

      <div className="parent" style={{ fontSize: `${fontSizeParent}rem` }}>
        <h2 className="enfant" style={{ fontSize: `${fontSizeParent}rem` }}>Texte de la div parent ({fontSizeParent}rem)</h2>
        <p className='explication'> ({fontSizeParent} x la taille de la police générale de la page  = {fontSizeParent * fontSize}px )</p>

        <div className='div_enfant'>
          <h2 className="enfant" style={{ fontSize: `${fontSizeChildren}rem` }}>Texte de la div enfant ({fontSizeChildren}rem)</h2>        
            <p className='explication'> ({fontSizeChildren} x la taille de la police générale de la page  = {fontSizeChildren * fontSize}px )</p>
        </div>

      </div>

      <div className='param'>        
        <div className="slider">
          <h2>Taille de la police générale de la page (px)</h2>
          <Slider          
            aria-label="Small steps"
            value={fontSize}  
            color='red'
            onChange={handleSliderChange}
            getAriaValueText={valuetext}
            step={1}
            marks
            min={15}
            max={18}
            valueLabelDisplay="auto"
            />
        </div>

        <div className="slider">
          <h2>Taille de la police du texte du conteneur parent (rem)</h2>        
          <Slider          
            aria-label="Small steps"
            value={fontSizeParent}  
            color='red'
            onChange={handleSliderParentChange}
            getAriaValueText={valuetext}
            step={0.2}
            marks
            min={1.4}
            max={2}
            valueLabelDisplay="auto"/>
        </div>
        <div className="slider">
          <h2>Taille de la police de l'enfant (rem)</h2>        
          <Slider          
            aria-label="Small steps"
            value={fontSizeChildren}  
            color='red'
            onChange={handleSliderChildrenChange}
            getAriaValueText={valuetext}
            step={0.2}
            marks
            min={1}
            max={1.6}
            valueLabelDisplay="auto"/>
        </div>
      </div>
    </div>
    </div>
   
  );
}

export default App;