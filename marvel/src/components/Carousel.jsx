import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
    return (
      <Carousel className="itemCarrusel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://sm.ign.com/t/ign_latam/screenshot/default/avenger-prime-loki-origen-marvel-comics_j9m8.1280.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.hidefninja.com/community/media/hot-toys-avengers.21542/full?d=1456289603"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://areajugones.sport.es/wp-content/uploads/2021/04/capitana-marvel-2-1080x609.jpg.webp"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default UncontrolledExample;