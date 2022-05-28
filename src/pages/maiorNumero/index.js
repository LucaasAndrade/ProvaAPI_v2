import axios from "axios"
import { useState } from "react"


export default function Index(){
    const [numeros, setNumeros] = useState([]);
    const [numero, setNumero] = useState(0);
    const [resposta, setResposta] = useState(0);

    function adicionar(){
        setNumeros([...numeros, numero]);
        setNumero('');
    }

    async function maiorNumero(){
        const resp = await axios.post('http://localhost:5000/dia2/maiorNumero', numeros)
        setResposta(resp.data.maior)
    }

    return (

        <main>
            <h1> Maior Número </h1>
            
            numero: <input type='text' value={numero} onChange={e => setNumero(Number(e.target.value))} />
            <button onClick={adicionar}> adicionar número</button>

            
            <p> {numeros.map(item =>
                <p> {item} </p>)} </p>

            <button onClick={maiorNumero}>  MaiorNumero</button>
            <p> O maior núemero é {resposta}</p>
        </main>
    )
}