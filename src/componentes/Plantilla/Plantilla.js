import { Link } from "react-router-dom";
import styles from './plantilla.module.css'
function Plantilla({to,Icono,text,clase_i,clase_t,clase_p}) {
    return (
      <Link to={to} className={`${styles.plantilla} ${clase_p}`}>
        <Icono className={`${styles.icono} ${clase_i}`} />
        {text && <span className={`${styles.text} ${clase_t}` }>{text}</span>}
      </Link>
    );
}
export default Plantilla
        