import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './FeaturesCard.css';
import logo1 from '../../comm-assets/features-card/logo-1.png';
import logo2 from '../../comm-assets/features-card/logo-2.png';
import logo3 from '../../comm-assets/features-card/logo-3.png';
import arrow from '../../comm-assets/hero-section/arrow.png'

function FeaturesCard() {
  return (
    <div className='features-cards-container'>
      <Card className='featuresCard'>
        <Card.Img variant="top" src={logo1} className="card-img" />
        <Card.Body>
          <div className="card-title">Unifying Communities</div>
          <div className="card-text">
            Communion bridges diverse religious communities, becoming the social glue for faiths, beliefs, and traditions.
          </div>
          <Button variant="primary" className='featuresButton'>
            <span>Learn More</span>
            <img src={arrow} alt="arrow" className="arrow" />
          </Button>
        </Card.Body>
      </Card>

      <Card className='featuresCard'>
        <Card.Img variant="top" src={logo2} className="card-img" />
        <Card.Body>
          <div className="card-title">Innovative and Fun</div>
          <div className="card-text">
            With cutting-edge technology, we make exploring spirituality and connecting with others engaging and effortless.
          </div>
          <Button variant="primary" className='featuresButton'>
            <span>Learn More</span>
            <img src={arrow} alt="arrow" className="arrow" />
          </Button>
        </Card.Body>
      </Card>

      <Card className='featuresCard'>
        <Card.Img variant="top" src={logo3} className="card-img" />
        <Card.Body>
          <div className="card-title">Promoting Unity</div>
          <div className="card-text">
            With cutting-edge technology, we make exploring spirituality and connecting with others engaging and effortless.
          </div>
          <Button variant="primary" className='featuresButton'>
            <span>Learn More</span>
            <img src={arrow} alt="arrow" className="arrow" />
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default FeaturesCard;