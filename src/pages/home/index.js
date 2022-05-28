
import { Link } from "react-router-dom";



export default function Index(){
    return (
        <main>
            <h1>Home</h1>

            <ul>
                <li> <Link to='/corPrimaria'> Cor Primaria </Link> </li>
                <li> <Link to='/frequencia'> Frequência </Link> </li>
                <li> <Link to='/ingresso'> Ingresso </Link> </li>
                <li> <Link to='/soma'> Calcular Soma </Link> </li>
                <li> <Link to='/dobro'> Calcular Dobro </Link> </li>
                <li> <Link to='/media'> Calcular Média </Link> </li>
                <li> <Link to='/temperatura'> Temperatura </Link> </li>
                <li> <Link to='/tabuada'> Tabuada </Link> </li>
                <li> <Link to='/maiorNumero'> MaiorNumero </Link> </li>


            </ul>
        </main>
    )
}