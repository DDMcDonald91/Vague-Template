import React from "react";

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
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

// images
import image1 from '../../assets/img/joshua-stannard.jpg'
import image2 from '../../assets/img/header.jpg'
import image3 from '../../assets/img/antoine-barres.jpg'

function LandingPage() {
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
              <Col md="6" style={{background: 'black', height: '500px'}}>
                <Container>
                <h2 style={{color: 'white'}} className="title">Customized Website Templates</h2>
                <h5 style={{color: 'white'}} className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </h5>
                </Container>
              </Col>
              <Col md="6" className="p-0">
                <img src={image2} height={500} width={'100%'} />
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section text-center pt-0 pb-0">
          <Container fluid>
            <Row>
              <Col md='6' className="order-md-2" style={{height: '500px'}}>
                <Container>
                <h2 style={{color: 'black'}} className="title">Exceptional Quality</h2>
                <h5 style={{color: 'black'}} className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </h5>
                </Container>
              </Col>
              <Col md='6' className="order-md-1 p-0">
                <img src={image1} height={500} width={'100%'} />
              </Col>     
            </Row>
            </Container>
        </div>
        <div className="section text-center pt-0 pb-0">
        <Container fluid>
            <Row>
              <Col md="6" style={{background: 'black', height: '500px'}}>
                <Container>
                <h2 style={{color: 'white'}} className="title">Affordable Pricing</h2>
                <h5 style={{color: 'white'}} className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </h5>
                </Container>
              </Col>
              <Col md="6" className="p-0">
                <img src={image3} height={500} width={'100%'} />
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
                <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      <label>Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" />
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
                        <Input placeholder="Email" type="text" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="danger" size="lg">
                        Subscribe
                      </Button>
                    </Col>
                  </Row>
                </Form>
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
