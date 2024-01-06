import styles from './app.module.css'
import Encabezado from '../compartidos/Encabezado';
import Main from '../compartidos/Main';
import Pie from '../compartidos/Pie';
import Modal from "../Modal/Modal";
import Detalles from "../Detalles/Detalles";
import Lista from "../Lista/Lista";
function Layout2() {
    return (
      <div className={styles.app}>
       <Encabezado><Modal><Detalles/></Modal></Encabezado>
       <Main><Lista/></Main>
       <Pie/>
      </div>
    );
}
export default Layout2