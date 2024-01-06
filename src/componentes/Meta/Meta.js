import { Link } from "react-router-dom";
import styles from './meta.module.css'

function Meta({detalles,frecuencia,medida,total,completado,icono,id}) {
    return (
      <Link to={`/lista/${id}`} className={styles.meta}>
        <div className={styles.mitad_i}>
            <div className={styles.emoji}>{icono}</div>
            <p className={styles.bold}>{frecuencia}<sub>/{medida}</sub></p>
            <p className={styles.detalles}>{detalles}</p>
        </div>
        <div  className={styles.mitad_d}>
            <div>
                <p>{completado} de {total}</p>
                <div className={styles.barra}>
                    <div className={styles.indicador} style={{width:Math.round((completado / total) * 100) + '%'}}></div>
                </div>
            </div>
            <button>
                Completado
            </button>
        </div>
      </Link>
    );
}

export default Meta