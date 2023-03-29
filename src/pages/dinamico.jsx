import Layout from "../components/Layout"

export async function getServerSideProps(){
    return {
        props: {
            numero: Math.random(),
        },
    };
}

export default function Dinamico(props){
    return(
        <Layout>
            <h1>{props.numero}</h1>
        </Layout>
    )
}