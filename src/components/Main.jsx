import './Main.css'
import woman2 from '../assets/images/woman2.jpg'
import React, { Component } from 'react'

import Order from './Order'
import Footer from './Footer'

export default class Header extends Component {
    render() {
        return (
            <main className="main">
                <Order />
                
                <article className="introduction">
                    <h2>Shampoos e dermocosméticos</h2>
                    <p>
                        Os shampoos dermocosméticos possuem fórmulas especiais que, além de tratar os fios, fortalecem a saúde do couro cabeludo — a pele sensível onde está a raiz dos cabelos. Eles regulam a oleosidade, hidratam e ajudam a combater a caspa e a queda dos fios.
                    </p>
                </article>

                <section className="content">
                    <div className="cards">
                        <div className="card">
                            <h2>Como escolher o melhor shampoo?</h2>
                            <p>
                                O cabelo pode ser oleoso, seco, misto ou quimicamente tratado. Cada caso exige um tipo de shampoo especial. Tão importante quanto levar em conta as características dos fios é considerar as necessidades da raiz. O ideal é procurar a orientação de um dermatologista para a indicação do produto mais adequado. Geralmente, a recomendação é usar produtos que <span>não contêm sulfato</span> e, por isso, tratam o couro cabeludo sem remover a sua hidratação natural. Considere também produtos com ácido salicílico, que ajuda a regular a descamação piroctona olamina, que evita a proliferação de fungos, e bisabotol, um ativo anti-inflamatório.
                            </p>
                        </div>

                        <div className="card">
                            <h2>Queda de cabelo nunca mais</h2>
                            <p>
                                Surpreende-se com a quanridade de fios soltos nos travesseiro ao acordar, ou que ficam presos no pente ao se arrumar? Os shampoos dermocosméticos antiqueda têm na sua composição ativos como as <span>vitaminas do complexo B</span>, essenciais para evitar os cabelos opacos e frágeis. <br/>
                                Tratamentos com laser e medicamentos tópicos também podem ajudar a diminuir a queda e estimular o crescimento dos fios. Mas só devem ser usados a partir da orientação de um dermatologista. Lembre-se que a má alimentação e o estresse estão entre as possíveis causas de queda de cabelo, então procure rever seus hábitos.
                            </p>
                        </div>
                    </div>

                    <div className="know">
                        <h2>Conheça nossos <a href="#">shampoos ></a>
                        </h2>
                        <img src={woman2} alt="mulher penteando o cabelo"/>
                    </div>
                </section>

                <section className="content-footer">

                    <h2>Anticaspa</h2>
                    <p>
                        Os mains procurados shampoos da categoria dos dermocosméticos são aqueles que têm ação anticaspa. Procure um que possua propriedades <span>antimicrobianas</span>, como o dissulfeto de selênio. E — de nove — que não contenha sulfato, caso contrário seu cabelo pode ficar ressecado e sem a proteção natual. <br/>
                        A aplicação do produto deve ser apenas no couro cabeludo com movimentos de massage,, deixando agir por alguns minutos. Evite banhos com água muito quente e, ao usar condicionadores e máscaras capilares, cuide para não aplicá-los na raiz do cabelo — assim, não ficarão resíduos acumulados estimulando a oleosidade.
                    </p>
                </section>

                <Footer />
            </main>
        )
    }
}