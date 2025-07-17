import { useState, useEffect } from "react"
export default function ImportAPI(){
    const [data, setData] = useState('')

    useEffect(() => {

         fetch('https://api.github.com/users/EmilyMedeiross').then(res => res.json()).then((data) => setdata(data))
    }, [])
    console.log(data) 
    

    return(    
        <>

            
        </>

    )
}