import { useState } from "react"

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(null)
  
  const handleClickOpenModal = () => setIsOpen("true")
  const handleClickCloseModal = () => setIsOpen("false")
  
  return [isOpen, handleClickOpenModal, handleClickCloseModal]
}