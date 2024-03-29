import styled, { css } from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const colors = {
  border: "#0075FF",
  error: "#F66060",
  success: "#1ed12d",
  white: "#fefefe"
}

export const Form = styled.form`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 20px;

	@media (max-width: 800px){
      grid-template-columns: 1fr;
	}
`;

export const Label = styled.label`
  display: block;
  font-weight: 500;
  padding: 10px 0;
  min-height: 40px;
  cursor: pointer;
  
  ${props => props.valido === 'false' && css`
    color: ${colors.error};
  `}
`;

export const InputGroup = styled.div`
  position: relative;
  z-index: 90;
`; 

export const Input = styled.input`
  width: 100%;
  background-color: #FFF;
  padding: 0 40px 0 12px;
  border-radius: 6px;
  height: 45px;
  min-height: 45px;
  transition: .3s ease all;
  border: 3px solid transparent;
  font-size: 15px;
  
  &:focus {
    border: 3px solid ${colors.border};
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
  }
  
  ${props => props.valido === 'true' && css`
    border: 3px solid transparent;
  `}
  
  ${props => props.valido === 'false' && css`
    border: 3px solid ${colors.error} !important;
  `}
`;

export const LegendError = styled.p`
  font-size: 12px;
  margin-bottom: 0;
  color: ${colors.white};
  background-color: ${colors.error};
  padding: 8px;
  border-radius: 4px;
  text-align: justify;
  display: none;
  
  ${props => props.valido === 'false' && css`
    display: block;
  `}
`;

export const IconValidatorInput = styled(FontAwesomeIcon)`
  position: absolute;
  right: 16px;
  top: 15px;
  z-index: 100;
  color: ${colors.success};
  font-size: 15px;
  opacity: 0;
  
  ${props => props.valido === 'true' && css`
    opacity: 1;
  `}
  
  ${props => props.valido === 'false' && css`
    color: ${colors.error};
    opacity: 1;
  `}
`;

export const TerminosContainer = styled.div`
  grid-column: span 2;

  input {
    margin-right: 10px;
  }
`;

export const ErrorSubmit = styled.div`
  grid-column: span 2;
  
  p {
    display: flex;
    flex-wrap: wrap;    
    align-items: center;
    gap: 6px;
  }
`;

export const ButtonContainer = styled.div`
  grid-column: span 2;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  height: 45px;
  line-height: 45px;
  width: 100%;
  border: none;
  border-radius: 6px;
  background-color: #212121;
  color: ${colors.white};
  font-weight: 600;
  font-size: 16px;
  transition: all .1s ease;
  
  &:hover {
    background-color: #181818;
    cursor: pointer;
  }
`;
 
 
export const SuccessMessage = styled.p`
  font-size: 15px;
  color: ${colors.white};
  background-color: ${colors.success};
  width: 100%;
  text-align: center;
  height: 45px;
  line-height: 45px;
  border-radius: 6px;
  display: none;
  
  ${props => props.errorform === 'false' && css`
    display: block;
  `}
`;

export const ErrorMessage = styled.div`
  height: 45px;
  line-height: 45px;
  color: ${colors.white};
  background-color: ${colors.error};
  padding: 0px 15px;
  border-radius: 6px;
  grid-column: span 2;
  margin: 15px 0;
  
  p {
    margin: 0;
  }
  
  b {
    margin-left: 10px;
  }
`;