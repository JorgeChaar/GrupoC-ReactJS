import React, {Fragment} from "react";



 const Saludar = () => {
  
        const saludo = () =>{
            let saludoEstatico = document.getElementById('saludoEstatico');
             console.log('Este es un Saludo estático.');
             saludoEstatico.innerText = 'Este es un Saludo estático';
        }
        const saludoDinamico = () =>{
            let nombre = document.getElementById('nombre').value;
            let saludo = document.getElementById('saludoNombre');
            console.log('Hola '+ nombre)    
            saludo.innerText = 'Hola ' + nombre

        }
      

    return (
        <Fragment>
            
            
            <button onClick={saludo}>Saludo Estático </button>
            <span id="saludoEstatico"></span>
            <br></br>
            <br></br>
            <input id='nombre'></input>
            <button onClick={saludoDinamico}>Saludo Dinámico</button>
            <span id="saludoNombre"></span>
           
        </Fragment>
    );
};
export default Saludar;