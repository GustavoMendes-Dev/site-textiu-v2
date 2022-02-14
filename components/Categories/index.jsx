import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Buttons, Mannequin, Package, Sewing, Stamp, Thread } from '../Icons'

export default function CategoriesContent() {

  return (
    <div className="icons__container">
      <Container>
        <Row>
          <Col lg={2} xs={6}>
            <div className="icon__block">
              <Thread/>
            </div>
            <div className="icon__title">
              <h2>Fiação</h2>
            </div>
          </Col>
          <div className="col-6 col-lg-2">
            <div className="icon__block">
              <Stamp/>
            </div>
            <div className="icon__title">
              <h2>Estamparia</h2>
            </div>
          </div>
          <div className="col-6 col-lg-2">
            <div className="icon__block">
              <Sewing/>
            </div>
            <div className="icon__title">
              <h2>Confecção</h2>
            </div>
          </div>
          <div className="col-6 col-lg-2">
            <div className="icon__block">
              <Buttons/>
            </div>
            <div className="icon__title">
              <h2>Aviamentos</h2>
            </div>
          </div>
          <div className="col-6 col-lg-2 mb-mobile">
            <div className="icon__block">
              <Mannequin/>
            </div>
            <div className="icon__title">
              <h2>Modelista</h2>
            </div>
          </div>
          <div className="col-6 col-lg-2 mb-mobile">
            <div className="icon__block">
             <Package/>
            </div>
            <div className="icon__title">
              <h2>Embalagens</h2>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  )
}