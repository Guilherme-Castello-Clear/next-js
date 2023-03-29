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

        </div>    
    )
}