import Cabecalho from '../components/Cabecalho'
import Layout from '../components/Layout'

export default function Exemplo(){
    return(

        <Layout titulo='Usando componentes'>
            <Cabecalho title={'React & Next'}></Cabecalho>
            <Cabecalho title={'Aprendendo React+Next'}></Cabecalho>
        </Layout>
    )
}