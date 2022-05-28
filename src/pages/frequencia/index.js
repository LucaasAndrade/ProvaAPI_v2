import axios from "axios"
import { useState } from "react"


export default function Index(){
    const [texto, setTexto] = useState('');
    const [caracter, setCaracter] = useState('');
    const [resp, setResposta] = useState(0);

    async function VerFrequencia() {
        const resposta = await axios.get(`'http://localhost:5000/dia2/freqCaracter/'/${texto}/${caracter}`);
        setResposta(resposta.data.freq);
    }
    return (
        <main>
            <h1> Frequência </h1>
            <p> Digite uma palavra </p>
            texto: <input type='text' value={texto} onChange={e => setTexto(e.target.value)} />
            <p>Digite a letra para ver a Frequência</p>
            caracter: <input type='text' value={caracter} onChange={e => setCaracter(e.target.value)} />

            <button onClick={VerFrequencia} > Checar </button>

            <p> O caracter "{caracter}" aparece {resp} vezes no texto. </p>
        </main>
    )
}   