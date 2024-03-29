import { useState } from "react"
import styled, {css} from "styled-components"
import {ButtonContainer, Button} from "../elements/Modals.js"
import { Modal } from "./Modal.jsx"
import { useModal } from "../hooks/useModal.js"


export const Modals = () => {
  
  const [ isOpen, handleClickOpenModal, handleClickCloseModal ] = useModal()
  const [ isOpen1, handleClickOpenModal1, handleClickCloseModal1 ] = useModal()
  
  return (
    <>
      <h1>Modales</h1>
      <ButtonContainer>
        <Button onClick={handleClickOpenModal}>Modal 1</Button>
        <Button $primary="red" onClick={handleClickOpenModal1}>Modal 2</Button>
        
        <Modal isOpen={isOpen} handleClickCloseModal={handleClickCloseModal}>
          <p>Titulo de la ventana Modal</p>
          <img src="imagen1.jpg" alt="imagen 1" />
        </Modal>
        
        <Modal isOpen={isOpen1} handleClickCloseModal={handleClickCloseModal1}>
          <p>Titulo de la ventana Modal 1</p>
          <img src="imagen2.jpg" alt="imagen 2" />
        </Modal>
      </ButtonContainer>
    </>
  )
}

