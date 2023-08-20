import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from './Botao';
//import"../App.css"

function Cards() {
  const dados = [
    {
      titulo:'Mutirões',
      descricao:'Realizamos anualmente diversos mutirões de castração, atendimento veterinário gratuito e campanhas de conscientização. Além de possuir uma clínica popular e serviço de transporte de animais.',
      foto:'https://images.pexels.com/photos/4000092/pexels-photo-4000092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      titulo:'Áreas de desastres',
      descricao:'Equipe especializada em atuar em tragédias onde são exigidos grandes resgates, com montagem de material de campanha e cercados, captação e transporte de alimentos para animais e presença de veterinários.',
      foto:'https://images.pexels.com/photos/11217297/pexels-photo-11217297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      titulo:'Equipe',
      descricao:'Sua equipe é formada por Presidente, Diretores e 26 funcionários entre tratadores, veterinários, auxiliares de veterinária, equipe do Bazar, equipe de resgate e pessoal do escritório.',
      foto:'https://images.pexels.com/photos/9269393/pexels-photo-9269393.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    }
  ]
  return (
    <CardGroup>
      {dados.map(({titulo, descricao, foto}) =>(
        <Card key={titulo}>
          <Card.Img variant='top' src={foto}/>
          <Card.Body>
            <Card.Title className='titulo'>{titulo}</Card.Title>
            <Card.Text>{descricao}</Card.Text>
            <Button className='botao'>Saiba Mais</Button>
          </Card.Body>
        </Card>
    ))};
    </CardGroup>
   
  );
}

export default Cards;