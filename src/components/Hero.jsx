import './Hero.css'
import woman1 from '../assets/images/woman1.jpg'
import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="hero">
                <img src={woman1} alt="mulher loira com o cabelo solto"/>
                <div className="hero-container">
                    <h2>
                        Capilar
                        <span>Fortalecimento</span>
                    </h2>

                    <p>
                        Com suas fórmulas especiais, os shampoos dermocosméticos ajudam a fortalecer o cabelo, combater a queda e tratar a tão indesejada caspa.
                    </p>
                </div>
            </div>
        )
    }
}
    
        