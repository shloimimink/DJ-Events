import {useState, useEffect} from "react";
import ReactDOM from 'react-dom'
import {FaTimes} from "react-icons/fa";
import styles from "@/styles/Model.module.css"

export default function Modal({show, title, onClose, children}) {
    const [isBrowser, setIsBrowser] = useState(false)

    useEffect(() => setIsBrowser(true))

    const handleClose = (e) => {
        e.preventDefault()
        onClose()
    }

    const modelContent = show ? (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <a href="#" onClick={handleClose}>
                        <FaTimes/>
                    </a>
                </div>
                {title && <div>{title}</div>}
                <div className={styles.body}>{children}</div>
            </div>
        </div>
    ) : null

    if (isBrowser) {
        return ReactDOM.createPortal(modelContent, document.getElementById('modal-root'))
    } else {
        return null
    }
}