import './Footer.css'
import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <footer>
                <p id="p-foot">
                    Para mais informações sobre o combate à caspa, acesse o <a href="#">Dermaclub</a> 
                </p>
            </footer>
        )
    }
}