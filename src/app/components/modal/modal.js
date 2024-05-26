import styles from './modal.module.css'
import { useEffect, useRef } from "react";

function Modal(props) {
  const dialog = useRef();
  const open = props.open;
  const confirmBtn = props.confirmBtnDisabled || false;
  const children = props.children;

  function openDialog() {
    dialog.current.showModal();
  }

  function closeDialog() {
    props.onClose()
    dialog.current.close();
  }

  function confirmHandler() {
    props.onClose()
    dialog.current.close();
  }

  function handleESCclose(e){
    if(e.code == 'Escape'){
      props.onClose()
    }
  }

  useEffect(() => {

    if(open){
      openDialog()
    }else {
      closeDialog()
    }


    document.addEventListener("keyup", handleESCclose)
    return () => {
      document.removeEventListener('keyup', handleESCclose)
    }

  }, [open]);

  return (
      <dialog ref={dialog} className={styles.modal}>
        <form method="dialog" className='d-flex flex-column gap-3'>
          {children}
          <div className='align-self-end'>
            <button onClick={closeDialog}>
              Cancel
            </button>
            <button onClick={confirmHandler} disabled={confirmBtn} className='mx-3 button_confirm'>Confirm</button>
          </div>
        </form>
      </dialog>
  );
}

export default Modal;
