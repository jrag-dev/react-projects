
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faCircleCheck,
  faCircleXmark
} from '@fortawesome/free-solid-svg-icons'

import { 
  Label, 
  InputGroup, 
  Input, 
  LegendError, 
  IconValidatorInput, 
} from "../elementos/Formularios.js"

export const InputComp = ({ 
  label, placeholder, tipo, name, id, legendError, expresionRegular, state, handleState, funcion
}) => {
  
  const onChange = (e) => {
    handleState({
      ...state,
      campo: e.target.value
    })
  }
  
  const validacion = () => {
    if (expresionRegular) {
      if(expresionRegular.test(state.campo)) {
        console.log('Input correcto')
        handleState({
          ...state,
          valido: "true"
        })
      } else {
        console.log('Input incorrecto')
        handleState({
          ...state,
          valido: "false"
        })
      }
    }
    
    if (funcion) {
      funcion()
    }
  }
  
  return (
    <div>
      <Label htmlFor="nombre" valido={state.valido}>{label}</Label>
      <InputGroup>
        <Input
          type={tipo} 
          name={name} 
          id={id} 
          placeholder={placeholder}
          value={state.campo}
          onChange={onChange}
          onKeyUp={validacion}
          onBlur={validacion}
          valido={state.valido}
        />
      <IconValidatorInput
        valido={state.valido} 
        icon={state.valido === 'true' ? faCircleCheck : faCircleXmark}
      />
      </InputGroup>
      <LegendError valido={state.valido}>{legendError}</LegendError>
    </div>
  )
}