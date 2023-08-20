import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function CarrosselSobre() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/7210262/pexels-photo-7210262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Coleira Inteligente com Monitoramento de Saúde e Localização</h3>
          <p>Esta solução é uma coleira inteligente equipada com sensores e conectividade sem fio que visa proteger e cuidar de animais de estimação, monitorando sua saúde, atividade e localização em tempo real. Ela proporciona tranquilidade aos proprietários e ajuda a garantir o bem-estar dos animais.</p>
        </Carousel.Caption>
      </Carousel.Item>

      </Carousel>
  );
}

export default CarrosselSobre;