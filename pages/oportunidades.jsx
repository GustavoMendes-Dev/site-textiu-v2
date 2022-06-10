import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from 'next/link';

import BtnFilter from '../components/BtnFilter';

export default function OportunitiesPage() {
  const [ filter, setFilter ] = useState('');
  const [ filterCategory, setFilterCategory ] = useState('');

  function handleClickFilter(name) {
      filter == name ? 
          setFilter("") 
      : 
          setFilter(name)
  }
  function handleClickCategory(name) {
      filterCategory == name ? setFilterCategory("") : setFilterCategory(name)
  }

  const oportunidadeFilter = data.result.filter(op => op.type.includes(filter) && op.categories.includes(filterCategory));

  return (
      <React.Fragment>
          <Header/>
          <div className="filter__content">
              <Container>
                  <div className="row justify-content-center">
                      <div className="col-lg-12 m-auto col-sm-12 col-md-12">
                          <div className="filters">
                              {typesData?.types.map(function(type) {

                                  let checked = filter == type ? "checked" : "" ;

                                  return (
                                    <BtnFilter key={type}
                                        className={`btn__filter ${checked}`}
                                        name={type}
                                        click={(name) => handleClickFilter(name = type)}
                                    />
                                  )
                              })}
                          </div>
                      </div>
                      <div className="col-lg-12 col-sm-12 col-md-12">
                          <div className="filters">
                              { categoriesData?.categories.map(function(category) {

                                  let checked = filterCategory == category ? "checked" : "" ;

                                  return (
                                      <BtnFilter
                                          className={`btn__filter ${checked}`}
                                          key={category}
                                          name={category}
                                          click={(name) => handleClickCategory(name = category)}
                                      />
                                  )
                              }) }
                          </div>
                      </div>
                  </div>
              </Container>
          </div>
              <Container>
                  <Row>
                      <Col>
                          <p className="mt-3">Encontramos <strong>{oportunidadeFilter.length}</strong> {filter ? `${filter.toLocaleLowerCase()}${oportunidadeFilter.length !== 1 ? "s" : ""}` : "vagas"} { filterCategory && `de ${filterCategory.toLocaleLowerCase()}` }  para você</p>
                      </Col>
                  </Row>

              <div className="row">
                  {oportunidadeFilter.map(function(oportunidade) {

                      let color = '';
                      switch (oportunidade.type) {
                          case "Emprego":
                              color = "emprego"
                              break;
                          case "Estágio":
                              color = "estagio"
                              break;
                          case "Diária":
                              color = "diaria"
                              break;
                          default:
                              break;
                      }

                      return (
                              <div key={oportunidade._id} className="col-lg-3 col-sm-6 col-md-4">
                                  <Link href={`/oportunidade/${oportunidade._id}`}>
                                  <a className="blog-block">
                                      {/* <img src="images/blog/blog-1.jpg" alt="" className="img-fluid"> */}
                                      <div className="blog-text">
                                          <h6 className={`author-name--${color}`}><span>{oportunidade.type}</span></h6>
                                          <h4>{oportunidade.title}</h4>
                                          <p>{oportunidade.created_by}</p>
                                          <h6 className="author-name">{oportunidade.provider.neighborhood} - {oportunidade.provider.state}</h6>
                                      </div>
                                  </a>
                                  </Link>
                              </div>
                      )
                  })}
                  </div>
              </Container>
          


          <Footer/>
      </React.Fragment>
  )
}