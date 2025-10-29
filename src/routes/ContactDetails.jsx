import { useParams, useNavigate } from "react-router-dom"
// 5. Nested routes - useParams para usar identificador após a /

const ContactDetails = () => {
    const { id } = useParams()

    //  6. Redirect
    const navigate = useNavigate()

    const handleContact = () => {
        console.log('Contato enviado')
        return navigate('/')
    }

    return (
        <div>
            <h2>Exibindo informações do contato: {id}</h2>
            <button onClick={handleContact}>Voltar para home</button>
        </div>
        
    )
}

export default ContactDetails