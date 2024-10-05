import { useContext} from "react";
import Meta from "../Meta/Meta";
import { Contexto } from "../servicios/Memoria";


function Lista() {
    const [estado] = useContext(Contexto)

    return (
        <div>
            {estado.orden.map((id) => <Meta key={id} {...estado.objeto[id]}/>)}   
        </div>
    )
}
export default Lista
