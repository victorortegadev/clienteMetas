import { createContext, useReducer } from "react"

export const Contexto = createContext(null)
/*const metasMock = [
    {   
        id:1 ,
        detalles : 'correr',
        frecuencia: 1,
        medida: 'dia',
        total:50,
        fecha:'01/02/2025',
        completado:25,
        icono: '🏃‍♂️'
    },
]*/

const estadoInicial = {
    orden:[],
    objeto:{}
}

function reductor (estado,accion){
    switch (accion.tipo){
        case 'colocar':{
           //return console.log(accion.metas)
            const metas = accion.metas
            const nuevoEstado = {
                orden: metas.map((meta) => meta.id),
                objeto: metas.reduce((objeto2,meta) => ({...objeto2, [meta.id]:meta}), {})
            } 
            return nuevoEstado
        }
        case 'crear':{
            const id = accion.meta.id
            const nuevoEstado = {
                orden: [...estado.orden, id],
                objeto: {...estado.objeto, [id]:accion.meta}
            }
            return nuevoEstado
        }
        case 'actualizar':{
            const id = accion.meta.id
            estado.objeto[id] = accion.meta
            const nuevoEstado = {...estado}
            return nuevoEstado
        }
        case 'borrar':{
            const id = accion.id
            const nuevoOrden = estado.orden.filter((item) => item != id)
            delete estado.objeto[id]
            const nuevoEstado = {
                orden: nuevoOrden,
                objeto: estado.objeto
            }
            return nuevoEstado
        }
    }
}
//reductor(estadoInicial, {tipo:'colocar', metas:metasMock})

function Memoria ({children}) {
    const [estado, enviar] = useReducer(reductor,estadoInicial)
    return(
        <Contexto.Provider value={[estado,enviar]}>
            {children}
        </Contexto.Provider>
    )
}
export default Memoria