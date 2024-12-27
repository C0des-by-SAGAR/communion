import Card from 'react-bootstrap/Card';
import './ImageCard.css';
import Image1 from '../../comm-assets/hero-section/event-1.avif';
import Image2 from '../../comm-assets/hero-section/event-2.webp';
import Image3 from '../../comm-assets/hero-section/event-3.avif';


function ImageCard() {
  return (
    <div className='flex flex-column-3 items-center'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Image1} className='imageCard' />
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Image2} className='imageCard' />
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Image3} className='imageCard' />
      </Card>
    </div>
  );
}

export default ImageCard;