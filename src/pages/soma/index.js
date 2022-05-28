import axios from "axios";
import { useState } from "react";

export default function Index(){
    const [numeroUm, setNumeroUm] = useState('');
    const [numeroDois, setNumeroDois] = useState('');
    const [resposta, setResposta] = useState(0);

    async function Calcular(){
        const resp = await axios.get(`http://localhost:5000/somar?a=${numeroUm}&b=${numeroDois}`);
        setResposta(resp.data.soma);
    }

    return (
        <main>
            <h1> Calcular Soma </h1>
            <div>
                <p> Primeiro número </p>
                <input type='number' value={numeroUm} onChange={e => setNumeroUm(e.target.value)}/>

                <p> Segundo número </p>
                <input type='number' value={numeroDois} onChange={e => setNumeroDois(e.target.value)} />

                <button onClick={Calcular}> Calcular </button>
            </div>

            <div>
                <p> |{numeroUm}| somado á |{numeroDois}| resulta em |{resposta}|</p>
            </div>
        </main>
    )
}