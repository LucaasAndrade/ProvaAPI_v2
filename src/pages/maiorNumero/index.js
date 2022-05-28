import axios from "axios"
import { useState } from "react"


export default function Index(){
    const [numero, setNumero] = useState([]);
    const [resposta, setResposta] = useState(0);

    async function maiorNumero(){
        const resp = await axios('http://localhost:5000/dia2/maiorNumero', {
            a: numero
        })
        setResposta(resp.data.a)
    }

    return (

        <main>
            <h1> Maior Número </h1>
            <input type='text' value={numero} onChange={e => setNumero(e.target.value)} />
    
            <button onClick={maiorNumero}/>
            <p> O maior núemero é {resposta}</p>
        </main>
    )
}