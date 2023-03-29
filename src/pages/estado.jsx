import { useState } from "react";
import Layout from "../components/Layout";

export default function Estado(){

    const [num, setNum] = useState(3)

    function incrementar(){
        return setNum(num + 1);
    }

    return(
        <Layout titulo='Componente com Estado'>
            <span>{num}</span>
            <button onClick={() => incrementar()}>Incrementar</button>
        </Layout>
    )
}