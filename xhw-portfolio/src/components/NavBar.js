import { Navbar, Container, Nav} from "react-bootstrap";
import {useState, useEffect} from 'react';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github.png';
import navIcon3 from '../assets/img/nav-icon3.svg';
import logo from '../assets/img/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    const handleConnect = () =>{
      window.location.href = "https://www.linkedin.com/in/xhwong/";
    };

    //useEffect triggered when user scrolls
    useEffect(() =>{
        const onScroll = () =>{
            if(window.scrollY > 50){
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return() => window.removeEventListener("scroll", onScroll);
    },[])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return(
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
    <Container>
        <Navbar.Brand href="/">
            <img src={logo} alt = "Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className = {activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className = {activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className = {activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className ="navbar-text">
            <div className = "social-icon">
                <a href="https://www.linkedin.com/in/xhwong/"><img src={navIcon1} alt=""/></a>
                <a href="https://github.com/xinhuey"><img src={navIcon2} alt=""/></a>
                <a href="https://www.instagram.com/xinhuey_/"><img src={navIcon3} alt=""/></a>
            </div>
            <button className = "vvd" onClick ={handleConnect}>
                <span>Let's Connect</span>
                <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '8px' }} />
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}