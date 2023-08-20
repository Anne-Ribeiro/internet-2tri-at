import NavProjeto from '../components/NavProjeto'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';
//import "../App.css"

function Contato() {
   return (
       <>
       <div>
        <NavProjeto/>
          <br/>
          <h1>
            Fale Conosco!
          </h1>
          <br/>
          <br/>
          
          <br />
          <h2>
            Telefone:
          </h2>
          <h4>No momento não estamos realizando resgates solicitados por e-mail ou telefone. 
            Para casos emergenciais, ligue para o número 156 (Prefeitura de São Paulo).</h4>
        
          <br/>
          <h2>
            E-mail: 
          </h2>
          <br />
          <h4>Fale com o Presidente: </h4><p>rafael@caosemdono.com.br</p>
          <h4>Geral: </h4><p>faleconosco@caosemdono.com.br</p>
          <h4>Apadrinhamento: </h4><p>apadrinhamento@caosemdono.com.br</p>
          <h4>Adoção de Animais: </h4><p>valeria@caosemdono.com.br</p>
          <h4>Espaço para eventos: </h4><p>aline@caosemdono.com.br</p>
          <h4>Doações para o bazar/ração/remédios: </h4><p>faleconosco@caosemdono.com.br</p>
          <h4>Reclamações e sugestões: </h4><p>rafael@caosemdono.com.br</p>
          <br/>
          <h2>
            Endereço: Rua Honório Serpa, 259 - Jardim Vergueiro, SP  
          </h2>
          <br/>
          <h2>Redes Sociais:</h2>
          <h4>Twitter: </h4><p>https://twitter.com/caosemdono</p>
          <h4>Facebook: </h4><p>http://www.facebook.com/caosemdono</p>
          <h4>Instagram: </h4><p>https://www.instagram.com/caosemdono.oficial/</p>
          <br/>
          <br />
         <br />
         <br />
          <Footer/>
          </div>
        </>
       )
   }
  
  export default Contato