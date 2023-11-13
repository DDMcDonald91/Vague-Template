import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";

// emailjs imports
import emailjs from '@emailjs/browser';

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  Modal,
  ModalBody,
  ModalFooter,
  Nav,
  Container,
  Button,
  ModalHeader,
  Form,
  FormGroup,
  Label,
  Input,
  Alert
} from "reactstrap";

// logo import
import  logo  from '../../assets/img/clientLogo.png'

function ExamplesNavbar() {
  // template code
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  // end of template code

  // state
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
          setMessage('Message sent successfully! We will be in touch soon!')
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

  // handles modal functionality
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  // handles submit function
  const handleSubmit = async (e) => {
    e.preventDefault()
    alert("Message sent!")
    setModal(false)
  }

  return (
    <>
    <Navbar
      className={classnames("fixed-top", navbarColor)}
      color-on-scroll="300"
      expand="lg"
    >
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            title="Candles by Taliah"
          >
            <img src={logo} style={{height: '45px', width: 'auto'}} />
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <Button
                className="btn-round"
                color="danger"
                onClick={toggle}
              >
                Contact Me
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>


    {/*  Modal Code for contacting owner */}
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>
        Contact Me
      </ModalHeader>
      <ModalBody>
            <Container>
              <form ref={form} onSubmit={sendEmail}>
              {message && (<Alert color='secondary'>{message}</Alert>)}
                <FormGroup>
                  <Label>Name</Label>
                  <Input type='text' placeholder="enter your name" name="user_name"/>
                </FormGroup>
                <FormGroup>
                  <Label>Email</Label>
                  <Input type='text' placeholder="enter your email" name="user_email" />
                </FormGroup>
                <FormGroup>
                  <Label>Message</Label>
                  <Input type='textarea' placeholder="enter your message" name='message' height={400} />
                </FormGroup>
                <div mt='2'>
                  <Button type="submit" value="Send" disabled={loading}>
                    {loading ? 'subscribing...' : 'Subscribe'}
                  </Button>
                </div>
              </form>
            </Container>
      </ModalBody>
      <ModalFooter>
            <h6>Your information will never be shared with any 3rd party.</h6>
      </ModalFooter>
    </Modal>
    </>
  );
}

export default ExamplesNavbar;
