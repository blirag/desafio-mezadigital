import './Order.css'
import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="order">
                    <a href="#"><i class="fas fa-th"></i> Quantidade</a>
                    <a href="#"><i class="fas fa-exchange-alt"></i> Ordenar</a>
            </div>
        )
    }
}