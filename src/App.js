import Lista from './componentes/Lista/Lista';
import Layout from './componentes/Layout/Layout';
import { Route, Routes } from 'react-router';
import Detalles from './componentes/Detalles/Detalles';
import Layout2 from './componentes/Layout/Layout2';
import {pedirMetas} from './componentes/servicios/PedidosB'
import { Contexto } from './componentes/servicios/Memoria';
import { useContext, useEffect, useState } from 'react';
import styles from './app.module.css'

function App() {
  const [,enviar] = useContext(Contexto)

  const [loader, setLoader] = useState(
    <div className={styles.contenedor_loader}>
    <div>
        <div className={styles.rueda}></div>
    </div>
    <div className={styles.cargando}>Cargando...</div>
  </div>
  )

    useEffect(() => {
      pedirMetas().then(metas=> { enviar({tipo:'colocar', metas:metas}); setLoader(<Lista/>) })
    },[])
    //global.console.log('Aplicacion react')
  return (
    <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={loader}
            />
            <Route path="/lista" element={loader}>
             </Route>
            <Route path='/nueva' element={<Detalles/>}/>
          </Route>
          <Route path="/lista/:id"  element={<Layout2/>}/>
          <Route path='*' element={'no encontrado'}/>
    </Routes> 
  );
}
export default App;

