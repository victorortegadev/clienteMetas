import Detalles from '../Detalles/Detalles'
import styles from './Modal.module.css'

function Modal () {
    return(
        <>
        <div className={styles.modal}/>
            
            <div className={styles.hijo}>
            <Detalles sombra={'sombra'}></Detalles>
            </div>
        </>    
    )
}
export default Modal