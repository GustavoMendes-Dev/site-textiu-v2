import React from 'react'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../components/Header'

import img_section from '../assets/images/final_4_2.png'
import CategoriesContent from '../components/Categories'
import { ArrowRight } from '../components/Icons'

export default function Home() {
  return (
    <div>
      <Header/>
      <div className="section__one">
        <Container>
          <div className="content__container">
            <Row>
              <Col lg={6}>
                <h1>A plataforma que reúne profissionais do setor têxtil à melhores oportunidades do mercado.</h1>
                <p>Unimos pequenas, médias e grandes empresas, indústrias, prestadores de serviços e fornecedores do mercado têxtil. Tudo em um só lugar. </p>
                <div className="content__buttons col-lg-12">
                  <a href="https://onboarding.textiu.com.br/">JUNTE-SE À TEXTIU</a>
                </div>
              </Col>
              <Col lg={6}>
                    {/* <Image
                        src={img_section}
                        alt="Picture of the author"
                        // width={70} 
                        automatically provided
                    />  */}
                  <a>
                    {/* <img className="w-100" src="assets/images/industry_group.png" alt=""/> */}
                  </a>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <CategoriesContent/>
      <div className="section__two">
        <Container>
          <Row>
            <Col className="content__info">
              <h2>Um pouco das <span>nossas vagas</span></h2>
            </Col>
          </Row>
          <Row>
            <Col className="content__info">
              <a href="#">Ver todas as vagas <ArrowRight/></a>
            </Col>
          </Row>
        </Container>
      </div>
      
      <footer>
        © 2022 textiu.
      </footer>
    </div>
  )
}
