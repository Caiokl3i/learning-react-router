import { useParams } from "react-router-dom"
// 5. Nested routes - useParams para usar identificador após a /

const ContactDetails = () => {
    const { id } = useParams()

    return (
        <div>
            <div>ContactDetails</div>
            <h2>Exibindo informações do contato: {id}</h2>
        </div>
        
    )
}

export default ContactDetails