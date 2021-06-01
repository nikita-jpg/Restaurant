import './modal.css'
const Modal = ({isOpen, setOpen}) => {
    console.log(typeof setOpen)
    return(
        <div className={isOpen ? "modal__background modal_active" : "modal__background"} onClick={() => setOpen(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}></div>
        </div>
    )
}

export {Modal}