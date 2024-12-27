import Card from 'react-bootstrap/Card';
import './ImageCard.css';
import card1 from '../../comm-assets/Stats/card-1.avif';
import card2 from '../../comm-assets/Stats/card-2.avif';

function StatsCard() {
  return (
    <div className='flex flex-column-3 items-center'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={card1} className='imageCard' />
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={card2} className='imageCard' />
      </Card>
    </div>
  );
}

export default StatsCard;