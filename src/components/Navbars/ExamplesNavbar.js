import React, { useState } from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";

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
} from "reactstrap";

function ExamplesNavbar() {
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
            to="/index"
            target="_blank"
            title="Coded by Creative Tim"
            tag={Link}
          >
            Vague
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
    <Modal>
      <ModalHeader>
        Contact Me
      </ModalHeader>
      <ModalBody>
            <Container>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label>Name</Label>
                  <Input type='text' placeholder="enter your name" />
                </FormGroup>
                <FormGroup>
                  <Label>Email</Label>
                  <Input type='text' placeholder="enter your email" />
                </FormGroup>
                <FormGroup>
                  <Label>Message</Label>
                  <Input type='textarea' placeholder="enter your message" height={300} />
                </FormGroup>
                <div mt='2'>
                  <Button type="submit">
                    Submit
                  </Button>
                </div>
              </Form>
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
