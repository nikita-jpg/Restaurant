import './modal.css'
const Modal = ({modal, setModal}) => {
    return(
        <div className={modal.isOpen ? "modal__background modal_active" : "modal__background"} onClick={() => setModal({isOpen: false})}>
            <div className="modal__content" onClick={e => e.stopPropagation()}></div>
        </div>
    )
}

export {Modal}