import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/logo1.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = ({scrollToContactForm}) => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(30 - 0.01);
  const [index, setIndex] = useState(1);
  const toRotate = [ ",Full Stack Developer", ",Ruby On Rail Developer", ",MERN Developer", ",VueJs Developer" ];
  const period = 2000;

  const handleClick = () => {
    scrollToContactForm();
  };


  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])


  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(100);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <div>
                <h1>{`Hi! I'm Asjid Khalid`}</h1>
                <h1> <span className="txt-rotate text-warning" dataPeriod="10" data-rotate='[ "Full Stack Developer", "Ruby on Rail Developer", "MERN Developer", "VueJs Developer"  ]'><span className="wrap">{text}</span></span></h1>
                </div>
                <div>
                <p className="text-white">Full Stack Developer with 4+ years of experience. Adept in bringing forth expertise in design, installation, testing and implementing Agile and SDLC approaches. With expertise in Ruby on Rails, Node, React, VueJs, Express, and AWS.</p>
                  <button onClick={handleClick}>Let’s Connect <ArrowRightCircle size={25} /></button>
                </div>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
