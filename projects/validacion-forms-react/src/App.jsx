import { useState } from "react"
import styled from "styled-components"
import { 
  Form, 
  Label, 
  InputGroup, 
  Input, 
  LegendError, 
  IconValidatorInput, 
  TerminosContainer, 
  ErrorSubmit,
  ButtonContainer,
  Button,
  SuccessMessage,
  ErrorMessage
} from "./elementos/Formularios.js"
import { InputComp } from "./components/InputComp.jsx"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faCircleXmark, faCircleCheck, faCircleExclamation, faExclamationTriangle 
} from '@fortawesome/free-solid-svg-icons'

import { LoaderComp } from "./components/LoaderComp.jsx"

import "./App.css"


export default function App () {
  const [usuario, setUsuario] = useState({campo: "", valido: null})
  const [nombre, setNombre] = useState({campo: "", valido: null})
  const [password, setPassword] = useState({campo: "", valido: null})
  const [repeatPassword, setRepeatPassword] = useState({campo: "", valido: null})
  const [email, setEmail] = useState({campo: "", valido: null})
  const [phone, setPhone] = useState({campo: "", valido: null})
  const [terminos, setTerminos] = useState(false)
  const [errorForm, setErrorForm] = useState(null)
  const [loadingForm, setLoadingForm] = useState(false)
  
  const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{6,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{11,14}$/ // 7 a 14 numeros.
  }
  
  const validarPasswordCoorrect = () => {
    if (password.campo.length > 0) {
      if (password.campo === repeatPassword.campo) {
        console.log('LAs contraseñas son iguales')
        setRepeatPassword((prevState) => {
          return {...prevState, valido: "true"}
        })
      } else {
        console.log('LAs contraseñas son diferentes')
        setRepeatPassword((prevState) => {
          return {...prevState, valido: "false"}
        })
      }
    }
  }
  
  const handleSubmitForm = (e) => {
    e.preventDefault()
    
    if (!usuario.valido || !nombre.valido || !password.valido || !repeatPassword.valido || !email.valido || !phone.valido || !terminos ) {
      console.log('Campos imcompletos!!')
      setErrorForm("true")
      return;
    } else {
      setLoadingForm(true)
      setTimeout(() => {
        setLoadingForm(false)        
        setErrorForm("false")  
        console.log("campos completos! Submit form")
      }, 3000)
      
      setUsuario({campo: "", valido: null})
      setNombre({campo: "", valido: null})
      setPassword({campo: "", valido: null})
      setRepeatPassword({campo: "", valido: null})
      setEmail({campo: "", valido: null})
      setPhone({campo: "", valido: null})
      setTerminos(false)
      
      setTimeout(() => {    
        setErrorForm(null)
      }, 6000)
    }
  }
  
  return (
    <main>
      <Form
        onSubmit={handleSubmitForm}
      >
        
        <InputComp
          label="Usuario"
          placeholder="john123"
          tipo="text"
          name="usuario"
          id="usuario"
          legendError="El usuario tiene que ser de 4 a 16 caracteres y solo puede contaner letras, numeros y guion bajo."
          expresionRegular={expresiones.usuario}
          state={usuario}
          handleState={setUsuario}
        />
        
        <InputComp
          label="Nombre"
          placeholder="John Doe"
          tipo="text"
          name="nombre"
          id="nombre"
          legendError="El nombre tiene que ser de 4 a 16 caracteres y solo puede contaner letras."
          expresionRegular={expresiones.nombre}
          state={nombre}
          handleState={setNombre}
        />
        
        <InputComp
          label="Contraseña"
          placeholder="Ingresa tu contraseña"
          tipo="password"
          name="password"
          id="password"
          legendError="La contraseña debe contener minimo 6 caracteres"
          expresionRegular={expresiones.password}
          state={password}
          handleState={setPassword}
        />
        
        <InputComp
          label="Repetir Contraseña"
          placeholder="Repite tu contraseña"
          tipo="password"
          name="repeatPassword"
          id="repeatPassword"
          legendError="Las contraseñas deben concidir, por favor verifica"
          expresionRegular=""
          state={repeatPassword}
          handleState={setRepeatPassword}
          funcion={validarPasswordCoorrect}
        />
        
        <InputComp
          label="Correo Electronico"
          placeholder="johndoe123@example.com"
          tipo="email"
          name="email"
          id="email"
          legendError="Por favor, ingresar un correo electronico valido"
          expresionRegular={expresiones.correo}
          state={email}
          handleState={setEmail}
        />
        
        <InputComp
          label="Telefono"
          placeholder="0414-82065655"
          tipo="text"
          name="phone"
          id="repeatPassword"
          legendError="El numero de telefono debe contener 11 digitos numericos"
          expresionRegular={expresiones.telefono}
          state={phone}
          handleState={setPhone}
        />

        
        <TerminosContainer>
          <Label htmlFor="terminos">
            <input
              type="checkbox" 
              name="terminos" 
              id="terminos"
              checked={terminos}
              onChange={(e) => setTerminos(e.target.checked)}
            />
            Acepto los Terminos y condiciones            
          </Label>
        </TerminosContainer>
        
        { errorForm === "true" && 
        <ErrorMessage>
          <p>
            <FontAwesomeIcon icon={faExclamationTriangle}/>
            <b>Error:</b> 
            <span> Por favor, rellena el formulario correctamente.</span>
          </p>
        </ErrorMessage>
        }
        <ButtonContainer>
          <Button type="submit">Enviar</Button>
          {
            loadingForm && <LoaderComp/>
          }
          <SuccessMessage errorform={errorForm}>Formulario enviado exitosamente.</SuccessMessage>
        </ButtonContainer>
      </Form>
    </main>
  )
}

