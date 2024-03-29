import styled, {css} from "styled-components"

const colors = {
  white: "#FEFEFE",
  blue: "#6D67E4",
  green: "#1CD6CE",
  black: "#222831",
  red: "#F05454",
  gray: "#E8E8E8"
}


export const ModalsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 800px;
`


export const Button = styled.button`
  border: 3px solid ${colors.blue};
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 16px;
  
  ${props => props.$primary === 'red' && css`
    border: 3px solid ${colors.red};
  `}
  
  &:hover {
    background-color: ${colors.blue};
    color: ${colors.white};
    cursor: pointer;
  }
  
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: max-content;
  gap: 24px;
`

export const ModalItem = styled.article`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .75);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  display: none;
  
  ${props => props.$open === 'true' && css`
    display: flex;
    border: 3px solid ${colors.red};
  `}
  
`

export const ModalContainer = styled.div`
  position: relative;
  min-width: 400px;
  max-width: 1200px;
  min-height: 200px;
  min-height: 600px;
  overflow-y: auto;
  background-color: ${colors.white};
  display: grid;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  
  ${props => props.$open === 'true' && css`
    display: block;
    border: 3px solid ${colors.red};
  `}
  
  p,
  div {
    padding: 1rem;
  }
  
  img {
    width: 100%;
    height: 100%;
  }
  
`


export const ButtonClose = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
  cursor: pointer;
  border: 2px solid ${colors.red};
  width: 32px;
  height: 32px;
  border-radius: 50%;
  padding: 8px;
  font-weight: 500;
  color: ${colors.white};
  background-color: ${colors.red};
  
  display: flex;
  justify-content: center;
  align-items: center;
`