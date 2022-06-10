import React from 'react';

export default function Features(){

  return (
    <div class="account__container">
    <div class="container">
      <div class="row">
        <div data-wow-duration="1s" data-wow-delay="0.1s" class="animate fadeInDown col-lg-12 content__info" style="visibility: visible; animation-duration: 1s; animation-delay: 0.1s; animation-name: fadeInDown;">
          <h2>A conta corrente do dia a dia da sua empresa</h2>
          <div class="content__description">
            <p>Conta bancária completa com gestão inteligente.</p>
            <a href="https://onboarding.contasimples.com/">Criar conta <img src="assets/images/arrow_7.png" alt=""></a>
          </div>
        </div>
        <div data-wow-duration="1s" data-wow-delay="0.2s" class="animate fadeInUp col-lg-4 account__block" style="visibility: visible; animation-duration: 1s; animation-delay: 0.2s; animation-name: fadeInUp;">
          <div class="account__block-content">
            <img src="assets/images/icon-big/barcode.svg" alt="">
            <h2>Pague as contas da sua empresa</h2>
            <p>Pague contas sem perder tempo. Pague boletos na hora ou agende para o momento mais adequado para o
              financeiro.</p>
            <div class="account__link">
              <a href="https://onboarding.contasimples.com/">Pagar Contas <img src="assets/images/arrow.png" alt="">
              </a>
            </div>
          </div>
        </div>
        <div data-wow-duration="1s" data-wow-delay="0.2s" class="animate fadeInUp col-lg-4 account__block" style="visibility: visible; animation-duration: 1s; animation-delay: 0.2s; animation-name: fadeInUp;">
          <div class="account__block-content">
            <img src="assets/images/icon-big/grafico.svg" alt="">
            <h2>Faça a gestão de suas cobranças</h2>
            <p>Receba pagamentos direto na conta e faça o controle de forma integrada. Emita boletos, gerencie cobranças
              por status e receba notificações.</p>
            <div class="account__link">
              <a href="/onboarding">Gerir Cobranças <img src="assets/images/arrow.png" alt="">
              </a>
            </div>
          </div>
        </div>
        <div data-wow-duration="1s" data-wow-delay="0.2s" class="animate fadeInUp col-lg-4 account__block" style="visibility: visible; animation-duration: 1s; animation-delay: 0.2s; animation-name: fadeInUp;">
          <div class="account__block-content">
            <img src="assets/images/icon-big/arrows.svg" alt="">
            <h2>Receba e faça TEDs e PIX</h2>
            <p>Realize ou receba transferências e PIX para Contas Simples ou outros bancos de forma rápida e
              descomplicada.</p>
            <div class="account__link">
              <a href="https://onboarding.contasimples.com/">Receber e Enviar Transações
                <img src="assets/images/arrow.png" alt=""> </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}