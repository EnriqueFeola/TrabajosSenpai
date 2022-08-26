import { useState } from "react";

const PrimerComponente = ({cargarValue}) => {

    const[input, setInput] = useState ("");

    const onInputChange = (e) => {
        setInput(e.target.value);
    }

    const cargarInput = (e) => {
        cargarValue(input)
    }

    return (

        <div>
            <input type="text" placeholder="Escriba aca" onChange={onInputChange} />
            <button onClick={cargarInput}>Guardar</button>
        </div>
    );

    

}

export default PrimerComponente;