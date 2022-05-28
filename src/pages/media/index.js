import axios from "axios";
import { useState } from "react"


export default function Index() {
    const [numeroUm, setNumeroUm] = useState(0);
    const [numeroDois, setNumeroDois] = useState(0);
    const [numeroTres, setNumeroTres] = useState(0);
    const [resposta, setResposta] = useState(0);

    async function Calcular( ){
        const resp = await axios.post("http://localhost:5000/media", {
            num1: numeroUm,
            num2: numeroDois,
            num3: numeroTres
        });
        setResposta(resp.data.Media);
    }

    return (
        <main>
            <h1> Calcular Média </h1>

            Primeiro Número: <input type='number' value={numeroUm} onChange={e => setNumeroUm(e.target.value)} />
            <br/>
            Segundo Número: <input type='number' value={numeroDois} onChange={e => setNumeroDois(e.target.value)} />
            <br/>
            Terceiro Número: <input type='number' value={numeroTres} onChange={e => setNumeroTres(e.target.value)}/>
            <br/>

            <button onClick={Calcular}> Calcular Media </button>

            <p> A média é {resposta} </p>

        </main>
    )
}