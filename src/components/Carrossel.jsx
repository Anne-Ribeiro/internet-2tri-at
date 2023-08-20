import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function Carrossel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>CÃO SEM DONO</h3>
          <p>O Cão Sem Dono é uma ONG (Organização Não Governamental), sem fins lucrativos, e que nasceu de um grande sonho do seu atual presidente: tirar o maior número possível de animais das ruas, dar tratamento adequado e integrá-los a famílias que lhes deem amor, carinho e uma vida digna.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/10509906/pexels-photo-10509906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>CÃO SEM DONO</h3>
          <p>Foi criada informalmente em 2005 na cidade de São Paulo. Seu estatuto foi lançado e registrado em 23 de Abril de 2008, mesmo dia em que obteve seu CNPJ.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/5698299/pexels-photo-5698299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>CÃO SEM DONO</h3>
          <p>Atualmente a ONG mantém 2 abrigos com 450 animais que são constantemente tratados por veterinários, alimentados com ração de boa qualidade,bebem água potável, dormem em abrigos especialmente construídos e são tratados com muito amor e carinho por todos os funcionários e voluntários que estão sempre visitando as instalações onde ficam os cães.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
}

export default Carrossel;