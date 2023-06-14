import { useState } from "react"

export const HookUseState = () =>{
    const [count, setCount] = useState(0)
    const [nombre, setNombre] = useState("Martin")
    const [personajes, setPesonajes] = useState({
        id: 10,
        nombrePer: "Lucho",
        edad: 45
    })
    const {id, nombrePer, edad} = personajes
    const sumar = () =>{
        setCount(count + 1)
    }
    const restar = () =>{
        if(count <= 0 ) return
        setCount(count - 1)
    }
    const reset = () =>{
        setCount(0)
    }
    const cambiar = () =>{
        setNombre("Pepe")
    }
    return(
        <div>
            <h1>Soy el Hook Use State</h1>
            <p>El numero es {count}</p>
            <button onClick={sumar}>Sumar + 1</button>
            <button onClick={restar}>Resto - 1</button>
            <button onClick={reset}>Resetar</button>

            <h2>Mi nombre es {nombre}</h2>
            <button onClick={cambiar}>Cambiar</button>

            <p>El personjes es {nombrePer}</p>
        </div>
    )
}