import NavProjeto from '../components/NavProjeto'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';
import Image from 'react-bootstrap/Image';

function Doação() {
    return (
        <>
        <div>
         <NavProjeto/>
           <br/>
           <h1>Como Ajudar</h1>
           <p>Existem muitas formas de nos ajudar a cuidar dos mais de 450 cães que cuidamos e alimentamos todos os dias, fora os cães que ajudamos a sustentar de outros protetores.
            Você pode doar ração, cobertores, medicamentos, material de limpeza e de procedimento, artigos para nosso Bazar permanente ou fazer uma doação em dinheiro, o que nos ajuda no pagamento de despesas como conta de água, luz, telefone, internet, funcionários, impostos, compra de ração, medicamentos, veterinários, exames laboratoriais, procedimentos cirúrgicos, combustível, feiras de adoção, entre tantas outras.
            Cada feira de adoção tem custo hoje de R$ 100,00 (cem reais), pois há gastos com banho nos animais, transporte e funcionários. </p>
           <br/>
           <h1>Doações</h1>
           <h4>Retirada de doações:</h4>
           <p>Para entrega de doações em geral, inclusive para nosso BAZAR PERMANENTE, retiramos em São Paulo e região metropolitana, bastando encaminhar um e-mail para faleconosco@caosemdono.com.br com seu nome, endereço completo, telefone e tipo de doação disponível. </p>
           <br/>
           <h4>Doações em dinheiro:</h4>
           <p>Você pode doar qualquer quantia em dinheiro através do PAGSEGURO UOL.
            O pagamento pode ser feito nos cartões VISA, MASTERCARD, AURA, HIPERCARD, ELO, AMERICAN EXPRESS, DINERS, PERSDONAL CARD, FORT BRASIL, PAGGO.
            Usando o PAGSEGURO UOL você tem a tranquilidade de fazer uma operação segura através de cartão de crédito ou boleto bancário. </p>
            <Image src="https://static.wixstatic.com/media/eee5c2_60e58f4b7e6b4b10b866cc68947ea445~mv2.gif" />
           <br/>
           <br/>
           <br/>
           <h4>Depósito, tranferência ou doc</h4>
           <p>Você também pode fazer depósito, transferências ou doc para as contas abaixo:</p>
           <h5>BRADESCO</h5>                                                
           <p>AG. 1480</p>                                            
           <p>C/C: 39641-9</p>                                  
           <p>Favorecido Cão Sem Dono</p>            
           <p>CNPJ: 10.157.938/0001-73</p>
           <br/>
           <h5>ITAÚ</h5>                                                
           <p>AG. 7847</p>                                            
           <p>C/C:01301-3</p>                                  
           <p>Favorecido Cão Sem Dono</p>            
           <p>CNPJ: 10.157.938/0001-73</p>
           <br/>
            <h4>Doe com plataformas digitais:</h4>
            <Image src="https://static.wixstatic.com/media/eee5c2_24fcc030a86b4a069314effc7d845d7d~mv2.png/v1/fill/w_342,h_133,al_c,lg_1,q_85,enc_auto/PAG%20SEGURO.png/171x180" />
            <Image src="https://static.wixstatic.com/media/eee5c2_f1d69ac7b8f74a10af2b72984e95105c~mv2.png/v1/fill/w_260,h_191,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/PAYPAL.png" />
            <br/>
            <h4>Doe com PicPay:</h4>
            <p>Para doar com PICPAY baixe o app e escaneie o QR Code a baixo:</p>
            <Image src="https://static.wixstatic.com/media/eee5c2_c251f15caf8842d68c74df4308562496~mv2.jpg/v1/fill/w_258,h_254,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/PICPAY%20QR%20CODE.jpg"/>
            <br/>
            <h4>Doe com Pix:</h4>
            <p>CNPJ – 10.157.938/0001-73</p>
           <br/>
           <Footer/>
          </div>
        </>
       )
   }
  
  export default Doação