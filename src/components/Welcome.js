import {useState, useEffect} from "react"; 

export default function Welcome(props){
    const {name} = props;
    const [counter, setCounter] = useState(0);
    const [semaforo, setSemaforo] = useState(false);

    useEffect(() =>{
        console.log(semaforo)
    }, [semaforo])

    const contar = () => {
        setCounter(counter +1);
        setSemaforo(!semaforo)
    }

    return (
        <div>
            <h1>Bienvenido {name}</h1>
            <h2>Conntador de React con Hooks</h2>
            <h3>Contador: {counter}</h3>
            <p>Semaforo: {semaforo ? "Rojo": "Verde"}</p>
            <button type="submit" onClick={contar}> +1 </button>
        </div>
    );
}