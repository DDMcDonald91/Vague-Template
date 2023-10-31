import React, { useState } from "react";

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col, Alert, Modal, ModalHeader, ModalBody, FormGroup, Label } from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";

// firebase imports
import { auth } from "../../firebase.js";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

// react router dom imports
import { useNavigate } from "react-router-dom";

function LoginPage() {
  // state
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  // useNavigate var
  const navigate = useNavigate()

  // template code
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });

  // firebase functionality
  // handle login function
  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true)

   await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      console.log(user)
      navigate('/admin')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorCode, errorMessage);
      setMessage('Sorry. Please try again.')
    });

    handleReset()
    setLoading(false)
  }

  const handlePasswordReset = async (e) => {
    e.preventDefault()

    await sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      // ..
      setMessage('Password link sent.')
      handleReset()
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log(errorCode, errorMessage)
    });

  }

  const handleReset = () => {
      setTimeout(() => {
        setMessage('')
      }, 3000)
  }

  return (
    <>
      <div
        className="page-header"
        style={{
          backgroundImage: "url(" + require("assets/img/signin.jpg") + ")",
        }}
      >
        <div className="filter" />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Card className="card-register ml-auto mr-auto" style={{background: 'black', color: 'white'}}>
                <h3 className="title mx-auto">Welcome</h3>
                <Form className="register-form" onSubmit={handleLogin}>
                  {message && (<Alert color="danger"><p>{message}</p></Alert>)}
                  <label>Email</label>
                  <Input placeholder="Email" type="text" name="email" value={email} onChange={((e) => {setEmail(e.target.value)})} />
                  <label>Password</label>
                  <Input placeholder="Password" type="password" name="password" value={password} onChange={((e) => {setPassword(e.target.value)})} />
                  <Button block className="btn-round" color="secondary" type="submit" disabled={loading}>
                    {loading ? 'loading...' : 'Login'}
                  </Button>
                </Form>
                <div className="forgot">
                  <Button
                    className="btn-link"
                    color="danger"
                    onClick={toggle}
                  >
                    Forgot password?
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
        
        {/* modal code */}
        <Modal isOpen={modal} toggle={toggle}>
          {message && (<Alert>{message}</Alert>)}
          <ModalHeader toggle={toggle}>
            Password Reset
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={handlePasswordReset}>
              <FormGroup>
                <Label for="passwordReset">Email</Label>
                <Input type='text' name='passwordReset' value={email} onChange={(e) => {setEmail(e.target.value)}} />
              </FormGroup>
              <Button type="submit">
                Submit
              </Button>
            </Form>
          </ModalBody>
        </Modal>

        <div className="footer register-footer text-center">
          <h6>
            © 2023, created by DDM Web Designs
          </h6>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
