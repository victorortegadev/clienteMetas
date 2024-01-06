import { useContext, useEffect, useState } from 'react';
import styles from './detalles.module.css'
import { Contexto } from '../servicios/Memoria';
import { useNavigate, useParams } from 'react-router';
import { actualizarMeta, borrarMeta, crearMeta } from '../servicios/PedidosB';

function Detalles() { 

    const [form, setForm] = useState(
            {            
                detalles : '',
                frecuencia: '',
                medida: '',
                total:'',
                fecha:'',
                completado:'',
                icono: ''
            }        
    )
    const {detalles, frecuencia, medida, total, fecha, completado, icono} = form
        
    function onchange (e, valor) {
        setForm((estado) =>({...estado, [valor]: e.target.value}))
    }

    const [estado, enviar] = useContext(Contexto)

    const {id} = useParams()
    const meta_actualizar = estado.objeto[id]

    useEffect(() => {
        if(!id){return}
        if(!meta_actualizar){
            return navegar('/404')
        }
        setForm(meta_actualizar)
    },[id])
    
    const navegar = useNavigate()

    function crear (){
        crearMeta(form).then(meta => 
            enviar({tipo:'crear', meta:meta})
        )
        navegar("/lista")
    }
    function cancelar (){
        navegar("/lista")
    }
    function actualizar (){
        actualizarMeta(id,form).then(meta => 
            enviar({tipo:'actualizar', meta:meta})
        )
        navegar("/lista")
    }
    function borrar (){
        borrarMeta(id)
        enviar({tipo:'borrar', id})
        navegar("/lista")
    }
    const uno = id? styles.detalles + ' ' + styles.sombra : styles.detalles

    return (
        <div className={styles.centrar}>
            <div className={uno}> 
                <form>
                    <label>
                        DESCUBRE TU META
                        <input type='text' placeholder='ej. 52 caminatas' value={detalles != null? detalles : ''} onChange={(e) => onchange(e,'detalles')}/>
                    </label>
                    <label>
                        FRECUENCIA DE METAS (ej. 1 vez a la semana)
                        <div className={styles.frecuencia}>
                            <input type='number' value={frecuencia != null? frecuencia : ''} onChange={(e) => onchange(e,'frecuencia')}/>
                            <select value={medida != null? medida : ''} onChange={(e) => onchange(e,'medida')}>
                                <option>dia</option>
                                <option>semana</option>
                                <option>mes</option>
                                <option>año</option>
                                <option/>
                            </select>
                        </div>
                    </label>
                    <label>
                        ¿CUANTAS VECES DESEAS CUMPLIR TU META?
                        <input type='number' value={total != null? total :''} onChange={(e) => onchange(e,'total')}/>
                    </label>
                    <label>
                        ¿TIENES UNA FECHA LIMITE?
                        <input type='date' value={fecha != null? fecha : ''} onChange={(e) => onchange(e,'fecha')}/>
                    </label>
                    <label>
                        ¿CUANTAS VECES HAZ COMPLETADO ESTA META?
                        <input type='text' value={completado != null? completado : ''} onChange={(e) => onchange(e,'completado')}/>
                    </label>
                    <label>
                        ESCOGE EL ICONO PARA LA META
                        <select value={icono != null? icono : ''} onChange={(e) => onchange(e,'icono')}>
                            <option>🏃</option>
                            <option>✈️</option>
                            <option>📚</option>
                            <option/>
                        </select>
                    </label>
                </form>
                <div className={styles.deta_bajo}>
                    {!id && <button className={styles.button_negro} onClick={() => crear()}>Crear</button>}
                    {id && <button className={styles.button_negro} onClick={() => actualizar()}>Actualizar</button>}
                    {id && <button className={styles.button_red} onClick={() => borrar()}>Borrar</button>} 
                    <button onClick={() => cancelar()}>Cancelar</button>
                </div>
            </div>
        </div>
    );
}
export default Detalles