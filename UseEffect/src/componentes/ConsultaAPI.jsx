import { useEffect } from "react";
import { useState } from "react"

export default function ConsultaAPI(){
    
    const [imagem, setImagem] =  useState();
   
    // Função pura
    // const soma = (a,b) => a + b 

    // Função impura - altera valores que estão fora do escopo da função
    // let resultado 
    // const soma2 = (a,b) => {resultado  = a+b}

    useEffect (() => {
        fetch ("https://dog.ceo/api/breeds/image/random")
            .then((resp) => resp.json())
            .then((obj) => {
                setImagem(obj.message);
                console.log("Recusos incluidos");
            });
    }, [])

    return(
        <>
          <div className="formatacaoGeral">
             <img src={imagem}/>
          </div>
        </>

    );
}
