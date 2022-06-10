import React from "react";

export default function Plans() {
  return (
    <div className="plans__container">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 plans__heading">
            <h2>E quanto custa?</h2>
            <p>
              A conta é simples: sua empresa economiza, e ainda ganha autonomia,
              controle e visibilidade.
            </p>
          </div>
        </div>
        <div className="plans__row row">
          <div className="col-lg-4 plan__block">
            <div className="plan__heading">Plano Básico</div>
            <div className="plan__content">
              <h2>MEI</h2>
              <p>
                A plano ideal para empresas no Simples Nacional quer acelerar ainda mais o
                crescimento.
              </p>
              <h2>R$ 209,90</h2>
              <a href="https://onboarding.contasimples.com/">EM BREVE</a>
            </div>
          </div>
          <div className="col-lg-4 plan__block-highlight">
            <div className="plan__heading">Recomendado</div>
            <div className="plan__content">
              <h2>Controle</h2>
              <p>
                O que é mais simples do que um plano <strong>gratuito</strong>{" "}
                com todas as vantagens de conta e gestão financeira?
              </p>
              <h2>R$ 489,90</h2>
              <ul>
                <li>2 usuários</li>
                <li>30 NF de Produto</li>
                <li>30 NF de Serviço</li>
                <li>50 Boletos pelo seu Banco</li>
                <li>Suporte Gratuito</li>
              </ul>
              <a href="/onboarding">Experimente grátis</a>
            </div>
          </div>
          <div className="col-lg-4 plan__block">
            <div className="plan__heading">Em breve</div>
            <div className="plan__content">
              <h2>Avançado</h2>
              <p>
                Exclusividade e eficácia em um só lugar. Centralize sua vida
                financeira aqui.
              </p>
              <h2>R$ 1.798,90</h2>
              <ul>
                <li>2 usuários</li>
                <li>30 NF de Produto</li>
                <li>30 NF de Serviço</li>
                <li>50 Boletos pelo seu Banco</li>
                <li>Suporte Gratuito</li>
              </ul>
              <a href="#" className="disabled">
                EM BREVE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
