import Accordion from 'react-bootstrap/Accordion';
import {Container} from "react-bootstrap";
import imagine from "../assets/img/imagine-logo.png";
import christie from "../assets/img/christie-logo.svg"
import rocketry from "../assets/img/rocketry.png";
import uhn from "../assets/img/uhn-logo.png";
import moh from "../assets/img/moh-logo.png";

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
                    <div style={{display: 'flex', alignItems: 'center',  justifyContent: 'space-between', width: '100%' }}>
                      <img
                        src={imagine}
                        alt="Imagine Logo"
                        style={{ width: '100px', height: '30px', marginRight: '10px' }}
                      />
                      <span>Software Developer @ Imagine Communications</span>
                      <span style={{paddingRight:'20px'}}>May 2024 - August 2024</span>
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
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%'  }}>
                      <img
                        src={christie}
                        alt="Christie Logo"
                        style={{ width: '100px', height: '30px', marginRight: '10px' }}
                      />
                      <span>Software Test Engineer @ Christie Digital Systems</span>
                      <span style={{paddingRight:'20px'}}>September 2023 - December 2024</span>
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
                <Accordion.Item eventKey="2">
                <Accordion.Header>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%'  }}>
                      <img
                        src={rocketry}
                        alt="Rocketry Logo"
                        style={{ width: '40px', height: '40px', marginRight: '10px' }}
                      />
                      <span>Software Engineer @ Waterloo Rocketry</span>
                      <span style={{paddingRight:'20px'}}>October 2023 - Present</span>
                    </div>
                </Accordion.Header>
                        <Accordion.Body>
                            <ul style={{ listStyleType: 'disc', margin: '0'  }}>
                                <li>Spearheaded enhancement of Omnibus launcher by redesigning the GUI interface in pyqtgraph and restructured the launcher's back end for this feature, resulting in a 40% increase in user engagement.</li>
                                <li>Introduced a dynamic sparkline plot to the launcher to display live data, significantly enhancing real-time data visualization. </li>                    
                            </ul>
                        </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                <Accordion.Header>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%'  }}>
                      <img
                        src={uhn}
                        alt="uhn Logo"
                        style={{ width: '100px', height: '20px', marginRight: '10px' }}
                      />
                      <span>QA Analyst @ UHN</span>
                      <span style={{paddingRight:'20px'}}>January 2023 - April 2023</span>
                    </div>
                </Accordion.Header>
                        <Accordion.Body>
                            <ul style={{ listStyleType: 'disc', margin: '0'  }}>
                                <li>Utilized Jira to test, analyze and log bugs for a health monitoring application, Medly, utilised by 200+ users.</li>
                                <li>Developed a utility tool using pandas and xlwings to convert confidential input data format from Excel to JSON.</li>                    
                            </ul>
                        </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                <Accordion.Header>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%'  }}>
                      <img
                        src={moh}
                        alt="moh Logo"
                        style={{ width: '70px', height: '30px', marginRight: '10px' }}
                      />
                      <span>Technical Analyst @ Ministry of Health</span>
                      <span style={{paddingRight:'20px'}}>May 2022 - Sept 2022</span>
                    </div>
                </Accordion.Header>
                        <Accordion.Body>
                            <ul style={{ listStyleType: 'disc', margin: '0'  }}>
                                <li>Created Confluence pages integrated with Jira, for tracking and viewing of issues.</li>
                                <li>Used Kibana to build queries filtering events as per test scripts and verified Windows Event Log, for developers to retrieve relevant information quickly.</li>                    
                                <li>Proposed a link between Jira Service Management to a secure server for users to upload confidential documents, using Jira Rest API and testing the endpoints using Postman.</li>
                            </ul>
                        </Accordion.Body>
                </Accordion.Item>
                </Accordion>
            </div>
        </Container>
    </section>
    
  );
}




