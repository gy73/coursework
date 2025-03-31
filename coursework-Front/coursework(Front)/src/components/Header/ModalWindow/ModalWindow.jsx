import ReactModal from 'react-modal';
import { useState } from 'react';
import { BUTTONS } from '../Buttons/NavbarButtons.js';
import Button from '../Buttons/NavbarButton.jsx'; 
import './ModalWindow.css'

export default function ModalWindow() {
  const [isOpen, setIsOpen] = useState(false);

  return(
    <>
    <div>
      <span className='logo' onClick={() => setIsOpen(true)}>n3</span>

      <ReactModal
      className={ModalWindow}
      isOpen={isOpen}
      onRequestClose={()=>setIsOpen(false)}
      contentLabel= 'n3'
      >
      {
          BUTTONS.map((b, i) => <Button key={i} className='NavbarButtons' title={b.title}/>)
        }
      <span className='closeModalWindow' onClick={()=> setIsOpen(false)}>Закрыть</span>
      </ReactModal>
    </div>
    </>
  )
}