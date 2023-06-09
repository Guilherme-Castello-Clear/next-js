import Link from 'next/link'
import Navegador from '../components/Navegador'

export default function Inicio(){
    return (
        <div style={{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            height: '100vh',
            flexWrap: 'wrap'
        }}>
            <Navegador cor='crimson' texto='Estiloso' destino='/estiloso'/>
            <Navegador texto='Exemplo' destino='/exemplo'/>
            <Navegador cor='darkviolet' texto='JSX' destino='/jsx'/>
            <Navegador cor='green' texto='Navegação 1' destino='/navegacao'/>
            <Navegador cor='blue' texto='Navegação 2' destino='/cliente/sp-2/123'/>
            <Navegador cor='#943126' texto='Componente com Estado' destino='/estado'/>
            <Navegador cor='purple' texto='Integração com API 1' destino='/integracao_1'/>
            <Navegador cor='#006600' texto='Conteudo Estatico' destino='/estatico'/>
            <Navegador cor='#006600' texto='Conteudo Dinamico' destino='/dinamico'/>

        </div>    
    )
}