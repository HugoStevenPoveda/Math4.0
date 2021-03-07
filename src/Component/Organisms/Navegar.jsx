import React from "react"
import {Navbar,Nav,NavDropdown} from "react-bootstrap"
import {Link} from 'react-router-dom'

 


const Navegar =()=>(
  <> 
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">
    <Link to ="/home"> Math 4.0</Link>
  
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">
       <Link to='/articulos'> Articulos</Link> 
      </Nav.Link>
      <NavDropdown title="Cursos" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Probabilidad</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Programación </NavDropdown.Item>
      </NavDropdown>
       
      <NavDropdown title="Ebook" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">
        <Link to ='/ebook/probabilidad' >Probabilidad</Link>
      
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Programación </NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#contactanos">
         <Link to="/contactanos">Contactanos</Link>
         </Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
    
  </>
       


)

export default Navegar
      
    
      

