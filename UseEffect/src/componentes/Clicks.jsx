import { useEffect, useState } from "react";

export default function Clicks(){

    const [count, setCount] = useState(0)
    const [countB, setCountB] = useState(0)

    useEffect(() => {
        console.log('Executa sempre')
    })

    useEffect(() => {
        console.log('Executa na primeira vez que a página carrega')
    }, [])

    useEffect(() => {
        console.log('Executa sempre que um estado fisico é alterado')
    }, [countB])

    useEffect(() =>{
 
        const timer = setTimeout(() => {
            console.log(`O countfoi executado ${count}`)
        }, 1000)

        return() => {
            clearTimeout(timer)
        }
    }, [count])  
    // Essa váriavel dentro das chaves é uma depêndencia

    return(
        <>
            <div className='App'>
                <h1>UseEffect</h1>
                <div className="card">
                    <p>Foi Renderizado: {count}</p>
                    <button onClick={() => setCount((count) => count + 1)}>
                        Render </button>
                </div>
                   <div className="card">
                    <p>Foi Renderizado: {countB}</p>
                    <button onClick={() => setCountB((count) => count + 1)}>
                        Render B </button>
                </div>
             </div>
        </>
    )
}