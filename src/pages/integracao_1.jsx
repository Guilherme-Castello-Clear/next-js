import { useState } from 'react'
import Layout from '../components/Layout'

export default function Integracao(){

    const [cliente, setCliente] = useState({})
    const [codigo, setCodigo] = useState(1);

    async function obterCliente(id){
        const resp = await fetch(`http://0.0.0.0:3000/api/clientes/${id}`)
        const dados = await resp.json()
        setCliente(dados)
    }

    // function obterCliente(id){
    //     fetch(`http://0.0.0.0:3000/api/clientes/${id}`).then(resp => resp.json()).then(dados=>{
    //         setCliente(dados)
    //     })
    // }

    return(
        <Layout title="Integração 1">
            <div>
                <input  value={codigo} onChange={e=> setCodigo(e.target.value)} type="number" />
                <button onClick={()=> obterCliente(codigo)}>Obter Cliente</button>
            </div>
            <div>
                <ul>
                    <li>Código: {cliente.id}</li>
                    <li>Nome: {cliente.nome}</li>
                    <li>Email: {cliente.email}</li>
                </ul>
            </div>
        </Layout>
    )
}