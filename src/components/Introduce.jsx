import React from "react";
import '../assets/stylesheets/introduce.css'
import flag from '../assets/images/MX-flag.png'

function Introduce() {
    return (
        <div className="introduce">
            <div className="info">
                <h1 className="about-me">
                    Sobre mi
                </h1>
                <p className="about-me-text">
                    Soy un estudiante universatario en <strong>Desarrollo de Software</strong>, amante de lo simple y entuciasta de lo nuevo.
                </p>
                <p className="aboout-me-text">
                    Actualmente, dedicado al desarrollo web, pero con anhelo al área de la ciber seguridad y Sistemas Operativos.
                </p>
            </div>
            <div className="practic-info" border="red">
                <table>
                    <tbody>
                        <tr>
                            <td>Ubicación</td>
                            <td class="country"><img className="flag" src={flag} alt="MX-Flag" srcset="" /> México</td>
                        </tr>
                        <tr>
                            <td>Idiomas</td>
                            <td>
                                Español <div className="progress-bar">
                                    <div className="progress es"></div>
                                </div>
                                Inglés <div className="progress-bar">
                                    <div className="progress en"></div>
                                </div>
                                Portugués <div className="progress-bar">
                                    <div className="progress pt"></div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Área de Trabajo
                            </td>
                            <td className="workon">
                                Backend
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Introduce;