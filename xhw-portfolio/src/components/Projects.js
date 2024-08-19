import {Container, Row, Col, Tab, Nav} from "react-bootstrap";
import {ProjectCard} from './ProjectCard';
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import tiles from "../assets/img/tiles.svg";
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Projects =() => {
    const projects = [
        {
            title: "LinguaStream",
            description: "Designed and developed the front end of LinguaStream, a web application capable of translating YouTube video audio into any language of choice, using React and Chakra UI. ",
            imgUrl: projImg1 
            
        },
        {
            title: "CC3K Game",
            description: "Developed a multi-level game in C++ using different design patterns (Decorator, Factory, MVC).",
            imgUrl: projImg2 
            
        },
        {
            title: "MIPS Compiler",
            description: "Developed a compiler in C++ to convert a C-like programming language into MIPS assembly language.",
            imgUrl: projImg3
            
        },
        {
            title: "ASL Hand Signal Translator",
            description: "Built a device that recognises sequences of hand signals and constructs English sentences using a machine learning model that was trained to 95% accuracy.",
            imgUrl: projImg1 
            
        },
        {
            title: "Virtual Bookstore",
            description: "Developed a full-stack online book store application; using React to develop the frontend interface, leveraging MongoDB for database management and utilized Express.js and Node.js for backend functionalities.",
            imgUrl: projImg2 
            
        },
        {
            title: "Tile-Ordering System",
            description: "Designed and developed a system to capture and process customer orders for tiles in Python.",
            imgUrl: projImg3
            
        },
    ]
    return(
        <section className = "project" id ="project">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                    {({ isVisible }) =>
                    <div className ={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <h2>Projects</h2>
                        <p>These are the projects I have built</p>
                    </div>}
                    </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey ="first">
                        <Nav variant="pills" className ="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                          <Nav.Item>
                            <Nav.Link eventKey="first">Tab One</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="second">Tab Two</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="third" disabled>
                              Tab Three
                            </Nav.Link>
                          </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project,index) => {
                                            return(
                                                <ProjectCard 
                                                    key = {index}
                                                    {...project}
                                                    />

                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey = "second">Second</Tab.Pane>
                            <Tab.Pane eventKey = "third">Third</Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                        
                    </Col>
                </Row>
            </Container>
            <img className = "background-image-right" src = {colorSharp2}></img>
        </section>
    )
}