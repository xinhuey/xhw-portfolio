import Accordion from 'react-bootstrap/Accordion';
import {Container} from "react-bootstrap";
import imagine from "../assets/img/imagine-logo.png";
import christie from "../assets/img/christie-logo.svg"

export const Experience = () => {
  return (
    <section className = "experience" id = "experiences">
        <Container>
            <div className = "accordion">
                <h2>Experience</h2>
                <p>This is my work experience<br></br></p>
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
                <Accordion.Body >
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', margin: '0'  }}>
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
                            <ul style={{ listStyleType: 'disc', margin: '0'  }}>
                                <li>Designed and executed test cases, logged 5 critical defects before MicroTiles LED latest software release.</li>
                                <li>Enhanced and debugged a testing tool, CAWS which automates web UI testing, thus achieving 95% code coverage (Python and Selenium).</li>                    
                                <li>Developed a Python utility tool, facilitating the efficient file format conversion for EDID files (.bin to .txt).</li>
                                <li>Pioneered a log monitoring tool in Python (PyQt5) that establishes live telnet sessions to monitor and displays the logs in a table, improving efficiency and accuracy in testing phases by 40%.</li>
                            </ul>
                        </Accordion.Body>
                </Accordion.Item>
                </Accordion>
            </div>
        </Container>
    </section>
    
  );
}




