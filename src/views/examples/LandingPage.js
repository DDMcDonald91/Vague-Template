import React, {useRef, useState, useEffect} from "react";

// email js imports
import emailjs from '@emailjs/browser';


// reactstrap components
import {
  Button,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Alert,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

// images
import image1 from '../../assets/img/placeholder2.jpg'
import image2 from '../../assets/img/image2.jpg'

function LandingPage() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  // email js functinality
  const form = useRef();
  
  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true)

    await emailjs.sendForm('YOUR_SERVICE_ID', 'template_32q9x7g', form.current, 'XgxC-c4yetEmRo5w-')
      .then((result) => {
          console.log(result.text);
          setMessage('You are now subscribed to our newletter!')
      }, (error) => {
          console.log(error.text);
          setMessage('Sorry there seems to be an error...please try again')
      });

      messageReset()

      setLoading(false)
  };
  
  const messageReset = () => {
    setTimeout(() => {
      setMessage('')
      }, 3000)
  }
  
  // template code
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  return (
    <>
      <ExamplesNavbar />
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center pt-0 pb-0">
        <Container fluid>
            <Row>
              <Col md="6" style={{background: 'black', height: '600px'}}>
                <Container>
                <h2 style={{color: 'white'}} className="title">Handcrafted Candles</h2>
                <p style={{color: 'white', fontSize: '18px'}} className="description">
                At Candles by Taliah, we take immense pride in the meticulous process of handcrafting each candle. We pour our expertise and dedication into every step, ensuring that each creation is a testament to craftsmanship. From the selection of premium ingredients to the delicate pouring and careful finishing touches, these candles are crafted with precision and love.                
                </p>
                </Container>
              </Col>
              <Col md="6" className="p-0">
                <img src={image2} height={600} width={'100%'} />
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section text-center pt-0 pb-0">
          <Container fluid>
            <Row>
              <Col md='6' className="order-md-2" style={{background: 'beige', height: '600px'}}>
                <Container>
                <h2 style={{color: 'black'}} className="title">Exceptional Quality</h2>
                <p style={{color: 'black', fontSize: '18px'}} className="description">
                We believe that the quality of a candle is determined by the materials used. That's why we source only the finest ingredients for our creations. Our candles are made from high-grade, ethically sourced waxes, infused with premium fragrances and adorned with carefully selected wicks. The result is not just a candle but an experience that delights the senses and elevates every moment.
                </p>
                </Container>
              </Col>
              <Col md='6' className="order-md-1 p-0">
                <img src={image1} height={600} width={'100%'} />
              </Col>     
            </Row>
            </Container>
        </div>
        <div className="section section-dark landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Keep in touch?</h2>
                <h5 className="text-center"> Subscribe to our newsletter to stay up to date!</h5>
                <form className="contact-form" ref={form} onSubmit={sendEmail}>
                  {message && (<Alert color='secondary'>{message}</Alert>)}
                  <Row>
                    <Col md="6">
                      <label>Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" name="user_name" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="text" name="user_email" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="danger" size="lg" type="submit" value="Send" disabled={loading}>
                        {loading ? 'subscribing...' : 'Subscribe'}
                      </Button>
                    </Col>
                  </Row>
                </form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default LandingPage;
