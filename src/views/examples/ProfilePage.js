import React, { useState, useEffect } from "react";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

// firebase imports
import { auth } from '../../firebase.js'
import { onAuthStateChanged } from "firebase/auth";

// react router dom import
import { useNavigate } from "react-router-dom";
import Contacts from "components/Contacts/index.js";
import AdminNavbar from "components/Navbars/AdminNavbar.js";

function ProfilePage() {
  // state
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(false)
  

  // useNavigate var
  const navigate = useNavigate()

  // firebase functionality
  // checks for user on load
  const userCheck = async () => {
    setLoading(true)

    try {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
          console.log('User signed in. User info:', user)
          setUser(user)
          // ...
        } else {
          // User is signed out
          // ...
          navigate('/login')
        }
      });
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {userCheck()}, [])


  // template code
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });

  if(!user){
    return(
      <Container style={{minHeight: '100vh'}}>
        <p align='center'>No user logged in.</p>
      </Container>
    )
  }

  return (
    <>
      {loading ? 
      <>
      <Container style={{minHeight: '100vh'}}>
        <p align='center'>Loading user information...</p>
      </Container>
      </> 
      : 
      <>
      <AdminNavbar />
      <ProfilePageHeader />
      <div className="section profile-content" style={{minHeight: '100vh'}}>
        <Container>
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/faces/user.png")}
              />
            </div>
            <div className="name">
              <h4 className="title">
                Taliha Moores <br />
              </h4>
              <h6 className="description">Owner</h6>
            </div>
          </div>
          <br />
          {/*}
          <Contacts />
          {*/}
        </Container>
      </div>
      </>}
      
      <DemoFooter />
    </>
  );
}

export default ProfilePage;
