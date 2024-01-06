import { Outlet } from "react-router";
import styles from './app.module.css'
import Encabezado from '../compartidos/Encabezado';
import Main from '../compartidos/Main';
import Pie from '../compartidos/Pie';
function Layout() {
    return (
      <div className={styles.app}>
       <Encabezado/>
       <Main><Outlet/></Main>
       <Pie/>
      </div>
    );
}
export default Layout