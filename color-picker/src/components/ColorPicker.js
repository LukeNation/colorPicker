import React,{useEffect,useState} from "react";
import "./ColorPicker.css";

function ColorPicker() {
  const [colorPick,setColor] = useState("#7fff00")
  
  useEffect(() => {
    document.getElementById("colorPallete").style.background=colorPick
  })
    return (
      <div id = "colorPallete">
        <div id="pallete">
          <input type="color" name="colorPicker" defaultValue="#7fff00" onChange={colorPallete=>setColor(colorPallete.target.value)}/>
          <p>este es el color Picker y tiene el color {colorPick}</p>
        </div>
      </div>
    );
  }
  
  export default ColorPicker