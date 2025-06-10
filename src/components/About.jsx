import React from 'react'
import './About.css'

const About = () => {
    return (
        <div className="about-container">
            <h1>Quienes somos</h1>
            <div id="info">
                <h2>Propósito del proyecto</h2>
                <p>
                    Buscasofa es una aplicación desarrollada para ayudar a los usuarios a encontrar las gasolineras más baratas y cercanas, facilitando así el ahorro en combustible y promoviendo la transparencia en los precios.
                </p>
                <h2>Historia y motivación</h2>
                <p>
                    La idea surgió al detectar la dificultad de comparar precios de combustible de manera rápida y sencilla. Nuestro equipo, motivado por la experiencia personal y el interés en el desarrollo de soluciones útiles para la sociedad, decidió crear una plataforma intuitiva y accesible para todos los conductores.
                </p>
                <div className="team-photo" style={{ textAlign: 'center', margin: '2rem 0' }}>
                    <img
                        src="https://science.tcnj.edu/wp-content/uploads/sites/201/2019/09/131121_hamerman_1343.jpg"
                        alt="Equipo de 5 informáticos startaperos"
                        style={{ maxWidth: '50%', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
                    />
                    <div style={{ fontSize: '0.9em', color: '#888', marginTop: '0.5em' }}>
                        Nuestro equipo de startaperos en acción
                    </div>
                </div>
                <h2>Contacto y enlaces</h2>
                <ul>
                    <li>
                        Email: <a href="mailto:sales@buscasofa.com">sales@buscasofa.com</a>
                    </li>
                    <li>
                        Repositorio en GitHub: <a href="https://github.com/LostName1/buscasofa" target="_blank" rel="noopener noreferrer">LostName1/buscasofa</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default About