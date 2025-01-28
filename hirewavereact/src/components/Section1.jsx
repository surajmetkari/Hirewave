import '../styles/Home.css';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/office-background5.jpg';
import img2 from '../assets/obg6.jpg';
import img3 from '../assets/office-background3.jpg';

export function Section1() {
    return(
      <Carousel>
      <Carousel.Item>
        <img src={img1} alt="img1" style={{height: '90vh', width: '100%'}} />
        <Carousel.Caption>
          <h3><i>Discover Your Dream Job</i> </h3>
          <p><i>Browse thousands of job opportunities tailored to your skills and goals. Let HireWave connect you to the career you deserve.</i></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img2} alt="img2" style={{height: '90vh', width: '100%'}}/>
        <Carousel.Caption>
          <h3><i>Hire the Perfect Talent</i></h3>
          <p><i>Find top-notch professionals to power your business success. Streamline your hiring process with HireWave's advanced recruitment solutions.</i></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img3} alt="img3" style={{height: '90vh', width: '100%'}}/>
        <Carousel.Caption>
          <h3><i> Join a Growing Network</i></h3>
          <p>
            <i>Be a part of a thriving community of job seekers and recruiters. Together, we create opportunities that change lives.</i>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
}