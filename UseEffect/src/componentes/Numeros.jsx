import { useEffect } from "react";
import { useState } from "react"

export default function Numeros(){
    const [numero1, setNumero1] = useState(0);
    const [numero2, setNumero2] = useState(0);
    const [maior, setMaior] = useState(0);
    
    const NumeroMaior = (n1, n2) => { 
        if (n1 > n2) {
            return n1;
        }else{
            return n2;
        }
    };

    useEffect(() => {
        document.title = `${numero1 + numero2} cliques`;
        setMaior(NumeroMaior(numero1, numero2));
    }, [numero1, numero2])

     useEffect(() => {
        console.log( ` N1: ${numero1}  N2: ${numero2}  Maior: ${maior}`);  
    }, [numero1, numero2, maior])

    return(
        <>
            <div  className="formatacaoGreal">
                <p className="texto">
                    {`Número 1: ${numero1} | Número 2: ${numero2}`}
                </p>

                <p className="texto">{`o maior número é ${maior}`} </p>
                <div className="botoes">

                    <button onClick={() => setNumero1(numero1 + 1)}> N1</button>

                    <button onClick={() => setNumero2(numero2 + 1)}> N2</button>

                </div>
            </div>
           
        </>
    )
}