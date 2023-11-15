import React, { Fragment, useState } from "react";



 const Contador = () => {

    const [numero,setNumero] = useState(0);
    const aumentar = () =>{
    console.log('click' + numero);
    setNumero(numero + 1.2);
    }
    



    return (
        <Fragment>
            <h3>Contador es = {numero}</h3>
            <button onClick={aumentar}>Suma 1</button>
           
        </Fragment>
    );
};
export default Contador;
