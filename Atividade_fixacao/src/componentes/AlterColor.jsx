import { useState, useEffect } from 'react'

export default function AlterColor() {
  const [mudaCor, setMudacor] = useState("")

  function handleColor(){

        const cor = ["#FFADAD","#FFD6A5",  "#FDFFB6","#CAFFBF",  "#9BF6FF","#A0C4FF", "#BDB2FF", "#FFC6FF",  "#FFFFFC", "#E0FBFC", "#C2F9BB","#F1C0E8", "#FDE2E4", "#DEE2FF", "#E3FDFD", "#FFE5EC", "#D0F4DE", "#FFEF96",  "#D5AAFF",  "#FFF1E6"]
        
        const randomcolor = cor [Math.floor(Math.random() * cor.length)]

        document.body.style.backgroundColor = randomcolor;
    }

  useEffect(() => {
    handleColor()
  }, [mudaCor])

  return (
    <>
      <div className="card">

        <label>Digite algo: </label>
        <input  value={mudaCor} onChange={ (e) => setMudacor(e.target.value)}/>

      </div>
    </>
  )
}