import { ModalItem, ModalContainer, ButtonClose } from "../elements/Modals.js"


export function Modal ({ children, isOpen, handleClickCloseModal }) {
  
  return (
    <ModalItem $open={isOpen}>
      <ModalContainer>
        <ButtonClose onClick={handleClickCloseModal}>
          <span>X</span>
        </ButtonClose>
        { children }
      </ModalContainer>
    </ModalItem>
  )
}
