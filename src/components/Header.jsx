import './Header.css'
import logo from '../assets/images/logo.png'
import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <img src={logo} alt="logo panvel"/>

                <navbar className="nav">
                    <ul>
                        <li>
                            <a href="">
                                <i class="fas fa-bars"></i>
                                Categorias
                            </a>
                        </li>
                    </ul>

                    <div className="input">
                        <input type="text" name="search" placeholder="O que você procura?"/>
                        <a href=""><i class="fas fa-search"></i></a>
                    </div>
                    
                    <ul>
                        <li>
                            <a href="">
                                <i class="fas fa-user-circle"></i>
                                Entrar
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i class="fas fa-shopping-basket"></i>
                            </a>
                        </li>
                    </ul>
                </navbar>
            </header>
        )
    }
}