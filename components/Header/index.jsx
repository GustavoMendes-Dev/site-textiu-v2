import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap'

import brand from '../../assets/images/brand/brand.svg'

export default function Header() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
      window.addEventListener("scroll", () => {
          setScroll(window.scrollY > 0);
      });
  });

  return (
    <header className={scroll && 'sticky'}>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <Image
                src={brand}
                alt="Picture of the author"
                width={70} 
                height={30}
                automatically provided
            /> 
          </Navbar.Brand>
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link href="/fornecedores">Fornecedores</Nav.Link>
              <Nav.Link href="/profissionais">Profissionais</Nav.Link>
              <Nav.Link href="/oportunidades">Vagas</Nav.Link>
              <Nav.Link href="/anuncios">Anúncios</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Nav className="">
              <Nav.Link href="/">Entrar</Nav.Link>
              <Nav.Link href="/" className="highlight__button">Junte-se à Textiu.</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}