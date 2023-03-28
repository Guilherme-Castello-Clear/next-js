export default function Jsx(){

    const titulo = <h1>JSX é um conceito central</h1>

    function subtitulo(){
        return <h2>{'muito legal'.toUpperCase()}</h2>
    }

    const obj = {nome: 'Gui', idd: 19}

    return(
        <div>
            {titulo}
            {subtitulo()}
            <p>
                {JSON.stringify(obj)}
            </p>
        </div>
    )
}