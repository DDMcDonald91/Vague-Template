import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white" style={{background: 'black', color: 'white'}}>
      <Container>
        <Row>
          <div style={{marginTop: 'auto', marginBottom: 'auto'}}>
            <h6>
              Wild Wicks
            </h6>
          </div>
          <div className="credits ml-auto">
            <span className="copyright">
              © 2023, created by DDM Web Designs
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
