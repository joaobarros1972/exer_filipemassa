import { useState} from 'react'

function Home() {
    return (
     <div>
        <h1>Home 2</h1>
        <Contador />
        <Caralhos />
     </div>  
    )    
}

function Contador() {
    const [contador, setContador] = useState(1);
    function adicionarContador(){
        setContador(contador + 1);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}

function Caralhos(){
    return (
        <div>
            <p>Funciona mesmo !! :)</p>
        </div>
    )
}


export default Home