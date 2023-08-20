import NavProjeto from '../components/NavProjeto'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';
import Carrossel2 from '../components/Carrossel2';


function Sobre() {
  return (
    <>
      <div>
      <NavProjeto/>
      <br />
      <h1>Nossa Solução</h1>
      <br />
      <Carrossel2/>
      <br/>
       <h1>Como Funciona:</h1>
       <h4>Sensores de Saúde:</h4><p> A coleira possui sensores para monitorar os sinais vitais do animal, como frequência cardíaca, temperatura corporal e níveis de atividade. Esses dados são coletados e enviados para uma plataforma centralizada.</p>
       <h4>GPS e Geofencing:</h4><p> A coleira é equipada com um receptor GPS que permite o rastreamento em tempo real da localização do animal. Os proprietários podem definir áreas delimitadas (geofences) seguras, e se o animal sair dessas áreas, um alerta é acionado.</p>
       <h4>Conectividade:</h4><p> A coleira se conecta a dispositivos móveis dos proprietários via aplicativo dedicado. O aplicativo exibe informações sobre a saúde do animal, atividade, localização e histórico.</p>
       <h4>Alertas e Notificações:</h4><p> Se a coleira detectar sinais de problemas de saúde, como aumento da frequência cardíaca ou temperatura anormal, ela envia alertas para o aplicativo do proprietário. Além disso, se o animal sair da área delimitada, um alerta é acionado para que medidas possam ser tomadas.</p>
       <h4>Histórico e Dados:</h4><p> A plataforma registra os dados de saúde e atividade do animal ao longo do tempo, permitindo aos proprietários e veterinários analisar tendências e tomar decisões informadas.</p>
       <br/>
       <h1>Benefícios:</h1>
        <h4>Monitoramento de Saúde:</h4><p>Permite monitorar a saúde dos animais de forma contínua e reagir a problemas de saúde em estágio inicial.</p>
        <h4>Prevenção de Fugas:</h4><p>O sistema ajuda a evitar que os animais escapem ou se percam, proporcionando maior segurança.</p>
        <h4>Exercício Adequado:</h4><p>Ao monitorar os níveis de atividade, é possível garantir que os animais estejam se exercitando o suficientes para uma vida saudável.</p>
        <h4>Localização em Casos de Perda:</h4><p>Se um animal se perder, a localização em tempo real facilita a busca e o resgate.</p>
        <h4>Facilitação da Comunicação com Veterinários:</h4><p>Os dados coletados podem ser compartilhados com veterinários, permitindo diagnósticos mais precisos e tratamento direcionado.</p>
      <br/> 
      <br />
      <br/>
          <Footer/>
      </div>
    </>
  )
}

export default Sobre