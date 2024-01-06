import Plantilla from "../Plantilla/Plantilla";
import { ReactComponent as List} from '../../img/List.svg'
import {ReactComponent as Plus} from '../../img/Plus.svg'
import styles from './main.module.css'
function Main({children}) {
    return (
        <div className={styles.medio}>
            <aside className={styles.aside}>
                <Plantilla
                    to={'/lista'}
                    Icono={List}
                    text={'Lista de Metas'}
                    clase_p={styles.plantilla}
                />
                <Plantilla
                    to={'/nueva'}
                    Icono={Plus}
                    text={'Nueva Meta'}
                    clase_p={styles.plantilla}
                />
            </aside>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    );
}
export default Main