import ReactModal from 'react-modal';
import { useState } from 'react';
import { publicRoutes } from '../Buttons/NavbarButtons.js';
import { Link } from 'react-router-dom';
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
          publicRoutes.map((b, i) => <Link key={i} className='NavbarButtons'  to={b.path}>{b.title}</Link>)
        }
      <span className='closeModalWindow' onClick={()=> setIsOpen(false)}>Закрыть</span>
      </ReactModal>
    </div>
    </>
  )
}