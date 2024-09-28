const url = process.env.REACT_APP_BACKEND_URL

export async function  pedirMetas  () {
    const response = await fetch(`${url}/api/metas`)
  
    const metas = await response.json()
    return  metas
}
/*export async function  pedirMeta () {
    const response = await fetch('/api/metas')
  
    const metas = await response.json()
    return  metas
}*/
export async function  crearMeta (meta) {
    const response = await fetch(`${url}/api/meta`,
        {   
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(meta)
        }
    )
    const metaCreada = await response.json()
    
    return metaCreada
}
export async function  actualizarMeta (id,meta) {
    const response = await fetch(`${url}/api/meta/${id}`,
        {   
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(meta)
        }
    )
    const metaActualizada= await response.json()
    
    return metaActualizada
}
export async function  borrarMeta  (id) {
    const response = await fetch(`${url}/api/meta/${id}`,{method:'DELETE'})
  
    //return  metas
}
