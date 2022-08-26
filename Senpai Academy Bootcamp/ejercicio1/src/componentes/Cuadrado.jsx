
const Cuadrado = ({n, setColor, color}) => {
    const cambiarColor = (n) => {
        setColor(n);

    };

    return (
        <div
            onClick={() => cambiarColor()}
          
            style={{backgroundColor: {color}}}
            className= "cuadrado"
            id={n}>

            </div>
    );
    
};

export default Cuadrado;