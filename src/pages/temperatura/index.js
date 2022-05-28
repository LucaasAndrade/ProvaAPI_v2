import axios from "axios";
import { useState } from "react"



export default function Index(){
    const [temperatura, setTemperatura] = useState(0);
    const [resposta, setResposta] = useState('');

    async function verificarTemperatura(){
        const resp = await axios.get(`http://localhost:5000/temperatura?t=${temperatura}`);
        setResposta(resp.data.temperatura)
    }
    return (
        <main>
            <h1> Temperatura </h1>
            Temperatura: <input type='number' value={temperatura} onChange={e => setTemperatura(e.target.value)}/>

            <button onClick={verificarTemperatura}> Verificar Temperatura </button>

            <p>{resposta}</p>
        </main>
    )
}