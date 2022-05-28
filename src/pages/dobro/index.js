import axios from "axios"
import { useState } from "react"


export default function Index(){
    const [numero, setNumero] = useState('');
    const [resp, setResposta] = useState('');

    async function CalcularDobro(){
        const resposta = await axios.get('http://localhost:5000/dobro/' + numero);
        setResposta(resposta.data.dobro)
    }
    return (
        <main>
            <h1> Calcular Dobro </h1>
            numero: <input type='text' value={numero} onChange={e => setNumero(e.target.value)} />

            <button onClick={CalcularDobro}> Calcular </button>

            <p> O dobro de {numero} é {resp}</p>
        </main>
    )
}