import './App.css'
import "./form.css"
import { useState } from "react";

const Form = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [registrados, setRegistrados] = useState([])
  
  const listaRegistro = (lista) => {
    setRegistrados ([...registrados, lista])
    
    
  }

  const agregarValor = () =>{
    if (values.firstName !== "" && values.lastName !== "" && values.email !== ""){
      listaRegistro ({firstName: values.firstName, lastName: values.lastName, email: values.email})
    }

  }

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFirstNameInputChange = (e) => {
    setValues({ ...values, firstName: e.target.value });
  };

  const handleLastNameInputChange = (e) => {
    setValues({ ...values, lastName: e.target.value });
  };

  const handleEmailInputChange = (e) => {
    setValues({ ...values, email: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }

    setSubmitted(true);
  };

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && valid && (
          <div className="success-message">Log-in con exito!
         <ul>
             {registrados.map((lista, i) => {
              return(
                <li key={i}>{lista.firstName}<br></br>{lista.lastName}<br></br>{lista.email}</li>
                
              )
             })}  
          </ul>
          
          </div>
          
        )}

        <input
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={values.firstName}
          onChange={handleFirstNameInputChange}
        />
        {submitted && !values.firstName && (
          <span id="first-name-error">Porfavor escriba su nombre</span>
        )}

        <input
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={values.lastName}
          onChange={handleLastNameInputChange}
        />
        {submitted && !values.lastName && (
          <span id="last-name-error">Porfavor escriba su apellido</span>
        )}

        <input
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleEmailInputChange}
        />
        {submitted && !values.email && (
          <span id="email-error">Porfavor escriba su email</span>
        )}

        <button onClick={agregarValor} className="form-field" type="submit">
          Log-in
        </button>
      </form>
    </div>
  );
};

export default Form;