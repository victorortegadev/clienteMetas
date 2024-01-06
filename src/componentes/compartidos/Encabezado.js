import Plantilla from "../Plantilla/Plantilla";
import { ReactComponent as Logo} from '../../img/Logo.svg'
import { ReactComponent as User} from '../../img/User.svg'
import styles from './encabezado.module.css'
function Encabezado({children}) {
    return (
      <header className={styles.encabezado}>
        <Plantilla 
            to={'/'}
            Icono={Logo}
            text={'Metas App'}
            clase_i={styles.icono}
            clase_t={styles.text}
        />
        <nav>
        <Plantilla
            to={'/usuario'}
            Icono={User}
        />
        </nav>
        {children}
      </header>
    );
  }
  
  export default Encabezado;