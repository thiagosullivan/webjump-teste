export function Contato(){
    return (
        <main className="contact-page">

            <h1>Entre em contato conosco</h1>
            <form>
                <input type="text" placeholder="Seu nome" />
                <input type="email" placeholder="Seu e-mail" />
                <input type="text" placeholder="Assunto" />
                <textarea type="message" placeholder="Mensagem"/>
                <button>Enviar</button>
            </form>
        </main>
    )
}