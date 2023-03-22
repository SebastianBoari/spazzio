import React, { useState } from 'react';

const ContactFrom = () => {

    // Estados para manejar los datos
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [asunto, setAsunto] = useState("");
    const [mensaje, setMensaje] = useState("");

    // Fucnion validadora de nombre y apellido
        const validateName = (name) => {
            const pattern = /^[a-zA-Z]+ [a-zA-Z]+$/;
            if(pattern.test(name) ){
                setNombre(name);
            } else {
                alert("Ingrese un nombre y apellido válido. Debe ser su nombre completo sin números ni caracteres especiales");
            }
        };

        // Funcion validadora de email
        const validateEmail = (email) => {
            const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(pattern.test(email)){
                setEmail(email);
            } else {
                alert("Ingrese un correo electrónico válido");
            };
        };

        // Funcion validadora de Asunto
        const validateSubject = (subject) => {
            const pattern = /^[a-zA-Z0-9\s]{10,}$/;
            if(pattern.test(subject)){
                setAsunto(subject);
            } else {
                alert("Ingrese un asunto válido. Debe tener al menos 10 caracteres");
            };
        };

        // Funcion validadora de Mensaje
        const validateMessage = (message) => {
            const pattern = /^.{20,}$/;
            
            if(pattern.test(message)){
                setMensaje(message);
            } else {
                alert("Ingrese un mensaje válido. Debe tener al menos 20 caracteres")
            }
        };
   
    // Funcionalidad del formulario
    const handleForm = (e) => {
        // Quito el comportamiento por defecto
        e.preventDefault();
        // Funciones validadoras
        validateName(e.target[0].value);
        validateEmail(e.target[1].value);
        validateSubject(e.target[2].value);
        validateMessage(e.target[3].value);
    };

  return (
    <form id='contactForm' onSubmit={(e) => handleForm(e)}>

        <div className='contactForm__field' id='contactForm__field--nombre'>
            <label className='field__label' id='field__label--nombre' htmlFor="field__input--nombre">Nombre y apellido</label>
            <input className='field__input' id='field__input--nombre' type="text"/>
        </div>

        <div className='contactForm__field' id='contactForm__field--email'>
            <label className='field__label' id='field__label--email' htmlFor="field__input--email">Email</label>
            <input className='field__input' id='field__input--email' type="email"/>
        </div>

        <div className='contactForm__field' id='contactForm__field--asunto'>
            <label className='field__label' id='field__label--asunto' htmlFor="field__input--asunto">Asunto</label>
            <input className='field__input' id='field__input--asunto' type="text" />
        </div>

        <div className='contactForm__field' id='contactForm__field--mensaje'>
            <label className='field__label' id='field__label--mensaje' htmlFor="field__input--mensaje">Mensaje</label>
            <textarea className='field__input' id='field__input--mensaje' name="mensaje" rows="10"></textarea>
        </div>

        <div className='contactForm__field' id='contactForm__field--archivo'>
            <label id='field__label--archivo' htmlFor="field__input--archivo"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 20q-.825 0-1.413-.588T4 18v-3h2v3h12v-3h2v3q0 .825-.588 1.413T18 20H6Zm5-4V7.85l-2.6 2.6L7 9l5-5l5 5l-1.4 1.45l-2.6-2.6V16h-2Z"/></svg> <p>Seleccionar archivo (hasta 10mb)</p></label>
            <input className='field__input' id='field__input--archivo' type="file" />
        </div>

        <button id='contactForm__submit' type="submit">Enviar</button>
    </form>
  );
};

export default ContactFrom;