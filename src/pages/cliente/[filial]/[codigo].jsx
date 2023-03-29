import Layout from "../../../components/Layout";
import router from 'next/router'
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function ClientePorCodigo(){
    const router = useRouter()

    useEffect(() => {
        const cod = router.query.codigo;
    }, [])



    return(
        <Layout titulo='Navegação Dinâmica'>
            <span>Código = {router.query.codigo}</span><br/>
            <span>Filial = {router.query.filial}</span>
        </Layout>
    )
}