import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from './Botao';
//import"../App.css"

function Cards() {
  const dados = [
    {
      titulo:'Mutirões',
      descricao:'Realizamos anualmente diversos mutirões de castração e atendimento veterinário gratuito, bem como campanhas de conscientização.',
      foto:'https://images.pexels.com/photos/4000092/pexels-photo-4000092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      titulo:'Áreas de desastres',
      descricao:'Nossa equipe é especializada em atuar em tragédias onde são exigidos resgates de grandes proporções, com montagem de material de campanha e cercados, captação e transporte de alimentos para animais e presença de veterinários.',
      foto:'https://images.pexels.com/photos/13159182/pexels-photo-13159182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      titulo:'Romances',
      descricao:'Romances clássicos e jovens para todos os públicos!',
      foto:'https://images.pexels.com/photos/256450/pexels-photo-256450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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