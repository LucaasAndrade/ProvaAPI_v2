import axios from "axios"
import { useState } from "react";

export default function Index(){
    const [numero, setNumero] = useState(0);
    const [resp, setResposta] = useState([]);

    async function Calcular(){
        const resposta = await axios.get(`http://localhost:5000/tabuada?numero=${numero}`);
        setResposta(resposta.data.tabuada)
    }

    return (
        <main>
            <h1> Tabuada </h1>

            <p> Digite um número: </p>
            <input type="number" value={numero} onChange={e => setNumero(e.target.value)} />
            <button onClick={Calcular}> Calcular</button>


            <p>A tabuada deste número é: {resp + ' '}</p>
        </main>
    )
}