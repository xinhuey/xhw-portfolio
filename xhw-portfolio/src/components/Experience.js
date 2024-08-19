import Accordion from 'react-bootstrap/Accordion';
import {Container} from "react-bootstrap";
import imagine from "../assets/img/imagine-logo.png";
import christie from "../assets/img/christie-logo.svg"

export const Experience = () => {
  return (
    <section className = "experience" id = "experiences">
        <Container>
            <div className = "accordion">
                <Accordion defaultActiveKey="0" >

                <Accordion.Item eventKey="0" >
                <Accordion.Header >
                    <div style={{display: 'flex', alignItems: 'center' }}>
                      <img
                        src={imagine}
                        alt="Imagine Logo"
                        style={{ width: '100px', height: '30px', marginRight: '10px' }}
                      />
                      <span>Software Developer @ Imagine Communications</span>
                    </div>
                </Accordion.Header>
                <Accordion.Body style={{ padding: '20px' }}>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', margin: '0', textAlign:'left' }}>
                        <li>Ensured Versio Control application stability by testing containers in Docker environments and also updated Docker versions to maintain security and compatibility across multiple environments.</li>
                        <li>Developed an automated testing framework in Python and Selenium for Versio Control Application, resulting in a significant reduction of regression testing time by 50%.</li>                    
                        <li>Configured Amazon EC2 instances with the correct Amazon Machine Images (AMI) based on project requirements, ensuring that the instances were optimized for performance prior to deployment.</li>
                    </ul>
                </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                <Accordion.Header>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <img
                        src={christie}
                        alt="Christie Logo"
                        style={{ width: '100px', height: '30px', marginRight: '10px' }}
                      />
                      <span>Software Test Engineer @ Christie Digital Systems</span>
                    </div>
                </Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                </Accordion.Item>
                </Accordion>
            </div>
        </Container>
    </section>
    
  );
}




